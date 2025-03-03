import { logout } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import './btn-logout.css'
function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <button className="btn-logout" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  )
}

export default LogoutButton;
