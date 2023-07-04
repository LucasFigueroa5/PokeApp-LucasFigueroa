import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import pokeMusic from "../../utils/music/jede.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);


  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container">
      <div className="half red"></div>
      <div className="half white">
        <div className="button-container">
          <div className="centered-button">
            <Link exact="true" to="/home">
              <button className="btnStart">START</button>
            </Link>
          </div>
        </div>
        <div className="audio-controls">
          <button className="btnSound" onClick={toggleSound}>
            {isPlaying ? (
              <FontAwesomeIcon
                icon={faVolumeHigh}
                style={{ fontSize: "15px", color: "#e53a40" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faVolumeXmark}
                style={{ fontSize: "15px", color: "#e53a40" }}
                beat
              />
            )}
          </button>
        </div>
      </div>
      <audio ref={audioRef} src={pokeMusic} loop  />
    </div>
  );
};

export default Landing;