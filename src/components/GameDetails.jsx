import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { resizeImage } from "../utils/resizeImage";

const GameDetails = ({ pathId }) => {
  const history = useHistory();

  const { details: game, screenshots } = useSelector(
    (state) => state.selectedGame
  );

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("overlay")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  return (
    <>
      {!game.isLoading && (
        <StyledCard className="overlay" onClick={exitDetailHandler}>
          <StyledDetail layoutId={pathId}>
            <StyledStats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatforms>
                  {game.platforms.map((obj) => (
                    <h3 key={obj.platform.id}>{obj.platform.name}</h3>
                  ))}
                </StyledPlatforms>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <img
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
  /* color: black; */
  img {
    width: 100%;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
