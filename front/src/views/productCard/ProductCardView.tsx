"use client";
import { getProductsByName } from "@/helpers/products.helpers";
import { Iproduct } from "@/interfaces/ProductosInterfaces";
import { useState, useEffect } from "react";

const ProductSearch = () => {
  const [productName, setProductName] = useState<string>("");
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getProductsByName(productName);
      setProducts(result);
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (productName !== "") {
      handleSearch();
    }
  }, [productName]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto"
        value={productName}
        onChange={(event) => setProductName(event.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Buscando..." : "Buscar"}
      </button>

      {error && <p>Error: {error}</p>}
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
              <p>Stock: {product.stock}</p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No se encontraron productos</p>
      )}
    </div>
  );
};

export default ProductSearch;
