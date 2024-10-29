import React from "react";

import "./App.css"; // Import your CSS file for styling
import imageRight from "./images/right.png";
import imageLock from "./images/lock1.jpeg";
import imagecube2 from "./images/cube2.jpeg";
// /import imageLogo from './images/logo.png';
import imageProfile from "./images/profile.jpeg";
import RankCard from "./components/rank";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="container ">
        <div className="left-side">
          <h2>Leaderboard</h2>
          <RankCard name="Person-xyz" xp={1000} avatar={imageProfile} />
          <RankCard name="Person-abc" xp={100} avatar={imageProfile} />
          <RankCard name="Person-123" xp={900} avatar={imageProfile} />
        </div>
        <div className="right-side">
          <div className="right-box">
            <div className="mercury-league">
              <div className="a1">Venus League</div>
              <div className="a2">Ends in 3d 7h</div>
              <img className="lock" src="./h" alt="League Icon" />
              <img className="lock" src={imagecube2} alt="League Icon" />
              <img className="lock" src={imageLock} alt="Lock Icon" />
              <img className="lock" src={imageLock} alt="Lock Icon" />
              <img className="lock" src={imageLock} alt="Lock Icon" />
              <img className="lock" src={imageLock} alt="Lock Icon" />
            </div>
            <div className="earn-xp">
              <h2>Earn XP</h2>
              <div>
                <h3 className="box">
                  Keep your Streak
                  <img className="comp" src={imageRight} alt="Check Icon" />
                  <p>From 6 XP</p>
                </h3>
              </div>
              <div>
                <h3 className="box">
                  Complete a lesson
                  <img className="comp" src={imageRight} alt="Check Icon" />
                  <p>+10 XP</p>
                </h3>
              </div>
              <div>
                <h3 className="box">
                  Keep your Streak
                  <img className="comp" src={imageRight} alt="Check Icon" />
                  <p>+ 6 XP</p>
                </h3>
              </div>
              <div>
                <h3 className="box">
                  Solve a Code coach
                  <img className="comp" src={imageRight} alt="Check Icon" />
                  <p>+5 XP</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
