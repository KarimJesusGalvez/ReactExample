import { combineReducers } from "redux";
import person from "../reducers/PeopleReducer";

const rootReducer = combineReducers({people: person})

export default rootReducer