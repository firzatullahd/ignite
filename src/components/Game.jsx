import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();
  const loadDetailsHandler = (id) => {
    dispatch(loadDetails(id));
  };
  return (
    <StyledGame onClick={() => loadDetailsHandler(id)}>
      <h1>{name}</h1>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  font-size: 0.55rem;
  padding: 2rem 0rem 0rem;
  min-height: 30vh;
  cursor: pointer;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
