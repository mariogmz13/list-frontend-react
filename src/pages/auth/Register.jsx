import { useState } from "react";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import './style.css'
import GoToLogin from "../../components/a/GoToLogin";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const passwordMatch =  () => {
      if (password !== confirmPassword) {
        return false;
      }else{
        return true;
      }
      
      // Aquí puedes enviar los datos del formulario
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!passwordMatch()){
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const res = await register(email, username, password);
      if(res.ok){
        navigate("/activities");
      }else{
        alert(res.message)
      }
    } catch (error) {
      alert("Error al registrarse"+ error);
    }
  };

  

  return (
    <div className="container">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Ingrese Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button type="submit">Registrarse</button>
      </form>
      <GoToLogin></GoToLogin>
    </div>
  );
}

export default Register;
