import React from "react";
import ProductCard from "../components/ProductCard";
import CartBar from "../components/CartBar";

const mockProducts = [
  {
    id: 1,
    name: "Белый худи Telegram",
    price: 179000,
    image: "https://cdn-icons-png.flaticon.com/512/8067/8067870.png",
  },
  {
    id: 2,
    name: "Зелёная футболка Telegram",
    price: 99000,
    image: "https://cdn-icons-png.flaticon.com/512/8067/8067871.png",
  },
];

const ProductListPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-telegramBg p-4 pb-24">
      <h1 className="text-2xl font-semibold mb-4 text-primary">Full Stock Market</h1>

      <div className="grid grid-cols-2 gap-4">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <CartBar />
    </div>
  );
};

export default ProductListPage;
