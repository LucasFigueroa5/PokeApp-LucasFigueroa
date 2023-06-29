import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import pokeMusic from "../../utils/music/pokemon.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : 0.5;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
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
          <button
          className="btnSound" onClick={toggleMute}>
            {isMuted ? (
              <FontAwesomeIcon
                icon={faVolumeXmark}
                style={{fontSize:'15px', color: "#e53a40" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faVolumeHigh}
                style={{fontSize:'15px', color: "#e53a40" }}
                beat
              />
            )}
          </button>
        </div>
      </div>
      <audio src={pokeMusic} autoPlay loop muted={isMuted} volume={0.2}/>
    </div>
  );
};

export default Landing;
