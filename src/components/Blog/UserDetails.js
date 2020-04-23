import React from 'react';
import { connect } from 'react-redux';

const UserDetails = ({ user }) => {
  if (!user) {
    return null;
  }

  return <div>{user.name}</div>;
};

const mapStateToProps = (state) => ({
  user: state.bloguser,
});

export default connect(mapStateToProps)(UserDetails);
