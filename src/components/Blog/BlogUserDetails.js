import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppAboutTech from '../AppAboutTech';

class BlogUserDetails extends Component {
  renderContent() {
    if (!this.props.user) {
      return null;
    }

    return (
      <div className='details'>
        <h3 className='details__title'>{this.props.user.name}</h3>
        <p className='details__item'>
          <span className='l'>email</span>{' '}
          <span className='r'>{this.props.user.email}</span>
        </p>
        <p className='details__item'>
          <span className='l'>username</span>{' '}
          <span className='r'>{this.props.user.username}</span>
        </p>
        <p className='details__item'>
          <span className='l'>phone</span>{' '}
          <span className='r'>{this.props.user.phone}</span>
        </p>
        <p className='details__item'>
          <span className='l'>website</span>{' '}
          <span className='r'>{this.props.user.website}</span>
        </p>
        <p className='details__item'>
          <span className='l'>company</span>{' '}
          <span className='r'>{this.props.user.company.name}</span>
        </p>
        <p className='details__item'>
          <span className='l'>city</span>{' '}
          <span className='r'>{this.props.user.address.city}</span>
        </p>
        <p className='details__item'>
          <span className='l'>zipcode</span>{' '}
          <span className='r'>{this.props.user.address.zipcode}</span>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className='sidebar'>
        <div className='sidebar-wrap'>
          {this.renderContent()}
          <AppAboutTech
            list={['React', 'Redux', 'Redux Thunk', 'JSONPlaceholder API']}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.bloguser,
});

export default connect(mapStateToProps)(BlogUserDetails);
