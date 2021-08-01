import { ADD_DATA_FAVORITE, ADD_DATA_FAVORITE_LOADING, ADD_DATA_FAVORITE_ERROR } from "../actionType";

const initialState = {
    data: [],
    isLodaing: true,
    isError: false,
}

export default function favoriteReducer(state = initialState, action) {
    const { type, payload } = action
    if (type === ADD_DATA_FAVORITE) {
        let temp = []
        if (state.data.length === 0) {
            temp = [...state.data, payload]
        } else if (state.data.length > 0) {
            state.data.forEach(e => {
                if (e.number !== payload.number) {
                    temp = [...state.data, payload]
                } else {
                    temp = [...state.data]
                }
            });
        }
        return { ...state, data: temp }
    } else if (type === ADD_DATA_FAVORITE_LOADING) {
        return { ...state, isLodaing: payload }
    } else if (type === ADD_DATA_FAVORITE_ERROR) {
        return { ...state, isError: payload }
    }
    return state
}