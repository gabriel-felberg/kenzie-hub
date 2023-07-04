import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "../../App.css";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { CurrentButton, FlexHeader, Form } from "./style";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

import Logo from "../../img/Logo.svg";

import { toast, ToastContainer } from "react-toastify";

function Cadastro() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup.string().required("Nome obrigatório"),

    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        /^[0-9a-zA-Z$*&@#]{6,}$/,
        "a senha deve ter no mínimo 6 caracteres"
      ),

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


      <FlexHeader j="space-between" w="250px" m="30px">


        <img src={Logo} alt="Logo" />

        <button onClick={() => history.push("/")}>Voltar</button>
      </FlexHeader>
      <div className="container">
        <h3>Crie sua conta</h3>
        <span>Rápido e grátis, vamos nessa</span>

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
          <input
            placeholder="Digite seu Nome"
            maxLength={18}
            {...register("name")}
          />
          {errors.name?.message}

          <span>Email</span>
          <input placeholder="Digite seu email" {...register("email")} />
          {errors.email?.message}
          <span>Senha</span>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password?.message}

          <span>Confirmar Senha</span>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("twopassword")}
          />
          {errors.twopassword?.message}
          <span>Bio</span>
          <input
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          {errors.bio?.message}
          <span>Contato</span>
          <input placeholder="Opção de contato" {...register("contact")} />
          {errors.contact?.message}
          <span>Selecionar módulo</span>
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
            <CurrentButton
              type="submit"
              bc="#59323F"
              h="48px"
              w="300px"
              c="#fff"
              br="4px"
            >
              Cadastrar
            </CurrentButton>
          </div>
        </Form>
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
