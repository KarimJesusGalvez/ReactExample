import React, {useState} from "react";
import { useDispatch } from "react-redux";
import store from "../../redux/store/store";
import { deletePerson } from "../../redux/actions/PersonAction";
import { DELETE } from "../../redux/actions/actionTypes";
import "./Buttons.css";

export default function DeleteButton() {
  const dispatch = useDispatch();
  const [person, setPerson] = useState(store);

  const handleClick = (event) => {
    console.warn("handle remove Person with " + JSON.stringify(person));
    dispatch(deletePerson(person));
    setPerson(person);
  };

  return (
    <button key={"DELETE_" + Math.random() * 1000} onClick={handleClick}>
      {DELETE}
    </button>
  );
}
