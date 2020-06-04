import React from 'react';
import { connect } from 'react-redux';
import ModalWindow from '../../../app/ModalWindow/components/ModalWindow';
import { modalClose } from '../../../app/ModalWindow/actions/ModalWindow';

const CityLocation = ({ visible, city, modalClose }) => {
  const body = (
    <div style={{ width: '200px', height: '200px', backgroundColor: 'brown' }}>
      Lorem ipsum
    </div>
  );

  return (
    <ModalWindow visible={visible} body={body} onWindowClose={() => modalClose()} />
  );
};

const mapStateToProps = (state) => ({
  visible: state.modalWindow,
  city: state.forecastCity,
});

export default connect(mapStateToProps, { modalClose })(CityLocation);
