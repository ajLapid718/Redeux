import React from 'react';
import './App.css';

const AppView = (props) => {
  const { currentPlayer, handleChange, handleSubmit, handleReset, playerInfo } = props;
  return (
    <div className="App">
      <header className="App-header">
        <p>{`${currentPlayer.team_name || ""}`}</p>
        <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="firstName" value={playerInfo.firstName} onChange={handleChange} required></input>
          <br></br>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={playerInfo.lastName} onChange={handleChange} required></input>
          <br></br>
          <button>Display Player</button>
        </form>
        <button onClick={handleReset}>Reset</button>
      </header>
    </div>
  );
};

export default AppView;
