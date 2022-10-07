import React from "react";
import "../app.css";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="home-container">
      <video src="/Background-video-1" autoPlay loop muted />
      <h1>"Where do you want to eat, I dont know, Where do YOU want to eat?</h1>
      <p>We all have asked this before. Let our app help decide! Click Here!</p>
      <div className="home-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          test <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HomeScreen;
