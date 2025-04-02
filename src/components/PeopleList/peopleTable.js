import React from "react";
import { useSelector } from "react-redux";
import generate_data from "../../redux/store/store_InitialState";
import "./peopleTable.css";
import { DELETE } from "../../redux/actions/actionTypes";
import DeleteButton from "./DeleteButton";
const initial_data = generate_data(100);

function generatNode(person) {
  const key = person.nombre + person.pais + Date.now() + "_" + (Math.random() * (10000 - 0) + 0).toFixed(0);
  return (
    <tr key={key}>
      <td>
        <img src={person.foto}></img>
      </td>
      <td>{person.nombre}</td>
      <td>{person.pais}</td>
      <td>{person.acciones.map((action) => generateActionButton(action))}</td>
    </tr>
  );
}

function generateActionButton(action) {
  if (action === DELETE) return <div key={action.id + Math.random() * 100}>{<DeleteButton key={action.id + Math.random() * 100}></DeleteButton>}</div>;
  else throw error("Action " + action + " not hooked up to a button");
}

const Peopletable = () => {
  const people = useSelector((state) => state.people);
  const tableHeaders = Object.keys(people[0]).slice(1, 5);
  return (
    <div id="PeopleTableContainer">
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header + "_" + Math.random() * 100}>{header[0].toUpperCase() + header.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>{Object.keys(people).length > 0 ? people.map((key) => generatNode(key)) : initial_data.map((person) => generatNode(person))}</tbody>
      </table>
    </div>
  );
};
export default Peopletable;
