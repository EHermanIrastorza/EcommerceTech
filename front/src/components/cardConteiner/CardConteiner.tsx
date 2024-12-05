import React from "react";
import productsToPreLoad from "@/helpers/productosHelper";
import Card from "../card/Card";
import { getProductsDB } from "@/helpers/products.helpers";
import Link from "next/link";

const CardConteiner = async () => {
  const products = await getProductsDB();
  return (
    <div className="flex flex-row flex-wrap justify-around">
      {products &&
        products.map((product) => (
          <Link href={`/productos/${product.id}`} key={product.id}>
            <Card {...product} />
          </Link>
        ))}
    </div>
  );
};

export default CardConteiner;
