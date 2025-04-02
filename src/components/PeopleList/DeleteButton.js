import React, {useState} from "react";
import { useDispatch } from "react-redux";
import initial_store from "../../redux/store/store_InitialState";
import { deletePerson } from "../../redux/actions/PersonAction";
import { DELETE } from "../../redux/actions/actionTypes";
import "./Buttons.css";

export default function DeleteButton() {
  const dispatch = useDispatch();
  const [person, setPerson] = useState(initial_store);

  const handleClick = (event) => {
    // setPerson({ ...person, value: event.target.value });
    console.debug("Handle click for " + DELETE  + " start...")
    console.debug("handle remove Person with store " + JSON.stringify(person));
    let count = 0;
    let node;    
    let new_state = {...person}
    var buttons = document.evaluate("//table//button[text()='" + DELETE + "']", document, null, XPathResult.ANY_TYPE, null);
    while ((node = buttons.iterateNext())) {
      if (node === event.target) {
        console.warn("Deleting row " + count + JSON.stringify(person[count]));
        dispatch(deletePerson(person[count]));
        // TODO replace
        new_state[count] = undefined
        setPerson(new_state)
        // TODO replace
        break;
      }
      else 
        count++
    }
  };

  return (
    <button key={"DELETE_" + Math.random() * 1000} onClick={handleClick}>
      {DELETE}
    </button>
  );
}
