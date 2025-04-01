import { combineReducers } from "redux";
import people from "../reducers/PeopleReducer";

const rootReducer = combineReducers({people: people})

export default rootReducer