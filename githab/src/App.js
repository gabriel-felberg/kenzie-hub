
import "./App.css";
import Routers from "./routes";
import Modal from "react-modal";
import { ffect, useEffect, useState } from "react";
import AddModal from "./components/Modal/AddMadal";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
  const [objectData, setObjectData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [arrayTecnologi, setArrayTecnologi] = useState([]);
  const [idTecnologi, setIdTecnologi] = useState("");

  const history = useHistory();

  function refreshTec() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token && userId) {
      axios
        .get(`https://kenziehub.herokuapp.com/users/${userId}`)
        .then((response) => {
          setObjectData(response.data);

        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          history.push("/");
        });
    }
  }
  useEffect(() => {
    refreshTec();
  }, [objectData]);

  function openAddModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }
  return (
    <div className="App">
      <div className="App-header">
        <Routers
          openAddModal={openAddModal}
          closeModal={closeModal}
          setObjectData={setObjectData}
          objectData={objectData}
          setArrayTecnologi={setArrayTecnologi}
          arrayTecnologi={arrayTecnologi}
          setIdTecnologi={setIdTecnologi}
          idTecnologi={idTecnologi}
          refreshTec={refreshTec}
        />

        <Modal
          isOpen={openModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <AddModal
            closeModal={closeModal}
            setArrayTecnologi={setArrayTecnologi}
            arrayTecnologi={arrayTecnologi}
            refreshTec={refreshTec}
          />
        </Modal>
      </div>
</div>
  );
}

export default App;
