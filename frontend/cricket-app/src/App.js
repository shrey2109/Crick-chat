import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import MainScreen from "./screen/MainScreen";
import UserScreen from "./screen/UserScreen";
import DoChat from "./components/Chat/DoChat";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/main" element={<MainScreen />} />
      </Routes>
    </Router>
  );
};
