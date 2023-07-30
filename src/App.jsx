import AddToDo from './components/AddToDo';
import TODO from './components/TODO';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem('TODOS');
    if (localTodos == null) return [];
    else return JSON.parse(localTodos);
  });

  function addToDo(title) {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), value: title, isDone: false },
    ]);
  }

  function done(value, isDone) {
    setTodos(
      todos.map((todo) => {
        if (todo.value === value) {
          if (isDone) return { ...todo, isDone: false };
          else return { ...todo, isDone: true };
        } else return todo;
      })
    );
  }

  function remove(value) {
    setTodos(todos.filter((todo) => todo.value !== value));
  }

  useEffect(() => {
    localStorage.setItem('TODOS', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <h1>TODO</h1>
      <AddToDo addToDo={addToDo} />
      <ul className="todos">
        {todos.map((todo) => (
          <TODO
            key={todo.id}
            todo={todo.value}
            isDone={todo.isDone}
            done={done}
            remove={remove}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
