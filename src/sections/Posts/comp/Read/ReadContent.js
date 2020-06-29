import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { removePostAsk, readPostReset } from '../../actions/posts';
import { modalOpen } from '../../../../app/ModalWindow/actions/ModalWindow';

class ReadContent extends Component {
  state = { post: null };

  componentWillUnmount() {
    this.props.readPostReset();
  }

  componentDidMount() {
    const { list, id } = this.props;

    console.log('--- componentDidMount');

    if (list.length) {
      const post = list.find((el) => String(el.id) === id);
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
      <div>
        <p>{this.state.post.categories}</p>
        <p>{this.state.post.content}</p>
        <p>
          <Link to={'/posts'}>Go back to the list</Link>
          <button onClick={this.onRemoveClick}>Remove</button>
        </p>
      </div>
    );
  }

  renderContent() {
    return (
      <div className='content'>
        <div className='content-wrap'>
          <h2>{this.state.post ? this.state.post.title : 'Post not found'}</h2>
          {this.state.post ? this.renderPost() : null}
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
})(ReadContent);
