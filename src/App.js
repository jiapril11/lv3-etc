import { useEffect, useState } from "react";
import Button from "./components/Button";
import { FcLikePlaceholder, FcCloseUpMode } from "react-icons/fc";
import Modals from "./components/Modals";
import Select from "./components/Select";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [item, setItem] = useState({});
  const handleSubmitItem = (e) => {
    e.preventDefault();
    alert(`{name: '${name}', price: '${price.replace(",", "")}'}`);

    setItem((prev) => ({ ...prev, name, price }));
    setName("");
    setPrice("");
  };

  return (
    <>
      <div style={{ padding: 16 }}>
        <h1>Button</h1>
        <div>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <Button color="primary" size="lg" outline="true">
              Large Button <FcLikePlaceholder />
            </Button>
            <Button color="primary" size="md">
              Medium Button
            </Button>
            <Button color="primary" size="sm">
              Small Button
            </Button>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button color="negativ" size="lg" outline="true">
              Large Button <FcCloseUpMode />
            </Button>
            <Button color="negativ" size="md">
              Medium Button
            </Button>
            <Button color="negativ" size="sm">
              Small Button
            </Button>
          </div>
        </div>
        <hr />
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
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/[^0-9]/g, "")
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ","))
                }
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button type="submit">저장</button>
          </div>
        </form>
        <hr />
        <Modals />
        <hr />
        <Select />
      </div>
    </>
  );
}

export default App;
