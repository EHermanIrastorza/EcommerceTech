import Link from "next/link";
import React from "react";

const FooterTs: React.FC = () => {
  return (
    <div className="bg-gray-900 py-10 px-5">
      <footer>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-white">Tech Store</span>

            <ul className="flex space-x-8 text-gray-300 font-medium">
              <li>
                <Link
                  href="/cart"
                  className="hover:text-orange-500 transition-colors duration-300 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 rounded-md"
                >
                  Carrito
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-500 transition-colors duration-300 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-orange-500 transition-colors duration-300 border-b-2 border-transparent hover:border-orange-500 px-3 py-2 rounded-md"
                >
                  Ingresar
                </Link>
              </li>
            </ul>
          </div>
          <hr className="border-gray-700 my-4" />
          <span className="text-gray-400 text-sm">
            © 2024. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default FooterTs;
