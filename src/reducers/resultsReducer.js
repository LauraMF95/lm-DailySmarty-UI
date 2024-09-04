import { 
    SET_RECENT_RESULTS,
    SET_RESULTS_RESULTS
} from "../actions/types";

const INIT_STATE = {
    resultsResults: [],
    recentResults: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_RESULTS:
            const recentResults = action.payload;
            return {...state, recentResults}
    
        case SET_RESULTS_RESULTS:
            const resultsResults = action.payload;
            return {...state, resultsResults}

        default:
            return state;
    }
}