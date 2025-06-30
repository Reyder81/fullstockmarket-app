import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-telegramBg flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-2xl font-semibold text-primary mb-4">Спасибо за заказ! 🎉</h1>
      <p className="text-sm mb-6">Мы свяжемся с вами в ближайшее время.</p>

      <Link
        to="/"
        className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-medium"
      >
        Вернуться в каталог
      </Link>
    </div>
  );
};

export default ThankYouPage;
