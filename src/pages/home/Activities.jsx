import { useEffect, useState } from "react";
import { getItems, deleteItem } from "../../services/activitiesService";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import LogoutButton from "../../components/button/LogoutButton";

function Activities() {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);

  const handleDelete = async (id) => {
    MySwal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("Entra");
        await deleteItem(id, token);
        loadItems();
        MySwal.fire(
          "¡Eliminado!",
          "La actividad ha sido eliminada.",
          "success"
        );
      }
      console.log(result);
    });
  };

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const res = await getItems(token);
    console.log(res);
    setItems(res.data.data);
  };

  const handleEdit = async (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <><LogoutButton></LogoutButton>
    <div className="card-container">
      <Link className="btn" to="/create">
        ➕ Nueva actividad
      </Link>
      <div>
        {items.map((item) => (
          <div className="card" key={item._id}>
            <h2>{item.title}</h2>
            <h4>{item.description}</h4>
            <div className="div-status">
              {item.complete ? (
                <p className="complete">Completada</p>
              ) : (
                <p className="pending">Pendiente</p>
              )}
            </div>
            <div className="actions">
              <button
                className="action edit"
                onClick={() => handleEdit(item._id)}
              >
                Editar
              </button>
              <button
                className="action delete"
                onClick={() => handleDelete(item._id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div></>
  );
}

export default Activities;
