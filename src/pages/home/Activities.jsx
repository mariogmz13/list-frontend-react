import { useEffect, useState } from "react";
import { getItems, deleteItem } from "../../services/activitiesService";
import { Link, useNavigate } from "react-router-dom";
import './style.css'

function Activities() {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    
    // console.log(token);
    const res = await getItems(token);
    console.log(res);
    setItems(res.data.data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id, token);
    loadItems();
  };

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
