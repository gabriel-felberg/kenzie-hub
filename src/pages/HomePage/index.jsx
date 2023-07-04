

import { useHistory } from "react-router";
import Card from "../../components/Cards";

import { Divflex, FlexHeader } from "./style";
import Logo from "../../img/Logo.svg";
import EditModal from "../../components/Modal/EditModal";

import Modal from "react-modal";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const HomePage = ({ objectData, openAddModal, closeModal }) => {
  const history = useHistory();
  console.log(objectData);

  const [ editModal, setEditModal] = useState(false)


  function closeEditModal(){
    setEditModal(false)
  }
  return (
    <>
      <FlexHeader g="300px">
        <img src={Logo} alt="Logo" />
        <button onClick={() => history.push("/")}>Sair</button>
      </FlexHeader>
      <Divflex g="250px" a="center">
        <h3>olá, {objectData.data.user.name}</h3>
        <span>{objectData.data.user.course_module}</span>
      </Divflex>
      <Divflex f="column">
        <Divflex j="center" g="400px">
          <h2>Tecnologias</h2>
          <button onClick={ () => openAddModal()}>+</button>
        </Divflex>
        <ul>
          <Card setEditModal={setEditModal}/>
        </ul>
        
        <Modal
          isOpen={editModal}
          onRequestClose={closeEditModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <EditModal closeModal={closeEditModal}/>
        </Modal>
      </Divflex>
    </>
  );
};

export default HomePage;
