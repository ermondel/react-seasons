import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../../actions/blog';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  render() {
    return (
      <div>
        {this.props.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.blogposts,
});

export default connect(mapStateToProps, { fetchBlogPosts })(PostList);
