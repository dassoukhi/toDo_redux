export const ADD_IN_LIST = "ADD_IN_LIST"
export const DELETE_IN_LIST = "DELETE_IN_LIST"

export const addInList = value =>({
    type: ADD_IN_LIST,
    playload: value
})

export const deleteInList = value => ({
    type: DELETE_IN_LIST,
    index: value
})