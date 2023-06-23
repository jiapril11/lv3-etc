import React, { useState } from "react";
import Button from "./Button";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const ModalBackdrop = styled.div`
  &.on {
    display: block;
  }
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);

  & .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 500px;
    height: 300px;
    background-color: #fff;
    transform: translate(-50%, -50%);
    border-radius: 12px;
  }
`;
const ModalBackdrop01 = styled(ModalBackdrop)`
  & button {
    cursor: pointer;
  }
`;
const ModalBackdrop02 = styled(ModalBackdrop)`
  & button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    right: 5px;
    top: 5px;
    font-size: 25px;
    border: 0;
    background-color: transparent;
    border-radius: 100%;
    transition: 0.5s;
    &:hover {
      color: red;
      cursor: pointer;
    }
  }
`;

export default function Modals() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const handleControlModal = () => {
    setModal1((prev) => (prev = !prev));
  };
  const handleControlModal2 = (e) => {
    setModal2((prev) => (prev = !prev));
    e.stopPropagation();
  };

  return (
    <>
      <h1>Modals</h1>
      <ButtonWrapper>
        <div onClick={() => handleControlModal()}>
          <Button color="primary" size="lg">
            modal1
          </Button>
        </div>
        <div onClick={handleControlModal2}>
          <Button size="lg">modal2</Button>
        </div>
      </ButtonWrapper>

      <ModalBackdrop01 className={modal1 && `on`}>
        <div className="modal modal01">
          <p>This is First Modal</p>
          <ButtonWrapper>
            <div onClick={handleControlModal}>
              <Button size="sm">close</Button>
            </div>
            <Button size="sm" color="primary">
              ok
            </Button>
          </ButtonWrapper>
        </div>
      </ModalBackdrop01>

      <ModalBackdrop02 className={modal2 && `on`} onClick={handleControlModal2}>
        <div className="modal modal02">
          <p>This is Second Modal</p>
          <div>
            <button onClick={handleControlModal2}>
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </ModalBackdrop02>
    </>
  );
}
