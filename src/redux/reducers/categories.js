import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,

} from '../actions/categories/types'

const initialState = {
    categories: null
}

export default function categories(state = initialState, actions) {

    const { type, payload } = actions;

    switch (type) {
        case GET_CATEGORIES_SUCCESS:
            return {
                categories: payload.categories
            }
        case GET_CATEGORIES_FAIL:
            return {
                ...state,
                categories: null
            }
        default:
            return state
    }

}
