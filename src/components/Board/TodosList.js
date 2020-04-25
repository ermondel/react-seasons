import React from 'react';

const TodosList = ({ list }) => (
  <div className="todos-list">
    {list.map((el) => (
      <div key={el.id} className={`todo ${el.completed ? 'completed' : ''}`}>
        <p className="todo__title">{el.title}</p>
      </div>
    ))}
  </div>
);

export default TodosList;
