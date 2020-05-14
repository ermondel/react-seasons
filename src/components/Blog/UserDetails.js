import React from 'react';
import { connect } from 'react-redux';

const UserDetails = ({ user }) => {
  return user ? (
    <div className='details'>
      <h3 className='details__title'>{user.name}</h3>
      <p className='details__item'>
        <span className='l'>email</span> <span className='r'>{user.email}</span>
      </p>
      <p className='details__item'>
        <span className='l'>username</span>{' '}
        <span className='r'>{user.username}</span>
      </p>
      <p className='details__item'>
        <span className='l'>phone</span> <span className='r'>{user.phone}</span>
      </p>
      <p className='details__item'>
        <span className='l'>website</span>{' '}
        <span className='r'>{user.website}</span>
      </p>
      <p className='details__item'>
        <span className='l'>company</span>{' '}
        <span className='r'>{user.company.name}</span>
      </p>
      <p className='details__item'>
        <span className='l'>city</span>{' '}
        <span className='r'>{user.address.city}</span>
      </p>
      <p className='details__item'>
        <span className='l'>zipcode</span>{' '}
        <span className='r'>{user.address.zipcode}</span>
      </p>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  user: state.blogUser,
});

export default connect(mapStateToProps)(UserDetails);
