import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadDetails } from "../actions/detailsAction";
import { resizeImage } from "../utils/resizeImage";
import { popUp } from "../utils/animations";

const Game = ({ name, released, image, id }) => {
  id = id.toString();
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    dispatch(loadDetails(id));
    document.body.style.overflow = "hidden";
  };

  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={id}
      onClick={loadDetailsHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
        <p>Release Date: {released}</p>
        <motion.img
          layoutId={`image ${id}`}
          src={resizeImage(image, 640)}
          alt={name}
        />
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
  @media (max-width: 560px) {
    padding: 1rem 0rem 0rem;
    h2 {
      padding: 1rem 0rem;
    }
    p {
      display: none;
    }
    img {
      width: 100%;
      height: 20vh;
      object-fit: cover;
    }
  }
`;

export default Game;
