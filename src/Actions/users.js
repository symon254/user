import {
    CREATE_USER,
    GET_USERS,
    GET_USER,
    UPDATE_USER,
    DELETE_USER,
    CREATE_ACCOUNT,
    UPDATE_AMOUNT,
} from "./types";
import http from "../Utils/api";
export const createUser =
    (namess, email, phone, location) => async (dispatch) => {
        try {
            const res = await http.post("/users", {
                namess,
                email,
                phone,
                location,
            });
            dispatch({
                type: CREATE_USER,
                payload: res.data,
            });
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };
export const createAccount = (amount) => async (dispatch) => {
    try {
        const res = await http.post("/account", { amount });
        dispatch({
            type: CREATE_ACCOUNT,
            payload: res.data,
        });
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};
export const updateUser = (id, data) => async (dispatch) => {
    try {
        const res = await http.put(`/users/${id}`, data);
        dispatch({
            type: UPDATE_USER,
            payload: res.data,
        });
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};
export const updateAmount = (id, data) => async (dispatch) => {
    try {
        const res = await http.put(`/users/${id}`, data);
        dispatch({
            type: UPDATE_AMOUNT,
            payload: res.data,
        });
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};
export const getUsers = () => async (dispatch) => {
    try {
        const res = await http.get("/users");
        dispatch({
            type: GET_USERS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
export const getUser = (id, data) => async (dispatch) => {
    try {
        const res = await http.get(`/users/${id}`, data);
        dispatch({
            type: GET_USER,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await http.delete(`/users/${id}`);
        dispatch({
            type: DELETE_USER,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};
export const findUser = (namess) => async (dispatch) => {
    try {
        const res = await http.get(`/users?namess=${namess}`);
        dispatch({
            type: GET_USERS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
