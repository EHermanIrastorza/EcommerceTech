import { Iproduct } from "@/interfaces/ProductosInterfaces";

const productsToPreLoad: Iproduct[] = [
  {
    id: 1,
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    categoryId: 1,
    stock: 10,
    image: "https://m.media-amazon.com/images/I/51cPOOgzp0L.jpg",
  },

  {
    id: 2,
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://www.sagitariodigital.com.ar/wp-content/uploads/2024/04/AIR-M3-9.jpg",
    categoryId: 2,
    stock: 10,
  },
  {
    id: 3,
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://ar.oneclickstore.com/wp-content/uploads/2021/05/ipad-pro-5-12-inch-space-gray-0-8829999-1-1.jpg",
    categoryId: 3,
    stock: 10,
  },
  {
    id: 4,
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
    id: 5,
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://ar.oneclickstore.com/wp-content/uploads/2024/04/airpods-pro-2da-gen-con-estuche-magsafe-usb-c.jpg",
    categoryId: 5,
    stock: 10,
  },
  {
    id: 6,
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://outtec.com.ar/wp-content/uploads/2023/09/1602674429_1598684.jpg",
    categoryId: 6,
    stock: 10,
  },
];

export default productsToPreLoad;
