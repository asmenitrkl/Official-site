import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OurTeamsCard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="team-container">
        <div className="team-box">
          <div className="team-img">
            <img
              src="https://i.postimg.cc/D05Yb9Tc/Whats-App-Image-2023-07-18-at-12-11-08-PM.jpg"
              alt="team-img"
            />
          </div>

          <div className="team-content">
            <h1 className="homeHeader">OUR TEAM</h1>
            <p>
            We have three broad team divisions in our section which provide hands-on experience and knowledge to be industry ready. These teams are "Team BlueStreak", "Team Blueprint" & "Team Bluebird". Team BlueStreak focuses on manufacturing the human powered vehicle for ASME's annual HPVC competition, Team Blueprint is responsible for creating 3D Printed models for ASME's IAM3D Challenge, and lastly, Team Bluebird focuses on ASME's XRC and sustainability innovation challenges.
            </p>
            <div className="teams-btn">
              <button onClick={() => navigate("/Our-Team")}>Know Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamsCard;
