import { SET_RECENT_POSTS } from "./types";

import axios from "axios";

export function fetchRecentPosts() {
    return function(dispatch) {
        axios
            .get("https://swapi.dev/api/")
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: SET_RECENT_POSTS,
                    payload: response.data
                })
            })
            .catch(error => {
                console.log("fetchRecentPosts error", error);
            })
    }
}