export interface Iproduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface Icategory {
  id: number;
  name: string;
}

export interface ILogingProps {
  email: string;
  password: string;
}

export interface IErrorProps {
  email?: string;
  password?: string;
}

export interface IregisterProps {
  email: string;
  password: string;
  name: string;
  adress: string;
  phone: number;
}

export interface ISession {
  token: string;
  user: {
    address: string;
    email: string;
    id: number;
    name: string;
    phone: string;
    role: string;
    orders: [];
  };
};

export interface IOrden{
    id: number;
    status: string;
    date: Date;
    products: Iproduct[]
}