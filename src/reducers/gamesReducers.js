const initialState = {
    popular: [],
    new: [],
    upcoming: [],
    searched: []
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                new: action.payload.new
            }
        case "FETCH_SEARCHED_GAMES":
            return {
                ...state,
                searched: action.payload.searched
            }
        case "CLEAR_SEARCHED_GAMES":
            return {
                ...state,
                searched: []
            }
        default:
            return { ...state }
    }
}

export default gamesReducer;