import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import jsonData from "../components/crickData.json";
import { useNavigate } from "react-router-dom";

const MatchList = () => {
  const [cricData, setCricData] = useState([]);
  console.log(jsonData);

  let navigate = useNavigate();

  const getData = async () => {
    setCricData(jsonData.data);
  };

  const Rendertomain = () => {
    navigate("/main");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="list">
      {/* <h1> MATCH LIST </h1> */}
      <div>
        {cricData.map((item) => {
          return (
            <div class="card">
              <div class="card-header">MATCH DETAILS</div>
              <div class="card-body">
                <h3 class="card-title">{item.name}</h3>
                <h4 class="card-title">{item.matchType}</h4>
                <p class="card-text">{item.status}</p>
                <Button onClick={Rendertomain}>Open Chat</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MatchList;
