import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Divflex } from "../../../pages/HomePage/style";

const EditModal = ({closeModal}) => {
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
    console.log(localStorage.getItem("token"));
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
      })
      .then((response) => {
        console.log(response);
        console.log("deu bom")
        closeModal()
      })
      .catch((error) => {
        console.log(error);
        console.log("deu ruim")
      });
  };
  return (
    <Divflex f="column">
      <Divflex>
        <h1>Cadastrar Tecnologia</h1>
        <button onClick={() => closeModal()}>X</button>
      </Divflex>
      <Divflex f="column">
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <h5>Nome</h5>
          <input placeholder="Tecnologia" {...register("title")} />
          {errors.title?.message}
          <h5>Selecionar status</h5>
          <div className="tipo">
            <select {...register("status")}>
              <option>inciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
          </div>
          <button type="submit" >Cadastrar Tecnologia</button>
        </form>
      </Divflex>
    </Divflex>
  );
};

export default EditModal;
