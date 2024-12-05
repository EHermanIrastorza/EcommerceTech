"use client";

import { Iproduct, ISession } from "@/interfaces/ProductosInterfaces";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const ProductViews: React.FC<Iproduct> = ({
  id,
  name,
  image,
  description,
  price,
  stock,
  categoryId,
}) => {
  const [userData, setUserData] = useState<ISession>();
  const router = useRouter();

  useEffect(() => {
    if (typeof window != "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, []);
  const handleAddToCart = () => {
    if (!userData?.token) {
      alert("debes estar conectado con tu cuenta");
      router.push("/register");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productoexiste = cart.some((product: Iproduct) => {
        if (product.id === id) return true;
      });
      if (productoexiste) {
        alert("este producto ya esta en su carro");
        router.push("/cart");
      } else {
        cart.push({ name, description, price, stock, image, categoryId, id });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("producto agregado");
      }
    }
  };
  return (
    <div>
      <div className="w-1/3 h-100 object-cover rounded-md mb-4 mx-auto">
        <img src={image} alt={`Nombre de la imagen ${name}`} />
      </div>
      <div className="m-10 w-1/3 mx-auto bg-gray-900 p-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
        <div className="text-white">
          <h2 className="text-center text-xl font-bold tracking-wide mb-2 text-cobalt-500">
            {name}
          </h2>
          <p className="text-gray-400 mb-4">{description}</p>

          <div className="flex justify-between items-center text-orange-500 mb-6">
            <p className="text-lg font-semibold">Price: ${price}</p>
            <p
              className={`text-sm font-semibold ${
                stock > 0 ? "text-green-400" : "text-red-500"
              }`}
            >
              {stock > 0 ? `Stock: ${stock}` : "Out of stock"}
            </p>
          </div>

          <div className="flex justify-center">
            <button
              className={`px-4 py-2 font-semibold rounded-lg ${
                stock > 0
                  ? "bg-cobalt-500 hover:bg-cobalt-600 text-white"
                  : "bg-gray-500 text-gray-300 cursor-not-allowed"
              } transition-colors duration-300 ease-in-out`}
              onClick={handleAddToCart}
              disabled={stock === 0}
            >
              {stock > 0 ? "Agregar al Carro" : "No Disponible"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViews;
