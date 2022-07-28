import { useContext } from "react";
import { Context } from "./Context";

function Form() {
  const { formGeneration, formType, handleChangeGeneration, handleChangeType } =
    useContext(Context);

  return (
    <div>
      <form>
        <div className="form">
          <label htmlFor="form__generation">Generation</label>
          <select
            id="form__generation"
            name="form__generation"
            value={formGeneration}
            onChange={handleChangeGeneration}
          >
            <option value="generation1">1</option>
            <option value="generation2">2</option>
            <option value="generation3">3</option>
            <option value="generation4">4</option>
            <option value="generation5">5</option>
            <option value="generation6">6</option>
            <option value="generation7">7</option>
            <option value="generation8">8</option>
          </select>
        </div>

        <div className="form">
          <label htmlFor="form__type">Type</label>
          <select
            id="form__type"
            name="form__type"
            value={formType}
            onChange={handleChangeType}
          >
            <option value="all">- All -</option>
            <option value="normal">Normal</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="electric">Electric</option>
            <option value="grass">Grass</option>
            <option value="ice">Ice</option>
            <option value="fighting">Fighting</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="flying">Flying</option>
            <option value="psychic">Psychic</option>
            <option value="bug">Bug</option>
            <option value="rock">Rock</option>
            <option value="ghost">Ghost</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="steel">Steel</option>
            <option value="fairy">Fairy</option>
          </select>
        </div>
      </form>
    </div>
  );
}
export default Form;
