import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ post, showRemoveBtn, onRemoveClick }) => (
  <article className='pst-list__item'>
    <div className='pst-list__content'>
      <h3 className='pst-list__title'>
        <Link to={'/posts/' + post.id}>{post.title}</Link>
      </h3>
      <p className='pst-list__categories'>{post.categories}</p>
    </div>
    <div className='pst-list__btns'>
      {showRemoveBtn ? (
        <button className='pst-list__btn-remove' onClick={onRemoveClick}>
          Remove
        </button>
      ) : null}
    </div>
  </article>
);

export default ListItem;
