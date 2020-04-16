import React from 'react';
import Info from './Info';
import useLocation from './useLocation';
import './App.css';
import logo from '../logo.png';

const App = () => {
  const [coords, errorMessage] = useLocation();

  let content;

  if (errorMessage) {
    content = <p className="error">{errorMessage}</p>;
  } else if (coords) {
    content = <Info coords={coords} />;
  } else {
    content = <p className="request">Please accept location request</p>;
  }

  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="Compass" className="logo" />
      </header>
      {content}
    </div>
  );
};

export default App;
