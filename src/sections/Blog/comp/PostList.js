import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import LoadingBar from '../../../app/LoadingBar/comp/LoadingBar';
import ErrorMessage from '../../../app/ErrorMessage/comp/ErrorMessage';
import { fetchBlogPosts, selectBlogUser } from '../actions/blog';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  renderContent() {
    if (this.props.posts.status === '1xx') {
      return <LoadingBar type='main' />;
    }

    if (this.props.posts.status === '5xx') {
      return <ErrorMessage type='remote' tip={true} />;
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
