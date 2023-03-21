import React from "react";
import Fruits from "./components/fruits/Fruits";
import FruitsCounter from "./components/fruits/FruitsCounter";
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from "./components/navigation/HomePage";
import AboutMe from "./components/navigation/AboutMe";
import UseRef  from "./components/UseRef";
function App() {


  return (
    <div className="app">
      <UseRef />

    </div>
  );
}

export default App;
