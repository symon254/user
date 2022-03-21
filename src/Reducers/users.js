import {
    CREATE_USER,
    GET_USERS,
    GET_USER,
    UPDATE_USER,
    DELETE_USER,
    UPDATE_AMOUNT,
    // CREATE_ACCOUNT,
    //  UPDATE_ACCOUNT,
} from "../Actions/types";
const initialState = [];
function usersReducer(users = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_USER:
            return [...users, payload];
        case GET_USERS:
            return payload;
        case GET_USER:
            return payload;
        case UPDATE_USER:
            return users.map((user) => {
                if (user.id === payload.id) {
                    return {
                        ...user,
                        ...payload,
                    };
                } else {
                    return user;
                }
            });
        case UPDATE_AMOUNT:
            return users.map((user) => {
                if (user.id === payload.id) {
                    return {
                        ...user,
                        ...payload,
                    };
                } else {
                    return user;
                }
            });
        case DELETE_USER:
            return users.filter(({ id }) => id !== payload.id);

        default:
            return users;
    }
}
export default usersReducer;
