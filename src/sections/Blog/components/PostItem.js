import React from 'react';

const PostItem = ({ post, user, onItemClick }) => (
  <article key={post.id} className='post'>
    <h3 className='post__title'>{post.title}</h3>
    <p className='post__body'>{post.body}</p>
    <p className='post__info'>
      <span className='post__author'>
        <button
          className={
            user && user.id === post.userId
              ? 'post__author_btn_active'
              : 'post__author_btn'
          }
          onClick={onItemClick}
          title={
            user && user.id === post.userId
              ? `info about ${post.user.name}`
              : `get info about ${post.user.name}`
          }
        >
          {post.user.name}
        </button>
      </span>
    </p>
  </article>
);

export default PostItem;
