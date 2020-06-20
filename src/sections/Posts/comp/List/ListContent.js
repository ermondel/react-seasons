import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';
import SpinnerBig from '../../../../app/SpinnerImg/comp/SpinnerBig';
import ErrorRemoteImg from '../../../../app/ErrorImg/comp/ErrorRemoteImg';

class ListContent extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.fetchPosts();
    }
  }

  renderList() {
    return this.props.list.map((post) => (
      <p key={post.id}>
        {post.title}
        <br />
        {post.categories}
        <br />
        {post.content}
      </p>
    ));
  }

  renderSpinner() {
    return (
      <div className='posts-spinner'>
        <SpinnerBig />
        <div>
          <p>Request data from a remote server</p>
          <p>This may take some time</p>
          <p>Please wait</p>
        </div>
      </div>
    );
  }

  renderError() {
    return (
      <div className='posts-error'>
        <ErrorRemoteImg />
        <div>
          <p>The remote server is not responding</p>
          <p>Perhaps it is overloaded with requests</p>
          <p>Please come back later</p>
        </div>
      </div>
    );
  }

  render() {
    const { list, spinner, error } = this.props;

    return (
      <div className='content'>
        <div className='content-wrap'>
          <h2>List</h2>

          {spinner && this.renderSpinner()}
          {error && this.renderError()}
          {list && this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.postsList,
  spinner: state.postsSpinner,
  error: state.postsError,
});

export default connect(mapStateToProps, { fetchPosts })(ListContent);
