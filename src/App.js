import Button from "./components/Button";
import { FcLikePlaceholder, FcCloseUpMode } from "react-icons/fc";
import Modals from "./components/Modals";
import Select from "./components/Select";
import Input from "./components/Input";

function App() {
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
        <Input />
        <hr />
        <Modals />
        <hr />
        <Select />
      </div>
    </>
  );
}

export default App;
