import { useEffect, useState } from "react";
import { getItemById, updateItem } from "../../services/activitiesService";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      const res = await getItemById(id);
      setName(res.data.name);
    };
    fetchItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(id, { name });
    navigate("/");
  };

  return (
    <div>
      <h1>Editar Actividad</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default Edit;
