import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { CurrentButton, Divflex, Form } from "./style";

const EditModal = ({ closeModal, elem }) => {
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
    delete data.title;
    console.log(elem.id);

    axios
      .put(`https://kenziehub.herokuapp.com/users/techs/${elem.id}`, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response);
        closeModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function escIten() {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${elem.id}`, {
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
    <Divflex f="column" bc="#000000" a="center" t="center">
      <Divflex
        bc="#343B41"
        w="100%"
        h="50px"
        t="center"
        a="center"
        j="space-between"
      >
        <h3>Tecnologia Detalhes</h3>
        <button onClick={() => closeModal()}>X</button>
      </Divflex>
      <Divflex f="column" a="center">
        <Form
          className="form"
          onSubmit={handleSubmit(onSubmitFunction)}
          w="300px"
          f="column"
          g="10px"
          a="flex-start"
          m="20px"
        >
          <span>Nome do projeto</span>
          <input
            placeholder="Tecnologia"
            value={`${elem.title}`}
            {...register("title")}
          />
          {errors.title?.message}
          <span>Status</span>

          <select {...register("status")}>
            <option value="inciante">inciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <CurrentButton
            type="submit"
            bc="#59323F"
            h="48px"
            w="300px"
            c="#fff"
            br="4px"
          >
            Salvar alterações
          </CurrentButton>
        </Form>
        <CurrentButton onClick={() => escIten()}             type="submit"
            bc="#59323F"
            h="48px"
            w="300px"
            c="#fff"
            br="4px"
            m="20px">Excluir</CurrentButton>
      </Divflex>
    </Divflex>
  );
};

export default EditModal;
