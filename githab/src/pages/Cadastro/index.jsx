import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "../../App.css";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { FlexHeader } from "./style";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

import Logo from "../../img/Logo.svg";

import { toast, ToastContainer } from "react-toastify";

function Cadastro() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup.string().required("Nome obrigatório"),
    password: yup.string().required("Senha obrigatório"),

    twopassword: yup
      .string()
      .required("Senha obrigatório")
      .oneOf([yup.ref("password"), null], "As Senhas são Diferentes"),
    bio: yup.string().required("biografia obrigatória"),
    contact: yup.string().required("Telefone obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    delete data.twopassword;
    console.log(data)
    axios
      .post("https://kenziehub.herokuapp.com/users/", data)
      .then((response) => {
        console.log(response);
        history.push(`/`);
        toast.success("Cadastro Concluído!", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Cadastro incorreto!", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <FlexHeader>
        <img src={Logo} alt="Logo" />

        <button onClick={() => history.push("/")}>Voltar</button>
      </FlexHeader>
      <div className="container">
        <h3>Crie sua conta</h3>
        <span>Rápido e grátis, vamos nessa</span>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <h5>Nome</h5>
          <input
            placeholder="Digite seu Nome"
            maxLength={18}
            {...register("name")}
          />
          {errors.name?.message}
          <h5>Email</h5>
          <input placeholder="Digite seu email" {...register("email")} />
          {errors.email?.message}
          <h5>Senha</h5>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password?.message}
          <h5>Confirmar Senha</h5>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("twopassword")}
          />
          {errors.twopassword?.message}
          <h5>Bio</h5>
          <input
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          {errors.bio?.message}
          <h5>Contato</h5>
          <input
            placeholder="Opção de contato"
            {...register("contact")}
          />
          {errors.contact?.message}
          <h5>Selecionar módulo</h5>
          <div className="tipo">
            <select {...register("course_module")}>
              <option value={"Primeiro módulo (Introdução ao Frontend)"}>
                Primeiro módulo
              </option>
              <option value={"Segundo módulo (Frontend Avançado)"}>
                Segundo módulo
              </option>
              <option value={"Terceiro módulo (Introdução ao Backend)"}>
                Terceiro módulo
              </option>
              <option value={"Quarto módulo (Backend Avançado)"}>
                Quarto módulo
              </option>
            </select>
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}

export default Cadastro;
