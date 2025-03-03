import { useNavigate } from "react-router-dom";
import '../../pages/auth/style.css'

function GoToLogin() {
  const navigate = useNavigate();
  const handleClickConEvento = () => {
    navigate('/login')
  };

  return (
    <div>
      <a onClick={handleClickConEvento}>Tengo una cuenta</a>
    </div>
  );
}

export default GoToLogin;
