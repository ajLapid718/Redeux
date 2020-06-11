import React from "react";

function TeamNamesView(props) {
  return props.teamNames.map(teamName => <div key={teamName}>{teamName}</div>);
}

export default TeamNamesView;