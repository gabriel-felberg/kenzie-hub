import "./App.css";
import Routers from "./routes";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

Modal.setAppElement("#root");

function App() {
  const [objectData, setObjectData] = useState([]);
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
          history.push(`/HomePage`);
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

  return (
    <div className="App">
      <div>
        <Routers
          setObjectData={setObjectData}
          objectData={objectData}
          setArrayTecnologi={setArrayTecnologi}
          arrayTecnologi={arrayTecnologi}
          setIdTecnologi={setIdTecnologi}
          idTecnologi={idTecnologi}
          refreshTec={refreshTec}
        />
      </div>
    </div>
  );
}

export default App;
