import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import UserScreen from './screen/UserScreen';
import DoChat from "./components/Chat/DoChat";

function App() {
  return (
    // <HomeScreen/>
  //  <UserScreen/>
   <DoChat/>
  );
}

export default App;
