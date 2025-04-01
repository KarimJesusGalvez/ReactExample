import { DELETE } from "./actionTypes";

function deletePerson(person) {
    return {type: DELETE, person};
}

export { deletePerson };