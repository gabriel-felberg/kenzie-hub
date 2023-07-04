
import React from "react";
import { Divflex } from "./style";

const Card = ({ setEditModal, elem, setIdTecnologi}) => {
  function openEditditModal() {
    setEditModal(true);
    setIdTecnologi(elem.id)
  }
  return (
    <Divflex j="space-between" onClick={() => openEditditModal()}>

        <p>{elem.title}</p>

        <span>{elem.status}</span>

    </Divflex>
  );
};

export default Card;
