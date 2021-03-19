import { ADD_IN_LIST, DELETE_IN_LIST } from "../actions/listeToDo";

const initialState = {
    listValue: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action) => {
    switch (action.type) {
        case ADD_IN_LIST:
            return {
                ...state,
                listValue: [...state.listValue, action.playload]
            }
        case DELETE_IN_LIST:
            let tmp = [...state.listValue]
            tmp.splice(action.index, 1)
            return {
                ...state,
                listValue: tmp
            }    
        default:
            return state;
    }
}