import React from 'react';
import { connect } from 'react-redux';
import { changeTimePeriod } from '../actions/weather';
import BtnsInlineBlock from '@sidebar/BtnsInlineBlock';
import BtnsInlineBlockItem from '@buttons/BtnsInlineBlockItem';

const TimePeriod = ({ timePeriod, changeTimePeriod }) => (
  <BtnsInlineBlock>
    <BtnsInlineBlockItem
      value={'Morning'}
      disabled={timePeriod === 'morning'}
      onClick={() => changeTimePeriod('morning')}
    />
    <BtnsInlineBlockItem
      value={'Afternoon'}
      disabled={timePeriod === 'afternoon'}
      onClick={() => changeTimePeriod('afternoon')}
    />
    <BtnsInlineBlockItem
      value={'Evening'}
      disabled={timePeriod === 'evening'}
      onClick={() => changeTimePeriod('evening')}
    />
    <BtnsInlineBlockItem
      value={'Night'}
      disabled={timePeriod === 'night'}
      onClick={() => changeTimePeriod('night')}
    />
    <BtnsInlineBlockItem
      value={'Day'}
      disabled={timePeriod === 'day'}
      onClick={() => changeTimePeriod('day')}
    />
  </BtnsInlineBlock>
);

const mapStateToProps = (state) => ({ timePeriod: state.forecastTimePeriod });

export default connect(mapStateToProps, { changeTimePeriod })(TimePeriod);
