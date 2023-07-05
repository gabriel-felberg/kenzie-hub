
import React from "react";
import { Divflex } from "./style";

const Card = ({ OpenAndCloseModal, elem, setIdTecnologi, setTypeObject}) => {
  function openEditditModal() {
    OpenAndCloseModal();
    setIdTecnologi(elem.id)
    setTypeObject("Edit")
  }
  return (
    <Divflex j="space-between" pr="15px" onClick={() => openEditditModal()}>
        <p>{elem.title}</p>
        <span>{elem.status}</span>
    </Divflex>
  );
};

export default Card;
