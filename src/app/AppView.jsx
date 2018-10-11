import React from 'react';
import './App.css';

const AppView = (props) => {
  const { currentPlayer, handleChange, handleSubmit } = props;
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {currentPlayer}
        </p>
        <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="firstName" onChange={handleChange}></input>
          <label>Last Name:</label>
          <input type="text" name="lastName" onChange={handleChange}></input>
        </form>
      </header>
    </div>
  );
};

export default AppView;
