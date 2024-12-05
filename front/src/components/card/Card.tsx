import React from "react";
import { Icard } from "./Types";

const Card: React.FC<Icard> = ({
  id,
  name,
  price,
  description,
  stock,
  image,
}) => {
  return (
    <div className="flex flex-row flex-wrap justify-around">
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 m-4">
        <img
          src={image}
          alt={`Imagenes de producto ${name}`}
          className="w-full h-48 object-cover" 
        />
        <div className="p-4">
          <h2 className="text-black font-light text-xl mb-2">{name}</h2>
          <p className="text-gray-700 text-lg mb-2">
            Price: <span className="font-bold">${price}</span>
          </p>
          <p className="text-gray-600 mb-2">{description}</p>
          <p className="text-gray-500">Stock: {stock}</p>
        </div>
        <button className="mt-4 bg-gold text-white font-semibold py-2 px-4 rounded transition duration-300 hover:bg-silver">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};
export default Card;
