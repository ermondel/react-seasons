import React from 'react';

const TodoList = ({ list }) => (
  <div className='todos-list'>
    {list.map((el) => (
      <article
        key={el.id}
        className={`todo ${el.completed ? 'completed' : ''}`}
      >
        <p className='todo__title'>{el.title}</p>
      </article>
    ))}
  </div>
);

export default TodoList;
