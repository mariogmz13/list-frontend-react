import { useState } from "react";
import { createItem } from "../../services/activitiesService";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../services/authService";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [complete, setComplete] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem({ title, description }, getToken());
    navigate("/");
  };

  return (
    <div>
      <h1>Crear actividad</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nombre" required />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción"  />
        {/* <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nombre" required /> */}
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default Create;
