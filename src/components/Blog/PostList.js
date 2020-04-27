import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPosts, selectBlogUser } from '../../actions/blog';
import LoadingBarMain from '../LoadingBarMain';
import Error5xx from '../Error5xx';

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
    if (this.props.posts.status === '1xx') {
      return <LoadingBarMain />;
    }

    if (this.props.posts.status === '5xx') {
      return <Error5xx />;
    }

    if (this.props.posts.status === '2xx') {
      return (
        <div className='post-list'>
          {this.props.posts.data.map((post) => (
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

    return <div>empty state</div>;
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
