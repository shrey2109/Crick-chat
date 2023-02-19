import React, { useEffect, useState } from "react";
import "../HomeScreen.css";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import MatchList from "../components/MatchList";
import NewsList from "../components/NewsList";
import '../login.css'

const HomeScreen = () => {
//   const myStyle={
//     backgroundImage: 
// "url('https://th.bing.com/th/id/OIP.jmefBfBKKQ_ahyJzgShycAHaEK?w=335&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7')",
//      height:'100vh',
//     // marginTop:'-70px',
//     // fontSize:'50px',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
// };
  return (
    <>
    <div style={{background:'#00b33c'}}>
      <Header />
      <div className="d-md-flex">
        <div class="col-md-8">
          <MatchList />
        </div>
        <div class="col-md-4">
          <NewsList />
        </div>
      </div>
      </div>
    </>
  );
};

export default HomeScreen;
