import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { GoTriangleDown } from "react-icons/go";

export default function Select() {
  const [selected, setSelected] = useState("React");
  const [visibleOptions, setVisibleOption] = useState(false);

  const SelectOptions = ({ children }) =>
    ReactDOM.createPortal(children, document.querySelector("#root"));

  const handleSelectOption = (e) => {
    setSelected((prev) => (prev = e.target.textContent));
    setVisibleOption((prev) => (prev = false));
  };
  return (
    <div>
      <Box>
        <h1>Select</h1>
        <SelectBox onClick={() => setVisibleOption((prev) => !prev)}>
          <span>{selected}</span>
          <GoTriangleDown />
        </SelectBox>
      </Box>
      {visibleOptions && (
        <SelectOptions className="options">
          <Options>
            <ul onClick={handleSelectOption}>
              <li>React</li>
              <li>Java</li>
              <li>Spring</li>
              <li>React Native</li>
            </ul>
          </Options>
        </SelectOptions>
      )}
    </div>
  );
}

const Box = styled.div`
  width: 100%;
  height: 200px;
  border: 3px solid #eee;
  overflow: hidden;
`;
const SelectBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 30px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid orange;
  border-radius: 4px;
  cursor: pointer;
`;
const Options = styled.div`
  position: relative;
  height: 200px;

  & ul {
    position: absolute;
    width: 200px;
    top: -100px;
    left: 19px;
    margin: 0 0;
    padding: 0;
    list-style: none;
    border: 1px solid #a6a6f0;
    border-radius: 4px;
  }

  & li {
    padding: 7px 10px;
    background-color: #fff;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
      background-color: #e8edf9;
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;
