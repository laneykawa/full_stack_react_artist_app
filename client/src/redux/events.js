import axios from "axios";

const initialState = {
    data: [],
    currentEvents: {},
    loading: true,
    errMsg: ""
}

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_EVENTS": {
            return {
                ...state,
                loading: false,
                data: action.events
            }
        }
        case "GET_EVENT": {
            return {
                ...state,
                loading: false,
                currentEvent: action.event
            }
        }
        case "ADD_EVENT": {
            return {
                ...state,
                loading: false,
                data: [...state.data, action.event]
            }
        }
        case "REMOVE_EVENT":
            return {
                ...state,
                loading: false,
                data: state.data.filter(event => event._id !== action.id)
            }
        case "EDIT_EVENT":
            return {
                ...state,
                loading: false,
                data: state.data.map(event => {
                    if (event._id === event.id) {
                        return action.event;
                    } else {
                        return event;
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

export const getEvents = () => {
    return dispatch => {
        axios.get("/api/events")
            .then(response => {
                dispatch({
                    type: "GET_EVENTS",
                    events: response.data
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

export const getEvent = (id) => {
    return dispatch => {
        axios.get("/api/events/" + id)
            .then(response => {
                dispatch({
                    type: "GET_EVENT",
                    events: response.data
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

export const addEvent = (newEvent) => {
    return dispatch => {
        axios.post("/api/events/", newEvent)
            .then(response => {
                dispatch({
                    type: "ADD_EVENT",
                    event: response.data
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

export const removeEvent = (id) => {
    return dispatch => {
        axios.delete("/api/events/" + id)
            .then(response => {
                dispatch({
                    type: "REMOVE_EVENT",
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

export const editEvent = (id, newEvent) => {
    return dispatch => {
        axios.put("/api/events/" + id, newEvent)
            .then(response => {
                dispatch({
                    type: "EDIT_EVENT",
                    event: response.data,
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

export default eventReducer; 