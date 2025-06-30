import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartBar: React.FC = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalSum = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const navigate = useNavigate();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-primary text-white rounded-2xl px-4 py-3 shadow-md flex justify-between items-center">
      <span>{totalItems} товар(а) • {totalSum.toLocaleString()} сум</span>
      <button
        className="bg-white text-primary text-sm font-semibold rounded-xl px-3 py-1"
        onClick={() => navigate("/checkout")}
      >
        Оформить
      </button>
    </div>
  );
};

export default CartBar;
