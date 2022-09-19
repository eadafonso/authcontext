import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider/useAuth";
import "../../login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useAuth();
  const history = useHistory();

  async function handleSubmit(email: string, password: string) {
    try {
      await authenticate(email, password);

      console.log("Dados", email, password);

      history.push("/profile");
    } catch (error) {
      console.log("Error", error);
    }
  }
  return (
    <>
      <div className="loginContainer">
        <form>
          <label htmlFor="email">Eamil</label>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="button" onClick={() => handleSubmit(email, password)}>
            Entrar
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
