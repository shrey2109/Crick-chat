import React from "react";
import ChatScreen from "./ChatScreen";
import ScoreScreen from "./ScoreScreen";

const MainScreen = () => {
  return (
    <>

<div className="d-md-flex">
        <div class="col-md-8">
          <ScoreScreen />
        </div>
        <div class="col-md-4">
          <ChatScreen />
        </div>
      </div>


    </>
  );
};

export default MainScreen;
