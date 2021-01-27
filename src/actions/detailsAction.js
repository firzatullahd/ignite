import axios from 'axios';
import { getGameDetails, getGameScreenshots } from '../utils/api';

export const loadDetails = (gameId) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAILS"
    });

    const gameDetails = await axios.get(getGameDetails(gameId));
    const gameScreenshots = await axios.get(getGameScreenshots(gameId));

    dispatch({
        type: "FETCH_GAME_DETAILS",
        payload: {
            details: gameDetails.data,
            screenshots: gameScreenshots.data.results
        }
    });
}