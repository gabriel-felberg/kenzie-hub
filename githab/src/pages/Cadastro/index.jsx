import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "../../App.css";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Cadastro() {
  const [type, setType] = useState;
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
    cellphone: yup
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
    history.push(`/`);
  };

  return (
    <>
      <div className="container">
        <h2>Cadastro</h2>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <h5>Digite aqui seu nome</h5>
          <input placeholder="Digite seu Nome" maxLength={18} {...register("name")} />
          {errors.name?.message}
          <h5>Digite aqui seu nome</h5>
          <input placeholder="Digite seu email" {...register("email")} />
          {errors.email?.message}
          <h5>Digite aqui seu nome</h5>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {errors.password?.message}
          <h5>Digite aqui seu nome</h5>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("twopassword")}
          />
          {errors.twopassword?.message}
          <h5>Digite aqui seu nome</h5>
          <input type="text" placeholder="Fale sobre você" {...register("bio")} />
          {errors.bio?.message}
          <h5>Digite aqui seu nome</h5>
          <input placeholder="Opção de contato" {...register("cellphone")} />
          {errors.cellphone?.message}
          <h5>Digite aqui seu nome</h5>
          <div className="tipo">
            <select onChange={(event) => setType(event.target.value)}>
              <option>Primeiro módulo</option>
              <option>Segundo módulo</option>
              <option>Terceiro módulo</option>
              <option>Quarto módulo</option>
              <option>Quinto módulo</option>
              <option>Sexto módulo</option>
            </select>
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
