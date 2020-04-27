import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPosts, selectBlogUser } from '../../actions/blog';
import LoadingBarMain from '../LoadingBarMain';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  renderButton(post) {
    let className = 'post__author_btn';

    if (this.props.user && this.props.user.id === post.userId) {
      className += ' post__author_btn_active';
    }

    return (
      <button
        className={className}
        onClick={() => this.props.selectBlogUser(post.user)}
        title={`get info about ${post.user.name}`}
      >
        {post.user.name}
      </button>
    );
  }

  render() {
    if (!this.props.posts) {
      return <LoadingBarMain />;
    }

    return (
      <div className='post-list'>
        {this.props.posts.map((post) => (
          <div key={post.id} className='post'>
            <h3 className='post__title'>{post.title}</h3>
            <p className='post__body'>{post.body}</p>
            <p className='post__info'>
              <span className='post__author'>{this.renderButton(post)}</span>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.blogposts,
  user: state.bloguser,
});

export default connect(mapStateToProps, {
  fetchBlogPosts,
  selectBlogUser,
})(PostList);
