import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Divflex } from "../../../pages/HomePage/style";

const EditModal = ({ closeModal, personData }) => {
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
    delete data.title
    console.log(data);
    axios
      .put(`https://kenziehub.herokuapp.com/users/techs/${personData.id}`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response);
        console.log("editou");
        closeModal();
      })
      .catch((error) => {
        console.log(error);
        console.log("n editou");
      });
  };
  function escIten(){
    console.log(personData);
    console.log(localStorage.getItem("token"));
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/:${personData.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response);
        console.log("deletou");
        closeModal();
      })
      .catch((error) => {
        console.log(error);
        console.log("n deletou");
      });
  }
  return (
    <Divflex f="column">
      <Divflex>
        <h1>Tecnologia Detalhes</h1>
        <button onClick={() => closeModal()}>X</button>
      </Divflex>
      <Divflex f="column">
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <h5>Nome do projeto</h5>
          <input placeholder="Tecnologia" value={`${personData.title}`} {...register("title")} />
          {errors.title?.message}
          <h5>Status</h5>
          <div className="tipo">
            <select value={`${personData.type}`}{...register("status")}>
              <option>inciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
          </div>
          <button type="submit">Salvar alterações</button>
        </form>
        <button onClick={()=> escIten()}>Excluir</button>
      </Divflex>
    </Divflex>
  );
};

export default EditModal;
