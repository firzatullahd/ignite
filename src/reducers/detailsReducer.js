const initState = {
    details: {},
    screenshots: {}
}

const detailsReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAME_DETAILS":
            return {
                ...state,
                details: action.payload.details,
                screenshots: action.payload.screenshots
            }

        default:
            return { ...state };
    }
}

export default detailsReducer;