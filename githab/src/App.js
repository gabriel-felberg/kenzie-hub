import "./App.css";
import Routers from "./routes";
import Modal from "react-modal";
import { useState } from "react";
import AddModal from "./components/Modal/AddMadal";

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

Modal.setAppElement("#root");

function App() {
  const [openModal, setOpenModal] = useState(false);

  function openAddModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Routers openAddModal={openAddModal} closeModal={closeModal}/>

        <Modal
          isOpen={openModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <AddModal closeModal={closeModal}/>
        </Modal>
      </header>
    </div>
  );
}

export default App;
