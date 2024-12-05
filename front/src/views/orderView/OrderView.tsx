"use client";
import { getOrdenes } from "@/helpers/ordersHelper";
import { IOrden, Iproduct, ISession } from "@/interfaces/ProductosInterfaces";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const OrderView: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<ISession>();
  const [orders, setOrders] = useState<IOrden[]>([]);
  const [productos, setProductos] = useState<Iproduct[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession") || "[]");
      setUserData(userData);
    }
  }, []);

  const fetchData = async () => {
    const respuestaOrdenes = await getOrdenes(userData?.token!);
    setOrders(respuestaOrdenes);
  };
  useEffect(() => {
    if (userData?.user.name) {
      userData?.user.name === undefined ? router.push("/login") : fetchData();
    }
  }, [userData?.user]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      {orders && orders.length > 0 ? (
        orders.map((order: IOrden) => (
          <div
            key={order.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <section>
              <p className="text-gray-300 mb-1">
                Fecha:{" "}
                <span className="font-light">
                  {new Date(order.date).toLocaleDateString()}
                </span>
              </p>
              <p className="text-orange-500 mb-2">
                Estado:{" "}
                <span className="font-semibold">
                  {order.status.toLocaleLowerCase()}
                </span>
              </p>
            </section>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400">
          No tienes ninguna compra hecha en tu historial
        </p>
      )}
    </div>
  );
};

export default OrderView;
