import { useHistory } from "react-router";
import Card from "../../components/Cards";

import { Divflex, FlexHeader } from "./style";
import Logo from "../../img/Logo.svg";
import EditModal from "../../components/Modal/EditModal";

import Modal from "react-modal";
import { useEffect, useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color:"black",
  },
};



const HomePage = ({
  objectData,
  openAddModal,
  setArrayTecnologi,
  arrayTecnologi,
  setIdTecnologi,
  idTecnologi,
}) => {
  const history = useHistory();

  const [editModal, setEditModal] = useState(false);

  function closeEditModal() {
    setEditModal(false);
  }
  useEffect(() => {
    setArrayTecnologi(objectData.techs);
  }, []);

  function esc() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    history.push("/");
  }

  const tech = arrayTecnologi?.find((elem) => {
    return elem.id === idTecnologi;
  });

  return (
    <>
      <FlexHeader g="40%" h="100px" j="center" w="100%" a="center">
        <img src={Logo} alt="Logo" />
        <button
          onClick={() => {
            esc();
          }}
        >
          Sair
        </button>
      </FlexHeader>
      <Divflex g="250px" a="center">
        <h3>olá, {objectData.name}</h3>
        <span>{objectData.course_module}</span>
      </Divflex>
      <Divflex f="column" g="30px" a="center">
        <Divflex j="center" g="400px" a="center">
          <h3>Tecnologias</h3>
          <button onClick={() => openAddModal()}>+</button>
        </Divflex>
        <Divflex f="column" g="30px" w="80%">
          {arrayTecnologi?.map((elem) => (
            <>
              <Card
                key={elem.id}
                setEditModal={setEditModal}
                elem={elem}
                setIdTecnologi={setIdTecnologi}
              />
            </>
          ))}
          <Modal
            isOpen={editModal}
            onRequestClose={closeEditModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <EditModal
              closeModal={closeEditModal}
              arrayTecnologi={arrayTecnologi}
              elem={tech}
            />
          </Modal>
        </Divflex>
      </Divflex>
    </>
  );
};

export default HomePage;
