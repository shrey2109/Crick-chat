import React, { useEffect, useState } from "react";
import "../HomeScreen.css";

import "bootstrap/dist/css/bootstrap.min.css";
import MatchList from "../components/MatchList";
import NewsList from "../components/NewsList";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <div className="d-md-flex">
        <div className="col-md-8">
          <MatchList />
        </div>
        <div className="col-md-4">
          <NewsList />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
