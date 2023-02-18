import React, { useEffect, useState } from "react";
import "./HomeScreen.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import MatchList from "../components/MatchList";
import NewsList from "../components/NewsList";

const HomeScreen = () => {
 

  return (
    <>
      <div className="contaier">
        <MatchList/>
        <NewsList/>
      </div>
    </>
  );
};

export default HomeScreen;
