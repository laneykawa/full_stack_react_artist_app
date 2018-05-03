import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CONTACTS": {
            return {
                ...state,
                loading: false,
                data: action.contacts
            }
        }
        case "ADD_CONTACT": {
            return {
                ...state,
                loading: false,
                data: [...state.data, action.contact]
            }
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

export const getContacts = () => {
    return dispatch => {
        axios.get("/api/contacts/")
            .then(response => {
                dispatch({
                    type: "GET_CONTACTS",
                    contacts: response.data
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

export const addContact = (newContact) => {
    return dispatch => {
        axios.post("/api/contacts/", newContact)
            .then(response => {
                dispatch({
                    type: "ADD_CONTACT",
                    contact: response.data
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

export default contactReducer; 