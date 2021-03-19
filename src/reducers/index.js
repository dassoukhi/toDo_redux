import { combineReducers } from "redux";
import listeToDo from "./listeToDo";
import listeFavories from "./listeFavories";

export default combineReducers({
    listeToDo,
    listeFavories
})