import React, { useEffect, useState } from "react";
import { scoreBoardData } from "./scoreData";

const ScoreScreen = () => {
  const [scoreBoard, setScoreBoard] = useState([]);

  const getData = async () => {
    console.log("SCORE DATA : ");
    console.log(scoreBoardData.data);
    setScoreBoard(scoreBoardData.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>{scoreBoard.name}</h3>
      <h5 style={{ textAlign: "center" }}>{scoreBoard.matchType}</h5>
      <p style={{ textAlign: "center" }}>{scoreBoard.status}</p>
      <p style={{ textAlign: "center" }}>Vanue : {scoreBoard.venue}</p>

      <h3 style={{ textAlign: "center" }}> Batting Inning</h3>
      <h5 style={{ marginLeft: "14px" }}>{scoreBoard.score}</h5>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Batter</th>
            <th scope="col">Runs</th>
            <th scope="col">Balls</th>
            <th scope="col">4s</th>
            <th scope="col">6s</th>
            <th scope="col">SR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{scoreBoard.b1n}</th>
            <td>{scoreBoard.b1r}</td>
            <td>{scoreBoard.b1b}</td>
            <td>{scoreBoard.b1f}</td>
            <td>{scoreBoard.b1s}</td>
            <td>{scoreBoard.b1sr}</td>
          </tr>
          <tr>
            <th scope="row">{scoreBoard.b2n}</th>
            <td>{scoreBoard.b2r}</td>
            <td>{scoreBoard.b2b}</td>
            <td>{scoreBoard.b2f}</td>
            <td>{scoreBoard.b2s}</td>
            <td>{scoreBoard.b2sr}</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ textAlign: "center" }}> Bowling Inning</h3>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Bowler</th>
            <th scope="col">Over</th>
            <th scope="col">Maiden</th>
            <th scope="col">Run</th>
            <th scope="col">Wicket</th>
            <th scope="col">Economy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{scoreBoard.bn}</th>
            <td>{scoreBoard.bo}</td>
            <td>{scoreBoard.bmo}</td>
            <td>{scoreBoard.br}</td>
            <td>{scoreBoard.bw}</td>
            <td>{scoreBoard.beco}</td>
          </tr>
        </tbody>
      </table>

      <p style={{ marginLeft: "14px" }}>
        Partnership : {scoreBoard.partnership}
      </p>
      <p style={{ marginLeft: "14px" }}>Last Wicket : {scoreBoard.lastWikt}</p>
      <p style={{ marginLeft: "14px" }}>Commentry : {scoreBoard.commentry}</p>
      <p style={{ marginLeft: "14px" }}>Umpire : {scoreBoard.umpire}</p>
      <p style={{ marginLeft: "14px" }}>
        Third Umpire : {scoreBoard.thirdumpire}
      </p>
    </div>
  );
};

export default ScoreScreen;
