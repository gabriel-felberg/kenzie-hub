import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "../../App.css";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { CurrentButton, Divflex, FlexHeader, Form } from "./style";
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
    <Divflex className="App-register">
      <FlexHeader j="center" w="25rem" m="30px" pt="80px">
        <img src={Logo} alt="Logo" width="350px" />
        {/* <button onClick={() => history.push("/")}>Voltar</button> */}
      </FlexHeader>
      <div className="container">
        <h3>Crie sua conta</h3>
        <span>Rápido e grátis, vamos nessa?</span>

        <Form
          className="form"
          onSubmit={handleSubmit(onSubmitFunction)}
          w="300px"
          f="column"
          g="10px"
          a="flex-start"
          m="20px"
        >
          <Divflex g="30px" a="center">
            <span>Nome</span> 
            <h6>{errors.name?.message}</h6>
          </Divflex>
          <input
            placeholder="Digite seu Nome"
            maxLength={18}
            {...register("name")}
          />
          <Divflex g="30px" a="center">
            <span>Email</span> 
            <h6>{errors.email?.message}</h6>
          </Divflex>
          <input placeholder="Digite seu email" {...register("email")} />
          <Divflex g="30px" a="center">
            <span>Senha</span> 
            <h6>{errors.password?.message}</h6>
          </Divflex>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <Divflex g="30px" a="center">
            <span>Confirmar Senha</span> 
            <h6>{errors.twopassword?.message}</h6>
          </Divflex>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("twopassword")}
          />
          <Divflex g="20px">
            <span>Bio</span> 
            <h6>{errors.bio?.message}</h6>
          </Divflex>
          <input
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <Divflex g="20px">
            <span>Contato</span> 
            <h6>{errors.contact?.message}</h6>
          </Divflex>
          <input placeholder="Opção de contato" {...register("contact")} />
          <span style={{width:"140px"}}>Selecionar módulo</span>
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
            <span>
              Já possue cadatro?, <a href="http://localhost:3000/">Login</a>
            </span>
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
    </Divflex>
  );
}

export default Cadastro;
