import { useEffect, useState } from "react";
import { getItems, deleteItem } from "../../services/activitiesService";
import { Link } from "react-router-dom";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const res = await getItems();
    console.log(res);
    setItems(res.data.data);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    loadItems();
  };

  return (
    <div>
      <h1>Lista de Actividades</h1>
      <Link to="/create">➕ Nueva actividad</Link>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.first_name}{" "}
            <Link to={`/edit/${item.id}`}>✏️ Editar</Link>
            <button onClick={() => handleDelete(item.id)}>❌ Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
