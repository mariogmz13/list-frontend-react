// ItemForm.jsx
import { useState, useEffect } from 'react';

function ItemForm({ addItem, editingItem, updateItem, setEditingItem }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem);
    } else {
      setFormData({ name: '', description: '' });
    }
  }, [editingItem]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateItem(editingItem.id, formData);
      setEditingItem(null);
    } else {
      addItem(formData);
    }
    setFormData({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Descripción"
      />
      <button type="submit">{editingItem ? 'Actualizar' : 'Agregar'}</button>
      {editingItem && (
        <button type="button" onClick={() => setEditingItem(null)}>
          Cancelar
        </button>
      )}
    </form>
  );
}

export default ItemForm;