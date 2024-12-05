const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function ordenesCompra(products: number[], token: string) {
  try {
    const res = await fetch(`${APIURL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        products,
      }),
    });

    const orders = await res.json();
    return orders;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getOrdenes(token: string) {
  try {
    const res = await fetch(`${APIURL}/users/orders`, {
      method: "GET",
      cache: "no-cache",
      headers: { "Content-Type": "application/json", Authorization: token },
    });

    const orders = await res.json();
    return orders;
  } catch (error: any) {
    throw new Error(error);
  }
}
