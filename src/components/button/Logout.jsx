import { logout } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function Activities() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  )
}

export default Activities;
