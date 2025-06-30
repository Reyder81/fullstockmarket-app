import React from "react";
import { useCart } from "../context/CartContext"; // 👈

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart(); // 👈

  return (
    <div className="bg-white rounded-2xl shadow p-2 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-contain mb-2"
      />
      <h2 className="text-sm font-medium text-center">{product.name}</h2>
      <p className="text-primary font-semibold mt-1">{product.price.toLocaleString()} сум</p>
      <button
        className="mt-2 bg-primary text-white text-sm rounded-xl px-4 py-1"
        onClick={() => addToCart(product)}
      >
        В корзину
      </button>
    </div>
  );
};

export default ProductCard;
