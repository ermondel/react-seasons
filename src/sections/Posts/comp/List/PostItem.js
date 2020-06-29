import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ post, onRemoveClick }) => (
  <div>
    <p>
      <Link to={'/posts/' + post.id}>{post.title}</Link>
    </p>
    <p>{post.categories}</p>
    <p>
      <button onClick={onRemoveClick}>Remove</button>
    </p>
  </div>
);

export default ListItem;
