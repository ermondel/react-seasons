import React, { Component } from 'react';
import LanguageContext from '../../contexts/LanguageContext';
import Button from '../Button';

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className='control_btns'>
        <Button
          value='english'
          classNameCommon='btn-common'
          classNameActive='btn-common_active'
          valueActive={this.context.language}
          onClick={() => this.context.onLanguageChange('english')}
        />
        <Button
          value='dutch'
          classNameCommon='btn-common'
          classNameActive='btn-common_active'
          valueActive={this.context.language}
          onClick={() => this.context.onLanguageChange('dutch')}
        />
        <Button
          value='spanish'
          classNameCommon='btn-common'
          classNameActive='btn-common_active'
          valueActive={this.context.language}
          onClick={() => this.context.onLanguageChange('spanish')}
        />
        <Button
          value='french'
          classNameCommon='btn-common'
          classNameActive='btn-common_active'
          valueActive={this.context.language}
          onClick={() => this.context.onLanguageChange('french')}
        />
        <Button
          value='ukrainian'
          classNameCommon='btn-common'
          classNameActive='btn-common_active'
          valueActive={this.context.language}
          onClick={() => this.context.onLanguageChange('ukrainian')}
        />
        <Button
          value='russian'
          classNameCommon='btn-common'
          classNameActive='btn-common_active'
          valueActive={this.context.language}
          onClick={() => this.context.onLanguageChange('russian')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
