import { useHistory } from "react-router";
import Card from "../../components/Cards";

import { Divflex, FlexHeader } from "./style";
import Logo from "../../img/Logo.svg";
import EditModal from "../../components/Modal/EditModal";

import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";

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

  const [editModal, setEditModal] = useState(false);

  function closeEditModal() {
    setEditModal(false);
  }
  let personData = objectData.techs;
  return (
    <>
      <FlexHeader g="40%" h="100px" j="center" w="100%" a="center" >
        <img src={Logo} alt="Logo" />
        <button onClick={() => history.push("/")}>Sair</button>
      </FlexHeader>
      <Divflex g="250px" a="center">
        <h3>olá, {objectData.name}</h3>
        <span>{objectData.course_module}</span>
      </Divflex>
      <Divflex f="column" g="30px" a="center">
        <Divflex j="center" g="400px" a="center">
          <h2>Tecnologias</h2>
          <button onClick={() => openAddModal()}>+</button>
        </Divflex>
        <Divflex f="column" g="30px" w="80%">
          {personData?.map((elem, index) => (
            <> 
              <Card key={index} setEditModal={setEditModal} elem={elem} />
            </>
          ))}
              <Modal
                isOpen={editModal}
                onRequestClose={closeEditModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <EditModal closeModal={closeEditModal} personData={personData} />
              </Modal>
        </Divflex >
      </Divflex>
    </>
  );
};

export default HomePage;
