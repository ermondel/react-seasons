import React from 'react';
import { connect } from 'react-redux';
import InfoBlock from '@sidebar/InfoBlock';

const UserDetails = ({ user }) => {
  return user ? (
    <InfoBlock
      title={user.name}
      email={user.email}
      username={user.username}
      phone={user.phone}
      website={user.website}
      company={user.company.name}
      city={user.address.city}
      zipcode={user.address.zipcode}
    />
  ) : null;
};

const mapStateToProps = (state) => ({
  user: state.blogUser,
});

export default connect(mapStateToProps)(UserDetails);
