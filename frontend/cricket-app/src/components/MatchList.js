import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import jsonData from "../components/crickData.json";
import { useNavigate } from "react-router-dom";
import '../login.css'

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

  const myStyle={
    // backgroundColor: "linear-gradient(144deg, rgba(231,7,117,1) 35%, rgba(166,4,198,1) 59%, rgba(153,0,255,1) 91%)"
    // backgroundColor: "linear-gradient(144deg, rgba(231,7,117,1) 35%, rgba(166,4,198,1) 59%, rgba(153,0,255,1) 91%)"
    // backgroundColor: "linear-gradient(144deg, rgba(231,7,117,1) 35%, rgba(166,4,198,1) 59%, rgba(153,0,255,1) 91%);",
// color:'black'
};

  return (
    <div className="list">
      {/* <h1> MATCH LIST </h1> */}
      <div>
        {cricData.map((item) => {
          return (
            <div class="card">
              <div class="card-header" style={{background:'black', color:'#ff8000'}}>MATCH DETAILS</div>
              {/* <div class="card-body" style={{background:"linear-gradient(144deg, rgba(231,7,117,1) 35%, rgba(166,4,198,1) 59%, rgba(153,0,255,1) 91%)"}}> */}
              <div class="card-body" style={{backgroundColor:"#e5e5e5"}}>
                <h3 class="card-title">{item.name}</h3>
                <h4 class="card-title">{item.matchType}</h4>
                <p class="card-text">{item.status}</p>
                <Button onClick={Rendertomain} className="button-64" role={Button}><span class='text'> Let's Chat </span></Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MatchList;
