import React from "react";
import { useSelector } from "react-redux";
import generate_data from "../../redux/store_InitialState";
import "./peopleTable.css"
const initial_data = generate_data(100);

function generatNode(person) {
    console.info(person);

  const key = (person.nombre + person.pais) + Date.now() + "_" + (Math.random() * (10000 - 0) + 0).toFixed(0);
  console.info(key)
  return (
    <tr key={key}>
      <td>
        <img src={person.foto}></img>
      </td>
      <td>{person.nombre}</td>
      <td>{person.pais}</td>
      <td>{generateActionButton(person.acciones)}</td>
    </tr>
  );
}

function generateActionButton (actions){
  return (
    <td>
      {actions.map((action) => (<button>{action}</button>))}
    </td>
  );
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
