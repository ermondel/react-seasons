import React from 'react';

const BoardCommentList = ({ list }) => (
  <div className='post-list'>
    {list.map((post) => (
      <article key={post.id} className='post'>
        <h3 className='post__title'>{post.name}</h3>
        <p className='post__body'>{post.body}</p>
        <p className='post__info'>
          <span className='post__author'>{post.email}</span>
        </p>
      </article>
    ))}
  </div>
);

export default BoardCommentList;
