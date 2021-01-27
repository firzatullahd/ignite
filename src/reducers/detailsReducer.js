const initialState = {
    details: { platforms: [] },
    screenshots: [],
    isLoading: true
}

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_GAME_DETAILS":
            return {
                ...state,
                details: action.payload.details,
                screenshots: action.payload.screenshots,
                isLoading: false
            }
        case "LOADING_DETAILS":
            return { ...state, isLoading: true }
        default:
            return { ...state };
    }
}

export default detailsReducer;