import { getProductsById } from "@/helpers/products.helpers";
import ProductViews from "@/views/productView/productView";
import React from "react";

const Detalle: React.FC<{ params: { productosId: string } }> = async ({
  params,
}) => {
  const product = await getProductsById(params.productosId);

  return (
    <div>
      <ProductViews {...product} />
    </div>
  );
};

export default Detalle;
