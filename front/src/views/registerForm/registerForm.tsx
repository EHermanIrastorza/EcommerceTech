"use client";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";

import React from "react";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}

export default function Register() {
  const router = useRouter();


  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        address: "",
        password: "",
      }}
      validate={(values) => {
        const errors: Partial<FormValues> = {};

        if (!values.name) {
          errors.name = "El nombre es requerido";
        }

        if (!values.email) {
          errors.email = "El email es requerido";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Email inválido";
        }

        if (!values.address) {
          errors.address = "La dirección es requerida";
        }

        if (!values.phone) {
          errors.phone = "El número de teléfono es requerido";
        } else if (values.phone.length < 7) {
          errors.phone = "El número de teléfono debe tener al menos 7 dígitos";
        }

        if (!values.password) {
          errors.password = "La contraseña es requerida";
        } else if (values.password.length < 6) {
          errors.password = "La contraseña debe tener al menos 6 caracteres";
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const APIURL = process.env.NEXT_PUBLIC_API_URL;
        console.log(JSON.stringify(values));
        try {
          const res = await fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          console.log(res);

          if (!res.ok) {
            throw new Error("Error al registrar usuario");
          }

          const responseData = await res.json();
          console.log(responseData);
          alert(`Usuario ${values.name} creado correctamente`);
          router.push("/");
          setSubmitting(false);
          resetForm();
        } catch (error) {
          console.log(error);
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <div className="flex items-center justify-center h-screen  ">
          <div className="max-w-md w-full bg-gray-900 p-4 rounded-lg">
            <h2 className="text-center text-2xl font-bold mb-4 text-cobalt-500 text-white">
              Formulario de Registro
            </h2>
            <hr className="border-gray-600 mb-4" />

            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="text-white">
                  Nombre:
                </label>
                <Field
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Roberto Carlos"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-cobalt-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="text-white">
                  Email:
                </label>
                <Field
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Robert@gmail.com"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-cobalt-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="text-white">
                  Dirección:
                </label>
                <Field
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Ubicación de su localidad"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-cobalt-500"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="text-white">
                  Nº Celular:
                </label>
                <Field
                  id="phone"
                  type="number"
                  name="phone"
                  placeholder="30124575"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-cobalt-500"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="text-white">
                  Contraseña:
                </label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  placeholder="*******"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-cobalt-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`border border-[#C0C0C0] text-[#D4AF37] bg-black rounded-md px-4 py-2 transition-transform duration-300 transform hover:scale-105 hover:bg-orange-500 hover:text-white ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Enviar
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}
