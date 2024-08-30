import { SET_RECENT_RESULTS } from "./types";

import axios from "axios";

export function fetchRecentResults() {
    return function(dispatch) {
        axios
            .get("https://pokeapi.co/api/v2/ability/")
            .then(response => {
                console.log(response.data.results);
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