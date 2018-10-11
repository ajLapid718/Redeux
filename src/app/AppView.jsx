import React from 'react';
import './App.css';

const AppView = (props) => {
  const { currentPlayer } = props;
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {currentPlayer}
        </p>
      </header>
    </div>
  );
};

export default AppView;
