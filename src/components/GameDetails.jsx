import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const GameDetails = () => {
  const { details: game, screenshots } = useSelector(
    (state) => state.selectedGame
  );
  return (
    <StyledCard>
      <StyledDetail>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map((obj) => (
                <h3 key={obj.platform.id}>{obj.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className="description">
          <p>{game.description_raw}</p>
        </div>
        <div className="gallery">
          {screenshots.map((screenshot) => (
            <img
              key={screenshot.id}
              src={screenshot.image}
              alt={screenshot.id}
            />
          ))}
        </div>
      </StyledDetail>
    </StyledCard>
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
  padding: 2rem 20rem;
  background: white;
  position: absolute;
  left: 10%;
  /* color: black; */
  img {
    width: 100%;
  }
`;

export default GameDetails;
