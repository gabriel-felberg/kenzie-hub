import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "../../App.css";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { FlexHeader } from "./style";
import axios from "axios";

import 'react-toastify/dist/ReactToastify.css';
import "./style.css"

import { toast, ToastContainer } from 'react-toastify';

function Cadastro() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup.string().required("Nome obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/,
        "Senha Ivalida"
      ),
    twopassword: yup
      .string()
      .required("Senha obrigatório")
      .oneOf([yup.ref("password"), null], "As Senhas são Diferentes"),
    bio: yup.string().required("biografia obrigatória"),
    contact: yup
      .string()
      .required("Telefone obrigatório")
      .matches(/^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/, "Telefone Inválido"),
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
    axios
      .post("https://kenzieshop.herokuapp.com/users/", data)
      .then((response) => console.log(response));
      toast.success('Cadastro Concluído!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      .catch( (error) => {
        console.log(error);
        toast.error('Cadastro incorreto!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      })
    history.push(`/`);
  };


  return (
    <>
      <FlexHeader />
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
            {...register("course_module")}
          />
          {errors.contact?.message}
          <h5>Selecionar módulo</h5>
          <div className="tipo">
            <select {...register("contact")}>
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
