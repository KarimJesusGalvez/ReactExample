import countries from "../../example_data/countries.json";
import { DELETE } from "./actions/actionTypes";
const actions = [DELETE];

function gen_country() {
  const index = Math.round(Math.random() * countries.length)
  return countries[index].name;
}

function generate_data (rows) {
  let result = [];
  for (let count = 0; count < rows; count++) {
    // TODO
    result.push({ foto: "file://example_data/ProfileAvatar.png", nombre: "Example0" + count.toString(), pais: gen_country(), acciones: actions });
  }
  console.info(rows)
  console.info(result)
  return result;
}

export default ()=> generate_data(100);