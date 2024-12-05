import { Icategory, Iproduct } from "@/interfaces/ProductosInterfaces";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsDB(): Promise<Iproduct[]> {
  try {
    const res = await fetch(`${APIURL}/products`, { next: { revalidate: 60 } });
    const products: Iproduct[] = await res.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductsById(id: string): Promise<Iproduct> {
  try {
    const products: Iproduct[] = await getProductsDB();
    const productfiltered = products.find(
      (product) => product.id.toString() === id
    );
    if (!productfiltered) throw new Error("No existe el producto");
    return productfiltered;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductsByName(name: string): Promise<Iproduct[]> {
  try {
    const products = await getProductsDB();
    const filteredProducts = products.filter(
      (product) => product.name.toLowerCase().includes(name.toLowerCase())
    );
    if (filteredProducts.length === 0) throw new Error("No hay productos con ese nombre");
    return filteredProducts;
  } catch (error: any) {
    throw new Error(error.message);
  }
}


export async function getProductsByCategory(categoryId: number): Promise<Iproduct[]> {
  try {
    const productos = await getProductsDB();
    const filteredProductos = productos.filter(
      (product) => product.categoryId === categoryId 
    );
    if (filteredProductos.length === 0) throw new Error("No hay productos en esta categoría");
    return filteredProductos;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
