import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image: "https://img.ws.mms.shopee.co.id/id-11134207-7r991-lq3dpsgw6ini40",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Motorola G24",
    price: 340,
    description: "Motorola G24 is the best choice of price and confort!",
    image:
      "https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/m/o/moto-g24-icegreen-front-batterycase_1.png",
    categoryId: 1,
    stock: 14,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://www.ventasrosario.com.ar/wp-content/uploads/2023/06/macbook-air-nuevo-apple-15-pulgadas-647e1748844f5.jpg",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://ar.oneclickstore.com/wp-content/uploads/2023/06/iPad_Pro_Wi-Fi_11_in_4th_generation_Silver_PDP_Image_Position-1b_MXLA.jpg",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://ar.oneclickstore.com/wp-content/uploads/2021/04/Watch6_40_SG-G001.jpg",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://gbaimportaciones.com.ar/wp-content/uploads/2024/06/AirPodsPro2_1.jpg",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-202210?wid=1080&hei=880&fmt=jpeg&qlt=90&.v=1720816295293",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "Magic Keyboard",
    price: 299,
    description:
      "Elevate your typing experience with the Magic Keyboard: sleek, responsive keys, a built-in trackpad, and compatibility with iPad Pro. Perfect for productivity on the go, the Magic Keyboard is an essential tool for professionals and creatives alike.",
    image:
      "data:image/jpeg;base64,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",
    categoryId: 8,
    stock: 12,
  },
  {
    name: "AirTag",
    price: 29,
    description:
      "Keep track of your belongings with the AirTag: a simple and effective way to locate your items using the Find My network. Attach it to your keys, wallet, or bag, and find them with ease using your iPhone.",
    image:
      "https://ar.oneclickstore.com/wp-content/uploads/2021/10/Airtag_x1_004.jpg",
    categoryId: 9,
    stock: 20,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
