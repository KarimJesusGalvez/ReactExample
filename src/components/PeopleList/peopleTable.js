import React from "react";
import { useSelector } from "react-redux";
import generate_data from "../../redux/store_InitialState";

const initial_data = generate_data(100);
function generatNode(person) {
    console.info(person);

  // TODO dynamic columns
  const key = (person.nombre + person.pais) + Date.now() + "_" + (Math.random() * (10000 - 0) + 0).toFixed(0);
  console.info(key)
  return (
    <tr key={key}>
      <td>
        <img src={person.foto}></img>
      </td>
      <td>{person.nombre}</td>
      <td>{person.pais}</td>
      <td>{person.acciones}</td>
    </tr>
  );
}
const Peopletable = () => {
  const people = useSelector((state) => state.people);
  const peoplList = require("../../../example_data/countries.json");
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{Object.keys(people).map((header) => header)}</th>
          </tr>
        </thead>
        <tbody>{Object.keys(people).length > 0 ? people.map((key) => generatNode(key)) : initial_data.map((person) => generatNode(person))}</tbody>
      </table>
    </div>
  );
};
export default Peopletable;
