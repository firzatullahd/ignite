import axios from 'axios';
import { getPopularGames, getUpcomingGames, getNewGames } from '../utils/api';

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