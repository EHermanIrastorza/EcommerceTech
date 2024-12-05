"use client";
import { useEffect, useState } from "react";
import { Icategory, Iproduct } from "@/interfaces/ProductosInterfaces";
import { getProductsByCategory } from "@/helpers/products.helpers";
import { useRouter } from "next/navigation";

const CategoryView = () => {
  const router = useRouter();
  const [categoryData, setCategoryData] = useState<Icategory[]>([]);
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  useEffect(() => {
    const categoriesToPreLoad: Icategory[] = [
      { id: 1, name: "Smartphones" },
      { id: 2, name: "Laptops" },
      { id: 3, name: "Tablets" },
      { id: 4, name: "Headphones" },
      { id: 5, name: "Cameras" },
      { id: 6, name: "Printers" },
      { id: 7, name: "Monitors" },
      { id: 8, name: "Storage" },
      { id: 9, name: "Accessories" },
    ];
    setCategoryData(categoriesToPreLoad);
  }, []);

  const handleCategoryClick = async (categoryId: number) => {
    try {
      const filteredProducts = await getProductsByCategory(categoryId);
      setProducts(filteredProducts);
      setIsPanelOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPanelOpen) {
      timer = setTimeout(() => {
        setIsPanelOpen(false);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [isPanelOpen]);

  const handleClickToProduct = (productId: number) => {
    router.push(`/productos/${productId}`);
  };

  return (
    <div className="relative h-screen flex justify-center items-center">
      <button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="px-4 py-2 text-[#D4AF37] bg-gray-900 rounded-md"
      >
        {isPanelOpen ? "Cerrar categorías" : "Abrir categorías"}
      </button>

      <div
        className={`fixed top-0 left-0 h-128 w-64 bg-gray-100 p-4 shadow-lg transition-transform transform ${
          isPanelOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Categorías</h2>
        {categoryData && categoryData.length > 0 ? (
          categoryData.map((category) => (
            <div
              key={category.id}
              className="py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </div>
          ))
        ) : (
          <p>No hay categorías disponibles</p>
        )}
      </div>

      <div className="ml-64 p-4">
        <h2 className="text-2xl font-semibold mb-4">Productos</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow-md cursor-pointer"
                onClick={() => handleClickToProduct(product.id)}
              >
                <img
                  src={product.image}
                  alt={`Imagen de ${product.name}`}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
                <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
                <p className="text-gray-500">${product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay productos disponibles en esta categoría</p>
        )}
      </div>
    </div>
  );
};

export default CategoryView;
