import { currentDate, lastYearDate, nextYearDate } from './date';

//BASE URL
const baseUrl = "https://api.rawg.io/api";

// GAMES URL
const getPopularGamesUrl = (pageSize = 9) => {
    return `/games?dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=${pageSize}`;
}
const getUpcomingGamesUrl = (pageSize = 9) => {
    return `/games?dates=${currentDate},${nextYearDate}&=-added&page_size=${pageSize}`
}
const getNewGamesUrl = (pageSize = 9) => {
    return `/games?dates=${lastYearDate},${currentDate}&ordering=-released&page_size=${pageSize}`
}
const getGameDetailsUrl = (gameId) => {
    return `/games/${gameId}`
}

//SEARCH GAME
const getSearchedGameUrl = (gameName, pageSize = 9) => {
    return `/games?search=${gameName}&page_size=${pageSize}`
}

export const getPopularGames = (pageSize = 9) => baseUrl + getPopularGamesUrl(pageSize);
export const getUpcomingGames = (pageSize = 9) => baseUrl + getUpcomingGamesUrl(pageSize);
export const getNewGames = (pageSize = 9) => baseUrl + getNewGamesUrl(pageSize);
export const getGameDetails = (gameId) => baseUrl + getGameDetailsUrl(gameId);
export const getGameScreenshots = (gameId) => baseUrl + getGameDetailsUrl(gameId) + "/screenshots";
export const getSearchedGame = (gameName, pageSize = 9) => baseUrl + getSearchedGameUrl(gameName, pageSize);

