import { useEffect, useState } from "react";
import { getItems, deleteItem } from "../../services/activitiesService";
import { Link, useNavigate } from "react-router-dom";
import './style.css'
// import alertConfirm from "../../components/sweetalert/ShowAlertConfirm";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

function Activities() {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);
  
  const handleDelete = async (id) => {
    // let confirm = false;
    MySwal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log('Entra');
        await deleteItem(id, token);
        loadItems()
        MySwal.fire('¡Eliminado!', 'La actividad ha sido eliminada.', 'success');
      }
      console.log(result);
    });
  };

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    
    // console.log(token);
    const res = await getItems(token);
    console.log(res);
    setItems(res.data.data);
  };

  // const handleDelete = async (id) => {
  //   if(confirm){
  //     console.log('si');
  //     await deleteItem(id, token);
  //     loadItems();
  //     console.log('si');
  //   }
  // };

  const handleEdit = async (id) => {
    navigate(`/edit/${id}`)
  };

  return (
    <div>
      <h1>Lista de Actividades</h1>
      <Link className="btn" to="/create">➕ Nueva actividad</Link>
      <div>
        {items.map((item) => (
          <div className="card" key={item._id}>
            {/* {item.title}{" "} */}
            <h2>{item.title}</h2>
            <h4>{item.description}</h4>
            {/* <Link to={`/edit/${item._id}`}>✏️ Editar</Link> */}
            <div className="actions">
              <button className="action edit" onClick={() => handleEdit(item._id)} >Editar</button>
              <button className="action delete" onClick={() => handleDelete(item._id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
