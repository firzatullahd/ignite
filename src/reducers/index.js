import { combineReducers } from 'redux';
import gamesReducer from './gamesReducers';
import detailsReducer from './detailsReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    selectedGame: detailsReducer
});

export default rootReducer;