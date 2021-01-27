import { currentDate, lastYearDate, nextYearDate } from './date';

//BASE URL
const baseUrl = "https://api.rawg.io/api";

// GAMES URL
const getPopularGamesUrl = (pageSize = 10) => {
    return `/games?dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=${pageSize}`;
}
const getUpcomingGamesUrl = (pageSize = 10) => {
    return `/games?dates=${currentDate},${nextYearDate}&=-added&page_size=${pageSize}`
}
const getNewGamesUrl = (pageSize = 10) => {
    return `/games?dates=${lastYearDate},${currentDate}&ordering=-released&page_size=${pageSize}`
}
const getGameDetailsUrl = (gameId) => {
    return `/games/${gameId}`
}
export const getPopularGames = (pageSize = 10) => baseUrl + getPopularGamesUrl(pageSize);
export const getUpcomingGames = (pageSize = 10) => baseUrl + getUpcomingGamesUrl(pageSize);
export const getNewGames = (pageSize = 10) => baseUrl + getNewGamesUrl(pageSize);
export const getGameDetails = (gameId) => baseUrl + getGameDetailsUrl(gameId);
export const getGameScreenshots = (gameId) => baseUrl + getGameDetailsUrl(gameId) + "/screenshots";

