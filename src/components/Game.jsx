import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadDetails } from "../actions/detailsAction";
import { resizeImage } from "../utils/resizeImage";

const Game = ({ name, released, image, id }) => {
  const imageSize = 640;
  const dispatch = useDispatch();
  const loadDetailsHandler = (id) => {
    dispatch(loadDetails(id));
    document.body.style.overflow = "hidden";
  };
  return (
    <StyledGame layoutId={id} onClick={() => loadDetailsHandler(id)}>
      <Link to={`/game/${id}`}>
        <h1>{name}</h1>
        <p>{released}</p>
        <img src={resizeImage(image, imageSize)} alt={name} />
      </Link>
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
