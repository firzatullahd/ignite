import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
import { fadeIn } from "../utils/animations";

function Home() {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const {
    popular: popularGames,
    upcoming: upcomingGames,
    new: newGames,
    searched: searchedGames,
  } = useSelector((state) => state.games);
  return (
    <StyledGameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetails pathId={pathId} />}
        </AnimatePresence>
        {searchedGames.length ? (
          <>
            <h2>Searched Result</h2>
            <StyledGames>
              {searchedGames.map((game) =>
                game.background_image == null ? null : (
                  <Game
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    released={game.released}
                    image={game.background_image}
                  />
                )
              )}
            </StyledGames>
          </>
        ) : (
          ""
        )}
        <h2>Upcoming Games</h2>
        <StyledGames>
          {upcomingGames.map((game) =>
            game.background_image == null ? null : (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
              />
            )
          )}
        </StyledGames>
        <h2>Popular Games</h2>
        <StyledGames>
          {popularGames.map((game) =>
            game.background_image == null ? null : (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
              />
            )
          )}
        </StyledGames>
        <h2>New Games</h2>
        <StyledGames>
          {newGames.map((game) =>
            game.background_image == null ? null : (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
              />
            )
          )}
        </StyledGames>
      </AnimateSharedLayout>
    </StyledGameList>
  );
}

const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  @media (max-width: 560px) {
    padding: 0rem 1rem;
    h2 {
      padding: 2rem 0rem;
    }
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media (max-width: 560px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1rem;
  }
`;

export default Home;
