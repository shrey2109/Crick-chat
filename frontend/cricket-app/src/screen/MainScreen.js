import React from "react";
import ChatScreen from "./ChatScreen";
import ScoreScreen from "./ScoreScreen";

const MainScreen = () => {
  return (
    <div className="d-md-flex">
        <div class="col-md-7">
          <ScoreScreen />
        </div>
        <div class="col-md-5" style={{boxSizing:"border-box"}}>
          <ChatScreen />
        </div>
      </div>
  );
};

export default MainScreen;
