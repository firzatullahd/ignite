import axios from 'axios';
import { getPopularGames, getUpcomingGames, getNewGames, getSearchedGame } from '../utils/api';

export const loadGames = () => async (dispatch) => {
    const popularGames = await axios.get(getPopularGames());
    const upcomingGames = await axios.get(getUpcomingGames());
    const newGames = await axios.get(getNewGames());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGames.data.results,
            upcoming: upcomingGames.data.results,
            new: newGames.data.results
        }
    })
}

export const fetchSearchedGames = (gameName) => async (dispatch) => {
    const searchedGames = await axios.get(getSearchedGame(gameName));
    dispatch({
        type: "FETCH_SEARCHED_GAMES",
        payload: {
            searched: searchedGames.data.results
        }
    })
}