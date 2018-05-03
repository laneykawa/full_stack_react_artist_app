import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ARTISTS": {
            return {
                ...state,
                loading: false,
                data: action.artists
            }
        }
        case "GET_ARTIST": {
            return {
                ...state,
                loading: false,
                currentArtist: action.artist
            }
        }
        case "ADD_ARTIST": {
            return {
                ...state,
                loading: false,
                data: [...state.data, action.artist]
            }
        }
        case "REMOVE_ARTIST":
            return {
                ...state,
                loading: false,
                data: state.data.filter(artist => artist._id !== action.id)
            }
        case "EDIT_ARTIST":
            return {
                ...state,
                loading: false,
                data: state.data.map(artist => {
                    if (artist._id === action.id) {
                        return action.artist;
                    } else {
                        return artist;
                    }
                })
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }

        default:
            return state;
    }
}

// const artistUrl = "/artists/";

export const getArtists = () => {
    return dispatch => {
        axios.get("/api/artists")
            .then(response => {
                dispatch({
                    type: "GET_ARTISTS",
                    artists: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export const getArtist = (id) => {
    return dispatch => {
        axios.get("/api/artists/" + id)
            .then(response => {
                dispatch({
                    type: "GET_ARTIST",
                    artists: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export const addArtist = (newArtist) => {
    console.log(newArtist)
    return dispatch => {
        axios.post("/api/artists/", newArtist)
            .then(response => {
                dispatch({
                    type: "ADD_ARTIST",
                    artist: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export const removeArtist = (id) => {
    return dispatch => {
        axios.delete("/api/artists/" + id)
            .then(response => {
                dispatch({
                    type: "REMOVE_ARTIST",
                    id
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export const editArtist = (id, newArtist) => {
    return dispatch => {
        axios.put("/api/artists/" + id, newArtist)
            .then(response => {
                dispatch({
                    type: "EDIT_ARTIST",
                    artist: response.data,
                    id
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "Data unavailable"
                })
            })
    }
}

export default artistReducer; 