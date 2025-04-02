import { DELETE } from "../actions/actionTypes";
import initial_state from "../store/store_InitialState";

function reducerDelete(state, action) {
  let new_state = [];
  // TODO use filter

  Object.keys(state).forEach((keys) => {
    if (state[keys]._gen_id !== action.person._gen_id) {
      new_state.push(state[keys]);
    }
  });
  if (Object.keys(state).length === Object.keys(new_state).length) 
    throw Error("New State is equal")

  return new_state;
}

export default function personReducer(state = initial_state, action) {
  switch (action.type) {
    case DELETE:
      return reducerDelete(state, action);
    default:
      return state;
  }
}
