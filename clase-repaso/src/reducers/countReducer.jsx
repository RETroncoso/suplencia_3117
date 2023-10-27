import { COUNTER_TYPES } from "../actionTypes/counterActions"

export const counterInitialState = {
    count: 0
}

export const counterReducer = (state, action) => {
    switch (action.type) {
        case COUNTER_TYPES.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case COUNTER_TYPES.INCREMENT_5:
            return {
                ...state,
                count: state.count + 5
            };
        case COUNTER_TYPES.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case COUNTER_TYPES.DECREMENT_5:
            return {
                ...state,
                count: state.count - 5
            };
        case COUNTER_TYPES.DIVIDE:
            return {
                ...state,
                count: state.count / 2
            };
        case COUNTER_TYPES.MULTIPLY:
            return {
                ...state,
                count: state.count * 2
            };
        case COUNTER_TYPES.RESET:
            return counterInitialState
        default:
            return state
    }
}