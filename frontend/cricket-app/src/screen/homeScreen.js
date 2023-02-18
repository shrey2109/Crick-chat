import React, { useEffect, useState } from "react";
import "./HomeScreen.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import MatchList from "../components/MatchList";
import NewsList from "../components/NewsList";

const HomeScreen = () => {
 

  return (
    <>
<<<<<<< HEAD
      <div className="contaier">
        <MatchList/>
        <NewsList/>
      </div>
=======
      <div class="d-md-flex">
        <div class="col-md-8">
            <MatchList/>
        </div>

        <div class="col-md-4">
            <NewsList/>
            </div>
        </div>
>>>>>>> 7e23e9a89c6b2c1ef8928350107ea8bafc1c64f8
    </>
  );
};

export default HomeScreen;
