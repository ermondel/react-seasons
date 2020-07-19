import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPosts, selectBlogUser } from '../actions/blog';
import PostItem from './PostItem';

class PostList extends Component {
  componentDidMount() {
    if (!this.props.posts.length) {
      this.props.fetchBlogPosts();
    }
  }

  render() {
    return this.props.posts.length ? (
      <div className='post-list'>
        {this.props.posts.map((post) => (
          <PostItem
            post={post}
            user={this.props.user}
            onItemClick={() => this.props.selectBlogUser(post.user)}
            key={post.id}
          />
        ))}
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  posts: state.blogPosts,
  user: state.blogUser,
});

export default connect(mapStateToProps, {
  fetchBlogPosts,
  selectBlogUser,
})(PostList);
