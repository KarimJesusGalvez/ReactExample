import countries from "../../../example_data/countries.json";
import { DELETE } from "../actions/actionTypes";
const actions = [DELETE];

function gen_country() {
  const index = Math.round(Math.random() * (countries.length - 1));
  return countries[index].name;
}

function generate_data(rows) {
  let result = [];
  for (let count = 0; count < rows; count++) {
    const github_id = Math.round(Math.random() * 1000);
    result.push({
      id: count + Math.round(Math.random() * rows * 100),
      foto: "https://avatars.githubusercontent.com/u/" + github_id + "?s=70&v=4",
      nombre: "Example0" + count.toString(),
      pais: gen_country(),
      acciones: actions,
      color: "default",
      display: true,
    });
  }
  console.debug("Generated initial data records " + result);
  return result;
}

export default generate_data(100);
