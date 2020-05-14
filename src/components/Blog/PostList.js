import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import Loading from '../Loading';
import Error5xx from '../Error5xx';
import { fetchBlogPosts, selectBlogUser } from '../../actions/blog';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  renderContent() {
    if (this.props.posts.status === '1xx') {
      return <Loading type='main' />;
    }

    if (this.props.posts.status === '5xx') {
      return <Error5xx />;
    }

    if (this.props.posts.status === '2xx') {
      return (
        <div className='post-list'>
          {this.props.posts.data.map((post) => (
            <PostItem
              post={post}
              user={this.props.user}
              onItemClick={() => this.props.selectBlogUser(post.user)}
              key={post.id}
            />
          ))}
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <div className='content'>
        <div className='content-wrap'>
          <h2>Blog posts</h2>

          {this.renderContent()}
        </div>
      </div>
    );
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
