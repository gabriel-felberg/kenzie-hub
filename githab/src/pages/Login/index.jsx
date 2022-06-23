import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { CurrentButton, Divflex, FlexHeader, Form } from "./style";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";

import Logo from "../../img/Logo.svg";

function Login({ setData }) {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatório"),
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
      .post("https://kenziehub.herokuapp.com/sessions/", data)
      .then((response) => {
        setData(response.data.user);
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user.id);

        setTimeout(() => {
          history.push(`/HomePage`);
        }, 3000);
        toast.success("Login Concluído!", {
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
        toast.error("Login incorreto!", {
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
      <FlexHeader m="0px 20px">
        <img src={Logo} alt="Logo" />
      </FlexHeader>
      <Divflex f="column" w="80%" a="center" g="20px">
        <h3>Login</h3>

        <Form
          className="form"
          onSubmit={handleSubmit(onSubmitFunction)}
          w="300px"
          f="column"
          g="10px"
          
        >
          <Divflex f="column"a="flex-start">
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
          </Divflex>
          <div>
            <CurrentButton
              type="submit"
              bc="#FF427F"
              h="48px"
              w="300px"
              c="#fff"
              br="4px"
            >
              Logar
            </CurrentButton>
          </div>
        </Form>
        <Divflex f="column" g="20px" a="center">
          <span>Não possui uma conta?</span>
          <CurrentButton
            onClick={() => history.push(`/Cadastro`)}
            bc="#868E96"
            h="48px"
            w="300px"
            c="#fff"
            br="4px"
            
          >
            Cadastre-se
          </CurrentButton>
        </Divflex>
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
      </Divflex>
    </>
  );
}

export default Login;
