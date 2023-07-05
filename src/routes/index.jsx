import { Route, Switch } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Modal from "react-modal";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import { useState } from "react";
import AddModal from "../components/Modal/AddMadal";
import EditModal from "../components/Modal/EditModal";

function Routers({
  openAddModal,
  objectData,
  setObjectData,
  setArrayTecnologi,
  arrayTecnologi,
  setIdTecnologi,
  idTecnologi,
  refreshTec
}) {
  const [typeObject, setTypeObject] = useState("");
  const [modal, setModal] = useState(false);

  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      height: "100%",
      width: "100%",
    },
    content: {
      position: "absolute",
      top:"50%",
      left: "50%",
      right: "auto",
      bottom: 0,
      height:
        typeObject === "Add"
          ? "23.5rem"
          : typeObject === "Edit"
          ? "29rem"
          : "740px",
      background: "#fff",
      overflow: "hidden",
      overflowX: "hidden",
      WebkitOverflowScrolling: "touch",
      borderRadius: "15px",
      outline: "none",
      padding: "0px",
      marginRight: "0%",
      transform: "translate(-50%, -50%)",
      maxHeight: "1036px",
      maxWidth: "520px",
      minWidth: "346px",
    },
  };

  function OpenAndCloseModal() {
    setModal(!modal);
  }
  const tech = arrayTecnologi?.find((elem) => {
    return elem.id === idTecnologi;
  });
  return (
    <>
      <Switch>
        <Route exact path={`/`}>
          <Login setData={setObjectData} />
        </Route>
        <Route path={`/Cadastro`}>
          <Cadastro />
        </Route>
        <Route path={`/HomePage`}>
          <HomePage
            OpenAndCloseModal={OpenAndCloseModal}
            setTypeObject={setTypeObject}
            objectData={objectData}
            openAddModal={openAddModal}
            setArrayTecnologi={setArrayTecnologi}
            arrayTecnologi={arrayTecnologi}
            setIdTecnologi={setIdTecnologi}
            idTecnologi={idTecnologi}
          />
        </Route>
      </Switch>
      <Modal
        isOpen={modal}
        onRequestClose={OpenAndCloseModal}
        style={customStyles}
      >
        {typeObject === "Add" ? (
          <AddModal
            OpenAndCloseModal={OpenAndCloseModal}
            setArrayTecnologi={setArrayTecnologi}
            arrayTecnologi={arrayTecnologi}
            refreshTec={refreshTec}
          />
        ) : (
          <EditModal
            OpenAndCloseModal={OpenAndCloseModal}
            arrayTecnologi={arrayTecnologi}
            elem={tech}
          />
        )}
      </Modal>
    </>
  );
}
export default Routers;
