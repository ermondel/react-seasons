import React, { Component } from 'react';

const DEF_LANG = 'english';
const Context = React.createContext(DEF_LANG);

export class LanguageContext extends Component {
  state = { language: DEF_LANG };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    const value = { ...this.state, onLanguageChange: this.onLanguageChange };

    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}

export default Context;
