import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import * as yup from "yup";
import "./Login.css";

function Login() {
  // const history = useNavigate();
  const { login, register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [isCreatingUser, setIsCreatingUser] = useState(false); // Estado para controlar a criação de usuário

  const validationLogin = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const validationRegister = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().min(1).max(20).required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (isCreatingUser) {
        await validationRegister.validate({
          email,
          name,
          password,
          confirmPassword,
        });
        const response = await register({ email, password, name });
        setIsCreatingUser(false);
        console.log("aqui response register", response);
        alert(
          "Usuário criado com sucesso. Faça login com as novas credenciais."
        );
      } else {
        await validationLogin.validate({ email, password });
        const response = await login({
          email,
          password,
        });
        console.log("aqui response login", response);
      }
    } catch (error) {
      console.error("Erro:", { error });
      // alert("Erro ao criar usuário ou fazer login.");
      alert(error);
    }
  };

  if (isCreatingUser) {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="login-form">
          <h2>Criar Usuário</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Criar usuário</button>

            <div
              className="register-text"
              onClick={() => setIsCreatingUser(!isCreatingUser)}
            >
              <p>
                Já possui uma conta?{" "}
                <span className="crie-uma">Faça login</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <div
            className="register-text"
            onClick={() => setIsCreatingUser(!isCreatingUser)}
          >
            <p>
              Não tem uma conta? <span className="crie-uma">Crie uma</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
