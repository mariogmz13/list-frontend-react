import { useNavigate } from "react-router-dom";
import '../../pages/auth/style.css'

function GoToRegister() {
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  const handleClickConEvento = () => {
    navigate('/register')
  };

  return (
    <div>
      <a onClick={handleClickConEvento}>Crear Usuario</a>
    </div>
  );
}

export default GoToRegister;
