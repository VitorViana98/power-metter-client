import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import "./Login.css";

function Login() {
  const history = useNavigate();
  const { login, register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [isCreatingUser, setIsCreatingUser] = useState(false); // Estado para controlar a criação de usuário

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (isCreatingUser) {
        const response = await register({ email, password, name, userLogin });
        console.log("aqui criou", response);
        setIsCreatingUser(false);
        alert(
          "Usuário criado com sucesso. Faça login com as novas credenciais."
        );
      } else {
        const response = await login({
          email,
          password,
        });
        console.log("aqui login", response);
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao criar usuário ou fazer login.");
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
              placeholder="Login"
              value={userLogin}
              onChange={(e) => setUserLogin(e.target.value)}
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
            <p onClick={() => setIsCreatingUser(!isCreatingUser)}>
              Já possui uma conta? Faça login
            </p>
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
          <p onClick={() => setIsCreatingUser(!isCreatingUser)}>
            Não tem uma conta? Crie uma
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
