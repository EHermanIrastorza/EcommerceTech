"use client";
import { login } from "@/helpers/auth.helper";
import { validateLogingForm } from "@/helpers/Validations";
import { IErrorProps, ILogingProps } from "@/interfaces/ProductosInterfaces";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const router = useRouter();

  const initialValues: ILogingProps = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: ILogingProps) => {
    try {
      const response = await login(values);
      console.log(handleSubmit, "funciona");

      const { token, user } = response;
      localStorage.setItem("userSession", JSON.stringify({ token, user }));
      console.log(token, user);
      alert("Usuario ingresado");
      router.push("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert(
        "Hubo un problema al iniciar sesión. Por favor, inténtelo de nuevo."
      );
    }
  };

  const validate = (values: ILogingProps) => {
    const errors: IErrorProps = {};
    const validationErrors = validateLogingForm(values);
    console.log(validationErrors);

    if (validationErrors) {
      Object.keys(validationErrors).forEach((key) => {
        errors[key as keyof IErrorProps] = validationErrors[key];
      });
    }

    return errors;
  };

  return (
    <section className="py-10 px-5 min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-4/5 max-w-lg ">
        <h2 className="text-cobalt-500 text-2xl font-bold mb-5 text-center text-white">
          Ingresar
        </h2>
        <hr className="border-gray-600 mb-6" />

        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, values }) => (
            <Form className="space-y-4">
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 text-white rounded border border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-white"
                >
                  Contraseña
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-gray-800 text-white rounded border border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none py-2 px-3 transition-colors duration-200 ease-in-out"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex items-center justify-center mt-6">
                <button
                  type="submit"
                  className="border border-[#C0C0C0] text-[#D4AF37] bg-black rounded-md px-4 py-2 transition-transform duration-300 transform hover:scale-105 hover:bg-orange-500 hover:text-white"
                >
                  Enviar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default LoginForm;
