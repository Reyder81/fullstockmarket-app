import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { CartItem } from "../context/CartContext";

const CheckoutPage: React.FC = () => {
  const { cart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const total = cart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);

  const handleSubmit = () => {
    if (!name || !phone) {
      alert("Пожалуйста, заполните имя и телефон");
      return;
    }

    const orderData = {
      name,
      phone,
      items: cart.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total: total,
    };

    // Отправка данных в Telegram WebApp
    console.log("Telegram WebApp:", window.Telegram);
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData(JSON.stringify(orderData));
      window.Telegram.WebApp.close(); // закрываем мини-приложение
    } else {
      alert("Ошибка: Telegram WebApp не найден");
    }

    // Очистка формы
    setName("");
    setPhone("");
  };


  return (
    <div className="min-h-screen bg-telegramBg p-4">
      <h2 className="text-xl font-semibold mb-4 text-primary">Оформление заказа</h2>

      <div className="bg-white rounded-2xl p-4 shadow mb-4">
        {cart.map((item: CartItem) => (
          <div key={item.id} className="flex justify-between mb-2 text-sm">
            <span>{item.name} × {item.quantity}</span>
            <span>{(item.price * item.quantity).toLocaleString()} сум</span>
          </div>
        ))}
        <div className="flex justify-between font-bold border-t pt-2 mt-2 text-sm">
          <span>Итого:</span>
          <span>{total.toLocaleString()} сум</span>
        </div>
      </div>

      <input
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-2 p-2 rounded-xl border border-gray-300 text-sm"
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full mb-4 p-2 rounded-xl border border-gray-300 text-sm"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-primary text-white p-3 rounded-xl font-semibold"
      >
        Оформить заказ
      </button>
    </div>
  );
};

export default CheckoutPage;
