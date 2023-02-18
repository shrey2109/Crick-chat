import React, { useEffect, useState } from "react";
import "./App.css";
import jsonData from "./crickData.json";

const App = () => {
  const [cricData, setCricData] = useState([]);
  console.log(jsonData);

  const getData = async () => {
    setCricData(jsonData.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="contaier">
        <div className="matchList">
          {cricData.map((item) => {
            return (
     

              
              (<div class="card">
                    <div class="card-header">
                        MATCH DETAILS
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">{item.name}</h2>
                        <h3 class="card-title">{item.matchType}</h3>
                        <p class="card-text">{item.status}</p> 
                        <a href="#" class="btn btn-primary">Go To Chat</a>
                    </div>
                </div>)
            );
          })}
        </div>

        <div className="newsList">
          gsdfgdfgghjfdksajfkhdjksagfgkjgdsfkajfgskjdahjriueopqruwpoeiurpoweropiupvuxpczivpoizxcvoiulgsdjhfkgdsakskjdkaj
        </div>
      </div>
    </>
  );
};

export default App;
