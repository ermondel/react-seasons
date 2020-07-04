import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { removePostAsk, readPostReset } from '../actions/posts';
import { modalOpen } from '../../../app/ModalWindow/actions/ModalWindow';

class View extends Component {
  state = { post: null };

  componentWillUnmount() {
    this.props.readPostReset();
  }

  componentDidMount() {
    const { list, match } = this.props;

    if (list.length) {
      const post = list.find((el) => String(el.id) === match.params.id);
      if (post) {
        this.setState({ post });
      }
    }
  }

  onRemoveClick = () => {
    this.props.removePostAsk(this.state.post.id, this.state.post.title);
    this.props.modalOpen();
  };

  renderPost() {
    return (
      <div className='view-post'>
        <h3 className='view-post__title'>{this.state.post.title}</h3>
        <p className='view-post__categories'>{this.state.post.categories}</p>
        <p className='view-post__content'>{this.state.post.content}</p>
        <div className='view-post__actions'>
          <Link to={'/posts'} className='view-post__link-back'>
            Go back to the list
          </Link>
          <button onClick={this.onRemoveClick} className='view-post__btn-remove'>
            Remove
          </button>
        </div>
      </div>
    );
  }

  renderNotFound() {
    return <h2>Post not found</h2>;
  }

  renderContent() {
    return (
      <div className='content'>
        <div className='content-wrap'>
          {this.state.post ? this.renderPost() : this.renderNotFound()}
        </div>
      </div>
    );
  }

  render() {
    switch (this.props.read.mode) {
      case 'deleted':
        return <Redirect to='/posts' />;

      case 'default':
      default:
        return this.renderContent();
    }
  }
}

const mapStateToProps = (state) => ({
  list: state.postsList.list,
  read: state.postsReading,
});

export default connect(mapStateToProps, {
  removePostAsk,
  modalOpen,
  readPostReset,
})(View);
