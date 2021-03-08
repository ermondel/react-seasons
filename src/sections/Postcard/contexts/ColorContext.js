import React, { Component } from 'react';

const DEF_COLOR = 'skyblue';
const Context = React.createContext(DEF_COLOR);

export class ColorContext extends Component {
  state = { color: DEF_COLOR };

  onColorChange = (color) => {
    this.setState({ color });
  };

  render() {
    const value = { ...this.state, onColorChange: this.onColorChange };

    return <Context.Provider value={value}>{this.props.children}</Context.Provider>;
  }
}

export default Context;
