import React from 'react';
import { connect } from 'react-redux';
import DetailsBlock from '../../../util/DetailsBlock/comp/DetailsBlock';

const UserDetails = ({ user }) => {
  return user ? (
    <DetailsBlock
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
