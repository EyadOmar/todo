import { useState } from 'react';

function AddToDo({ addToDo }) {
  const [newItem, setNewItem] = useState('');
  function onsubmitHandler(e) {
    e.preventDefault();
    if (newItem === '') return;
    addToDo(newItem);

    setNewItem('');
  }
  return (
    <form onSubmit={onsubmitHandler}>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        placeholder="Add TODO"
        id="todoInput"
        name="todo"
      />
      <button type="submit">+</button>
    </form>
  );
}

export default AddToDo;
