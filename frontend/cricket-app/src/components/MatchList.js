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
    backgroundImage: 
"url('https://th.bing.com/th/id/R.96f62ee298a3b93c0077951a6738e294?rik=VZ2VrlzHNnGAOg&riu=http%3a%2f%2fkriskindu.com%2fwp-content%2fuploads%2f2016%2f01%2fCricket_pitch.jpg&ehk=slHNdVL9%2f7UYtezLp4gNM7nFZmdsQFGreeBNc0f8B9I%3d&risl=&pid=ImgRaw&r=0')",
color:'black'
};

  return (
    <div className="list">
      {/* <h1> MATCH LIST </h1> */}
      <div>
        {cricData.map((item) => {
          return (
            <div class="card">
              <div class="card-header" style={{background:'#002699', color:'#ff8000'}}>MATCH DETAILS</div>
              <div class="card-body" style={myStyle}>
                <h3 class="card-title">{item.name}</h3>
                <h4 class="card-title">{item.matchType}</h4>
                <p class="card-text">{item.status}</p>
                <Button onClick={Rendertomain} className="button-64" role={Button}><span class='text'>Open Chat</span></Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MatchList;
