// import { logout } from "../../services/authService";
// import { useNavigate } from "react-router-dom";

import LogoutButton from '../button/LogoutButton';
import './navbar.css'

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">Lista de actividades</div>
        <div className='navbar-logout'>
            <LogoutButton></LogoutButton>
        </div>
      </nav>
    );
  }

export default Navbar;
