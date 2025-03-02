import { useEffect, useState } from "react";
import { getItems, deleteItem } from "../../services/activitiesService";
import { Link } from "react-router-dom";

function Activities() {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem('token');

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

  return (
    <div>
      <h1>Lista de Actividades</h1>
      <Link to="/create">➕ Nueva actividad</Link>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.title}{" "}
            <Link to={`/edit/${item._id}`}>✏️ Editar</Link>
            <button onClick={() => handleDelete(item._id)}>❌ Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
