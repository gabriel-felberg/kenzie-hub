import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { CurrentButton, Divflex, Form } from "./style";

const AddModal = ({
  closeModal,
  setArrayTecnologi,
  arrayTecnologi,
  refreshTec,
}) => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {

    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response);
        console.log("deu bom");
        setArrayTecnologi([...arrayTecnologi, data]);
        refreshTec();

        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Divflex f="column" bc="#000000" a="center" t="center" >
      <Divflex bc="#343B41" w="100%" h="50px" t="center" a="center" j="space-between">
        <h3>Cadastrar Tecnologia</h3>
        <button onClick={() => closeModal()}>X</button>
      </Divflex>
      <Divflex f="column">
        <Form
          className="form"
          onSubmit={handleSubmit(onSubmitFunction)}
          w="300px"
          f="column"
          g="10px"
          a="flex-start"
          m="20px"
        >
          <span>Nome</span>
          <input placeholder="Tecnologia" {...register("title")} />
          {errors.title?.message}
          <span>Selecionar status</span>
          <div className="tipo">
            <select {...register("status")}>
              <option>inciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
          </div>
          <CurrentButton
            type="submit"
            bc="#FF427F"
            h="48px"
            w="300px"
            c="#fff"
            br="4px"
          >
            Cadastrar Tecnologia
          </CurrentButton>
        </Form>
      </Divflex>
    </Divflex>
  );
};

export default AddModal;
