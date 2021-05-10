import * as type from '../types';

const initialState = {
    shareData: [],
}

export default function share(state = initialState, action) {
    switch (action.type) {
        case type.GET_SHARE_DATA:
            return {
                ...state,
                shareData: action.payload
            }
        default:
            return state
    }
}