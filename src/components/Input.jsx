import React from "react";
import { useState } from "react";

export default function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [item, setItem] = useState({});

  const handleInputPrice = (e) => {
    e.target.value = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setPrice(e.target.value);
  };
  const handleSubmitItem = (e) => {
    e.preventDefault();
    alert(`{name: '${name}', price: '${price.split(",").join("")}'}`);

    setItem((prev) => ({ ...prev, name, price }));
    setName("");
    setPrice("");
  };
  return (
    <div>
      <h1>Input</h1>
      <form onSubmit={handleSubmitItem}>
        <div style={{ display: "flex" }}>
          <div>
            <label htmlFor="inputName">이름 </label>
            <input
              type="text"
              id="inputName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="inputPrice">가격 </label>
            <input
              type="text"
              id="inputPrice"
              value={price}
              onChange={handleInputPrice}
            />
          </div>
          <button type="submit">저장</button>
        </div>
      </form>
    </div>
  );
}
