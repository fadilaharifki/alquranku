import { SET_DATA_ALQURAN, SET_DATA_ALQURAN_LOADING, SET_DATA_ALQURAN_ERROR } from "../actionType";

const initialState = {
    dataAlquran: '',
    isLodaing: true,
    isError: false,
}

export default function dataAlquranReducer(state = initialState, action) {
    const { type, payload } = action
    if (type === SET_DATA_ALQURAN) {
        return { ...state, dataAlquran: payload }
    } else if (type === SET_DATA_ALQURAN_LOADING) {
        return { ...state, isLodaing: payload }
    } else if (type === SET_DATA_ALQURAN_ERROR) {
        return { ...state, isError: payload }
    }
    return state
}