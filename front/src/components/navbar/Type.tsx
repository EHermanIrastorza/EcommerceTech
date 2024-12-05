"use client";
import { Iproduct, ISession } from "@/interfaces/ProductosInterfaces";
import { getProductsByName } from "@/helpers/products.helpers";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NavbarTs = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<ISession>();
  const [isOpen, setIsOpen] = useState(false);

  const [productName, setProductName] = useState<string>("");
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, [router]);


  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getProductsByName(productName);
      setProducts(result);
      
      if (result.length > 0) {
        const productId = result[0].id;
        router.push(`/productos/${productId}`);
      } else {
        setError("No se encontraron productos con ese nombre.");
      }
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-3xl w-4/5 mx-auto py-6 flex justify-between items-center bg-gray-800 shadow-lg">
      <nav className="w-full flex justify-evenly items-center">
        <div className="text-lg font-bold text-white">
          <Link
            href="/"
            aria-current="page"
            className="hover:text-orange-500 transition-colors duration-300"
          >
            Home
          </Link>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Buscar producto"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="bg-gray-800 text-white rounded-3xl px-4 py-2 border border-gray-600 focus:outline-none hidden md:block"
          />
          <button
            onClick={handleSearch}
            disabled={loading}
            className="ml-2 bg-orange-400 text-white px-4 py-2 rounded-3xl "
          >
            {loading ? "Buscando..." : "Buscar"}
          </button>
        </div>
        <button
          className="ml-4 text-white focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? "✖️" : "☰"}
        </button>

        <div
          className={`absolute right-0 bg-gray-800 rounded-md shadow-lg ${
            isOpen ? "block" : "hidden"
          } md:flex md:relative md:shadow-none md:bg-transparent`}
        >
          {userData?.user.email ? (
            <div className="flex space-x-6 p-4 md:p-0">
              <ul className="flex space-x-8 text-gray-300 font-medium">
                <li>
                  <Link
                    href="/dashboard"
                    className="hover:text-orange-500 transition-colors duration-300 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 rounded-md"
                  >
                    Perfil
                  </Link>
                </li>
              </ul>
              <ul className="flex space-x-8 text-gray-300 font-medium">
                <li>
                  <Link
                    href="/cart"
                    className="hover:text-orange-500 transition-colors duration-300 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 rounded-md"
                  >
                    Carrito
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex space-x-6 p-4 md:p-0">
              <ul className="flex space-x-8 text-gray-300 font-medium">
                <li>
                  <Link
                    href="/login"
                    className="hover:text-orange-500 transition-colors duration-300 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 rounded-md"
                  >
                    Ingresar
                  </Link>
                </li>
              </ul>
              <ul className="flex space-x-8 text-gray-300 font-medium">
                <li>
                  <Link
                    href="/register"
                    className="hover:text-orange-500 transition-colors duration-300 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 rounded-md"
                  >
                    Registrar
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default NavbarTs;
