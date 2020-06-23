import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, hideLog } from '../../actions/posts';
import SpinnerBig from '../../../../app/SpinnerImg/comp/SpinnerBig';
import ErrorRemoteImg from '../../../../app/ErrorImg/comp/ErrorRemoteImg';

class ListContent extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.fetchPosts();
    }
  }

  componentWillUnmount() {
    if (this.props.log.display) {
      this.props.hideLog();
    }
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

  renderMessage() {
    const { log, hideLog } = this.props;

    if (log.display && log.list.length) {
      return (
        <div>
          {log.list[log.list.length - 1].message}
          <button onClick={hideLog}>Close</button>
        </div>
      );
    } else {
      return null;
    }
  }

  renderContent() {
    switch (this.props.mode) {
      case 'loading':
        return this.renderSpinner();

      case 'failure':
        return this.renderError();

      case 'success':
      case 'default':
      default:
        return this.renderList();
    }
  }

  render() {
    return (
      <div className='content'>
        <div className='content-wrap'>
          <h2>Post list</h2>

          {this.renderMessage()}
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mode: state.postsListMode,
  list: state.postsList,
  log: state.postsLog,
});

export default connect(mapStateToProps, {
  fetchPosts,
  hideLog,
})(ListContent);
