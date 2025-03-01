import { useState } from "react";
import { createItem } from "../../services/activitiesService";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem({ name });
    navigate("/");
  };

  return (
    <div>
      <h1>Crear actividad</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" required />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default Create;
