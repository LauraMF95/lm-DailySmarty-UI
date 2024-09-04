import { 
    SET_RECENT_RESULTS,
    SET_RESULTS_RESULTS
} from "./types";

import axios from "axios";

export function fetchRecentResults() {
    return function(dispatch) {
        axios
            .get("https://swapi.dev/api/people/")
            .then(response => {
                dispatch({
                    type: SET_RECENT_RESULTS,
                    payload: response.data.results
                })
            })
            .catch(error => {
                console.log("fetchRecentResults error", error);
            })
    }
}

export function fetchResultsWithQuery(query, callback) {
    return function(dispatch) {
        axios
            .get(`https://swapi.dev/api/people/?search=${query}`)
            .then(response => {
                dispatch({
                    type: SET_RESULTS_RESULTS,
                    payload: response.data.results
                })
                if (callback) { callback() };
            })
            .catch(error => {
                console.log("fetchResultsWithQuery error", error);
            })
    }
}