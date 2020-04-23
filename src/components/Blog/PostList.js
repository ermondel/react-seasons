import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPosts, selectBlogUser } from '../../actions/blog';
import LoadingBar from '../LoadingBar';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  render() {
    if (!this.props.posts) {
      return <LoadingBar />;
    }

    return (
      <div className="post-list">
        {this.props.posts.map((post) => (
          <div key={post.id} className="blogpost">
            <h3 className="blogpost__title">{post.title}</h3>
            <p className="blogpost__body">{post.body}</p>
            <p className="blogpost__btns">
              <button
                className="blogpost__author_btn"
                onClick={() => this.props.selectBlogUser(post.user)}
              >
                {post.user.name}
              </button>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.blogposts,
});

export default connect(mapStateToProps, {
  fetchBlogPosts,
  selectBlogUser,
})(PostList);
