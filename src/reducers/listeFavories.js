import { ADD_IN_FAVORIES } from "../actions/favories";


const initialState = {
    favoriesValue: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action) => {
    switch (action.type) {
        case ADD_IN_FAVORIES:
            let AllFavories = [...state.favoriesValue]
            let existe = AllFavories.find(element => element.name === action.playload.name);
            if (!existe) {
                return {
                    ...state,
                    favoriesValue: [...state.favoriesValue, action.playload]
                }  
            } else {
                return state;
            } 
        default:
            return state;
    }
}