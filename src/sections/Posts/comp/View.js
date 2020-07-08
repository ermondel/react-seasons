import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
  removePostAsk,
  readPostReset,
  fetchPosts,
  authAndFetchPosts,
} from '../actions/posts';
import { modalOpen } from '../../../app/ModalWindow/actions/ModalWindow';
import SpinnerBig from '../../../app/SpinnerImg/comp/SpinnerBig';
import ErrorRemoteImg from '../../../app/ErrorImg/comp/ErrorRemoteImg';

class View extends Component {
  componentWillUnmount() {
    if (this.props.read.mode !== 'default') {
      this.props.readPostReset();
    }
  }

  componentDidMount() {
    if (!this.props.list.length) {
      if (this.props.auth.publicKey) {
        this.props.fetchPosts(this.props.auth.publicKey);
      } else {
        this.props.authAndFetchPosts();
      }
    }
  }

  renderAuthSpinner() {
    return (
      <div className='posts-spinner'>
        <SpinnerBig />
        <div>
          <p className='posts-spinner__auth-message'>Authorization in progress</p>
          <p>This may take some time</p>
          <p>Please wait</p>
        </div>
      </div>
    );
  }

  renderLoadingSpinner() {
    return (
      <div className='posts-spinner'>
        <SpinnerBig />
        <div>
          <p className='posts-spinner__loading-message'>
            Request data from a remote server
          </p>
          <p>This may take some time</p>
          <p>Please wait</p>
        </div>
      </div>
    );
  }

  authSuccess() {
    return <p>Authorization successful</p>;
  }

  renderAuthError() {
    return (
      <div className='posts-error'>
        <ErrorRemoteImg />
        <div>
          <p>Access is denied</p>
          <p>Please contact the administrator</p>
        </div>
      </div>
    );
  }

  renderLoadingError() {
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

  renderViewPost(post) {
    return (
      <article className='view-post'>
        <h3 className='view-post__title'>{post.title}</h3>
        <p className='view-post__categories'>{post.categories}</p>
        <p className='view-post__content'>{post.content}</p>
        <div className='view-post__actions'>
          <Link to={'/posts'} className='view-post__link-back'>
            Go back to the list
          </Link>
          <button
            onClick={() => {
              this.props.removePostAsk(post.id, post.title);
              this.props.modalOpen();
            }}
            className='view-post__btn-remove'
          >
            Remove
          </button>
        </div>
      </article>
    );
  }

  renderPost() {
    let post;

    if (this.props.list.length) {
      post = this.props.list.find((el) => {
        return String(el.id) === this.props.match.params.id;
      });
    }

    return post ? this.renderViewPost(post) : <h2>Post not found</h2>;
  }

  render() {
    let content;

    switch (this.props.read.mode) {
      case 'auth':
        content = this.renderAuthSpinner();
        break;

      case 'allow':
        content = this.authSuccess();
        break;

      case 'deny':
        content = this.renderAuthError();
        break;

      case 'loading':
        content = this.renderLoadingSpinner();
        break;

      case 'failure':
        content = this.renderLoadingError();
        break;

      case 'deleted':
        return <Redirect to='/posts' />;

      case 'success':
      case 'default':
      default:
        content = this.renderPost();
    }

    return (
      <div className='content'>
        <div className='content-wrap'>{content}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.postsList.list,
  read: state.postsReading,
  auth: state.postsAuth,
});

export default connect(mapStateToProps, {
  removePostAsk,
  modalOpen,
  readPostReset,
  fetchPosts,
  authAndFetchPosts,
})(View);
