// ItemList.jsx
function ItemList({ items, deleteItem, setEditingItem }) {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => setEditingItem(item)}>Editar</button>
            <button onClick={() => deleteItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ItemList;