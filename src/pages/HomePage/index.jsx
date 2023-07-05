import { useHistory } from "react-router";
import Card from "../../components/Cards";
import style from"../../App.css"
import { CurrentButton, Divflex, FlexHeader } from "./style";
import Logo from "../../img/Logo.svg";

import { useEffect } from "react";

const HomePage = ({
  setTypeObject,
  objectData,
  OpenAndCloseModal,
  setArrayTecnologi,
  arrayTecnologi,
  setIdTecnologi,
}) => {
  const history = useHistory();

  useEffect(() => {
    setArrayTecnologi(objectData.techs);
  }, []);

  function esc() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    history.push("/");
  }

  return (
    <div className="App-header">
      <FlexHeader g="40%" h="100px" j="center" w="100%" a="center" bc="#24282d">
        <Divflex g="750px" a="center">
          <img src={Logo} alt="Logo" />
          <CurrentButton
            bc="#3d4148"
            br="5px"
            p="5px 10px"
            onClick={() => {
              esc();
            }}
          >
            Sair
          </CurrentButton>
        </Divflex>
      </FlexHeader>
      <Divflex f="column" g="30px">
        <Divflex g="250px" a="center">
          <h3>Olá, {objectData.name}</h3>
          <span>{objectData.course_module}</span>
        </Divflex>
        
        <hr/>

        <Divflex f="column" g="30px" a="center">
          <Divflex j="center" g="500px" a="center">
            <h3>Tecnologias</h3>
            <CurrentButton
              bc="#3d4148"
              br="5px"
              onClick={() => {
                setTypeObject("Add");
                OpenAndCloseModal();
              }}
            >
              +
            </CurrentButton>
          </Divflex>
          <Divflex f="column" g="30px" w="80%" oy="auto" h="470px">
            {arrayTecnologi?.map((elem) => (
              <>
                <Card
                  key={elem.id}
                  OpenAndCloseModal={OpenAndCloseModal}
                  elem={elem}
                  setIdTecnologi={setIdTecnologi}
                  setTypeObject={setTypeObject}
                />
              </>
            ))}
          </Divflex>
        </Divflex>
      </Divflex>
    </div>
  );
};

export default HomePage;
