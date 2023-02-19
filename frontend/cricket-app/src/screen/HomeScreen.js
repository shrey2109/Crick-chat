import React, { useEffect, useState } from "react";
import "../HomeScreen.css";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import MatchList from "../components/MatchList";
import NewsList from "../components/NewsList";
import "../login.css";

const HomeScreen = () => {
  return (
    <>
    <div className="homeclass" style={{background:'white'}}>
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
