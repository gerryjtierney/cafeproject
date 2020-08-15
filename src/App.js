import React from 'react';
import TopThird from "./topThird/TopThird"
import MiddleThird from "./middleThird/MiddleThird";
import BottomThird from "./bottomThird/BottomThird";
import './App.css';

function App() {
  return (
    <div className="App">
          <div className="Overlay"></div>
          <TopThird />
          <MiddleThird />
          <BottomThird />

    </div>
  );
}

export default App;
