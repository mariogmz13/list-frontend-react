import { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import './style.css'
import GoToRegister from "../../components/a/GoToRegister";
import showErrorAlert from "../../components/sweetalert/ShowErrorAlert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(email,password)
      console.log(res);
      if(res.ok){
        navigate("/activities");
      }else{
        // alert(res.message)
        showErrorAlert('Autenticación invalida', res.message)
      }
    } catch (error) {
      console.log(error);
      showErrorAlert('Error al iniciar sesión', error.message)
      // alert(error+" Error al iniciar sesión");
    }

  };


  return (
    <div className="container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Ingresar</button>
        <GoToRegister></GoToRegister>
      </form>
    </div>
  );
}

export default Login;
