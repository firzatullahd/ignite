import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { resizeImage } from "../utils/resizeImage";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import web from "../img/web.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetails = ({ pathId }) => {
  const history = useHistory();

  const { details: game, screenshots, isLoading } = useSelector(
    (state) => state.selectedGame
  );

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("overlay")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const getStarRating = () => {
    const stars = [];
    const rating = Math.round(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img src={starFull} alt="star" key={i} />);
      } else {
        stars.push(<img src={starEmpty} alt="star" key={i} />);
      }
    }
    return stars;
  };

  const getPlatformImage = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "PlayStation 2":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Xbox":
        return xbox;
      case "Xbox Series S/X":
        return xbox;
      case "PC":
        return steam;
      case "Web":
        return web;
      case "Nintendo Switch":
        return nintendo;
      case "IOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <>
      {!isLoading && (
        <StyledCard className="overlay" onClick={exitDetailHandler}>
          <StyledDetail layoutId={pathId}>
            <StyledStats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStarRating()}
              </div>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatforms>
                  {game.platforms.map((obj) => (
                    <img
                      key={obj.platform.id}
                      src={getPlatformImage(obj.platform.name)}
                      alt={obj.platform.name}
                    />
                  ))}
                </StyledPlatforms>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <motion.img
                layoutId={`image ${pathId}`}
                src={resizeImage(game.background_image, 1280)}
                alt={game.name}
              />
            </StyledMedia>
            <StyledDescription>
              <p>{game.description_raw}</p>
            </StyledDescription>
            <div className="gallery">
              {screenshots.map((screenshot) => (
                <img
                  key={screenshot.id}
                  src={resizeImage(screenshot.image, 1280)}
                  alt={screenshot.id}
                />
              ))}
            </div>
          </StyledDetail>
        </StyledCard>
      )}
    </>
  );
};

const StyledCard = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const StyledDetail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  z-index: 10;
  img {
    width: 100%;
  }
  @media (max-width: 560px) {
    padding: 1rem 1rem;
    width: 100%;
    left: 0;
    border-radius: 0;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  @media (max-width: 560px) {
    img {
      width: 1rem;
      height: 1rem;
      display: inline;
    }
  }
`;

const StyledInfo = styled(motion.div)`
  text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
  @media (max-width: 560px) {
    img {
      margin-left: 1rem;
    }
  }
`;

const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const StyledDescription = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetails;
