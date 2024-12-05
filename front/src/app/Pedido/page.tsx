import { getProductsDB } from "@/helpers/products.helpers";
import React from "react";

const pedido = async () => {
  const renderizados = await getProductsDB();
  return (
    <div>
      {renderizados.map((product) => (
        <ul key={product.id}>
          <li>{product.price}</li>
        </ul>
      ))}
      <div>Se esta renderizando</div>
    </div>
  );
};

export default pedido;
