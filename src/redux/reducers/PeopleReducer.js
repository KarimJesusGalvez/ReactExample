import { DELETE } from "../actions/actionTypes"


function reducerDelete (){
 // TODO
}

export default function personReducer(state = [], action) {
    switch (action.type) {
        case DELETE: return reducerDelete(state, action);
    default: return state
    }
}