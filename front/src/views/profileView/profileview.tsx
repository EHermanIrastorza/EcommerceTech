"use client"

import { IregisterProps, ISession } from "@/interfaces/ProductosInterfaces";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProfileView = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<ISession>();
  console.log(userData);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userSession = localStorage.getItem("userSession");
      if (!userSession) {
        router.push("/login");
        return;
      }

      try {
        const userDataFromStorage: ISession = JSON.parse(userSession);
        setUserData(userDataFromStorage);
        console.log(userDataFromStorage, "LINEA NUMERO 23");
      } catch (error) {
        console.error("Error parsing user data from localStorage", error);
        localStorage.removeItem("userSession");
        router.push("/login");
      }
    }
  }, [router]);

  if (!userData) {
    return <p>Cargando...</p>;
  }

  const handleClick = () => {
    1;
    localStorage.removeItem("userSession");
    alert("saliste de la sesión");
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md w-full bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
        <h2 className="text-center text-2xl font-bold mb-4 text-cobalt-500 text-white">
          PERFIL
        </h2>

        <section className="text-white flex flex-col items-center text-center p-5">
          <p className="mb-2 p-4">
            Nombre: <span className="font-light">{userData.user?.name}</span>
          </p>
          <p className="mb-2 p-4">
            Dirección:{" "}
            <span className="font-light">{userData.user?.address}</span>
          </p>
          <p className="mb-2 p-4">
            Teléfono: <span className="font-light">{userData.user?.phone}</span>
          </p>
          <p className="mb-4 p-4">
            Email: <span className="font-light">{userData.user?.email}</span>
          </p>
        </section>

        <div className="flex justify-center">
          <button
            className="px-4 py-2 font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-300 ease-in-out"
            onClick={handleClick}
          >
            Desconectar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
