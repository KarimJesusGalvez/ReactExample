import { DELETE } from "../actions/actionTypes";
import initial_state from "../store/store_InitialState";

function reducerDelete(state, action) {
  let new_state = [];
  // TODO use filter
  Object.keys(state).forEach((keys) => {
    if (state[keys].id !== action.person.id) new_state.push(state[keys]);
  });

  return new_state;
}

export default function personReducer(state = initial_state(), action) {
  switch (action.type) {
    case DELETE:
      return reducerDelete(state, action);
    default:
      return state;
  }
}
