import React from "react";
import { Divflex } from "./style";

const Card = ({ setEditModal, elem }) => {
  function openEditditModal() {
    setEditModal(true);
  }
  return (
    <Divflex j="space-between" onClick={() => openEditditModal()}>

        <div>{elem.title}</div>

        <span>{elem.status}</span>

    </Divflex>
  );
};

export default Card;
