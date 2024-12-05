"use client";
import { ordenesCompra } from "@/helpers/ordersHelper";
import { Iproduct, ISession } from "@/interfaces/ProductosInterfaces";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const CartView = () => {
  const [userData, setUserData] = useState<ISession>();
  const [cart, setCart] = useState<Iproduct[]>([]);
  const [totalCart, setTotalCart] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (storedCart) {
        let totalCart = 0;
        storedCart?.map((item: Iproduct) => {
          totalCart = totalCart + item.price;
        });
        setTotalCart(totalCart);
        setCart(storedCart);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      console.log(userData);
      setUserData(userData);
    }
  }, []);

  const handleClick = async () => {
    const productosId = cart?.map((product) => product.id);
    console.log(productosId);
    await ordenesCompra(productosId, userData?.token!);
    console.log(ordenesCompra);
    console.log(userData);
    console.log(userData?.token);
    alert("Compra Concretada");
    setCart([]);
    setTotalCart(0);
    localStorage.setItem("cart", "[]");
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    const updatedTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);

    setCart(updatedCart);
    setTotalCart(updatedTotal);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <div>
        {cart && cart.length > 0 ? (
          cart?.map((cart: Iproduct) => {
            return (
              <div key={cart.id} className="border-b-2 border-gray-200 py-4">
                <div className="flex items-center justify-around">
                  <div className="w-1/4 max-w-xs">
                    <img
                      src={cart.image}
                      alt={`imagen del producto ${cart.name}`}
                      className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" // Estilos para la imagen
                    />
                  </div>
                  <div className="w-3/4 pl-4">
                    <p className="text-xl font-semibold text-gray-900">
                      {cart.name}
                    </p>
                    <p className="text-gray-600 mt-1">Price: ${cart.price}</p>
                  </div>

                  <div className="mt-2 flex items-center">
                    <button
                      onClick={() => {
                        removeFromCart(cart.id);
                      }}
                      className="bg-red-950 text-white hover:text-orange-500 transition-colors duration-300 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 rounded-md"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-center text-4xl font-bold text-black mb-6 hover:text-orange-500 transition-transform duration-500 ease-in-out transform hover:scale-110">
              No posees nada en el carrito, ¿Desea agregar algo?
            </p>
            <br />
            <div className="flex justify-center rounded-md border-black text-sm text-gray-800 py-2 px-4 ">
              <Link
                href="/"
                className="text-lg border border-gray-900 bg-gray-900 text-white rounded-xl px-4 py-2 transition-transform duration-300 transform hover:scale-105 hover:bg-gray-800"
              >
                Ver más productos
              </Link>
            </div>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold">
            Tu total a pagar es:{" "}
            <span className="text-orange-500">${totalCart}</span>
          </p>
          <div>
            <div className="flex flex-col justify-center m-auto">
              <button
                onClick={handleClick}
                className="border text-white border-metallic-silver bg-gray-900 rounded-md px-4 py-2 hover:bg-orange-500 hover:text-white transition-colors duration-300 shadow-lg"
              >
                Acreditar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;
