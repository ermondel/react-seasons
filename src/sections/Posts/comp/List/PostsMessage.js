import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeMessage } from '../../actions/posts';

class PostsMessage extends Component {
  componentWillUnmount() {
    if (this.props.message) {
      this.props.removeMessage();
    }
  }

  render() {
    return this.props.message ? (
      <div>
        {this.props.message}
        <button onClick={this.props.removeMessage}>Close</button>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => ({
  message: state.postsMessage,
});

export default connect(mapStateToProps, { removeMessage })(PostsMessage);
