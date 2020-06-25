import React from 'react';

const ListItem = ({ post, onRemoveClick }) => (
  <div>
    <p>{post.title}</p>
    <p>{post.categories}</p>
    <p>{post.content}</p>
    <p>
      <button onClick={onRemoveClick}>Remove</button>
    </p>
  </div>
);

export default ListItem;
