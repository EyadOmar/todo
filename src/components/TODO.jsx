export default function TODO({ todo, isDone, done, remove }) {
  return (
    <li className={`list-item ${isDone ? 'done' : ''}`}>
      {todo}
      <div className="btns">
        <button
          onClick={() => done(todo, isDone)}
          className={isDone ? 'done' : ''}
        >
          Done
        </button>
        <button onClick={() => remove(todo)}>X</button>
      </div>
    </li>
  );
}
