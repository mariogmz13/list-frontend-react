import { useEffect, useState } from "react";
import { getItemById, updateItem } from "../../services/activitiesService";
import { useParams, useNavigate } from "react-router-dom";
import { getToken } from "../../services/authService";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [complete, setComplete] = useState(Boolean);

  const statusChange = (event) => {
    setComplete(event.target.value === 'true');
  };

  

  useEffect(() => {
    const fetchItem = async () => {
      const res = await getItemById(id, getToken());
      console.log(res);
      setTitle(res.data.data.title);
      setDescription(res.data.data.description);
      setComplete(res.data.data.complete);
    };
    fetchItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(complete);
    await updateItem(id, { title, description, complete }, getToken());
    navigate("/");
  };

  return (
    <div>
      <h1>Editar Actividad</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}  />

        <label>
        Completada:
        <select value={complete.toString()} onChange={statusChange}>
          {/* <option value="">-- Selecciona una opción --</option> */}
          <option value='true'>Si</option>
          <option value='false'>No</option>
        </select>
      </label>
      <p>Opción seleccionada: {complete}</p>
      
      {/* <p>Opción seleccionada: {complete}</p> */}
      
      <button type="submit">Actualizar</button>
  

      </form>
    </div>
  );
}

export default Edit;
