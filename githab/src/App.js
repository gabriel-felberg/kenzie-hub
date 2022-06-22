import "./App.css";
import Routers from "./routes";
import Modal from "react-modal";
import { useEffect, useState } from "react";
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

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token && userId) {
      axios
        .get(`https://kenziehub.herokuapp.com/users/${JSON.parse(userId)}`)
        .then((response) => {
          setObjectData(response.data);
          history.push(`/HomePage`);
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("token")
          localStorage.removeItem("userId")
          history.push("/");
        });
    }
  }, []);

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
        />

        <Modal
          isOpen={openModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <AddModal closeModal={closeModal} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
