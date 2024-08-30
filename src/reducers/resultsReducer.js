import { SET_RECENT_RESULTS } from "../actions/types";

const INIT_STATE = {
    results: [],
    recentResults: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_RESULTS:
            const recentResults = action.payload;
            return {...state, recentResults}
    
        default:
            return state;
    }
}