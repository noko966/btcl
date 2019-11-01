import React from "react";

export default function Game({
  title,
  type,
  homeTeamName,
  awayTeamName,
  homeTeamScore,
  awayTeamScore
}) {
  return (
    <div className="btcl_game">
      <div className="btcl_flac">
        <h2 className="btcl_6">{title}</h2>
        <span className="btcl_6">{type}</span>
      </div>
      <div className="btcl_flac">
        <div className="btcl_6 btcl_flac">
          <div className="btcl_6 btcl_flcol">
            <div>{homeTeamName}</div>
            <div>{homeTeamScore}</div>
          </div>
          <div className="btcl_6 btcl_flcol">
            <div>{awayTeamName}</div>
            <div>{awayTeamScore}</div>
          </div>
        </div>
        <div className="btcl_6"></div>
      </div>
    </div>
  );
}
