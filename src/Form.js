import { useContext } from "react";
import { Context } from "./Context";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Form() {
  const { formGeneration, formType, handleChangeGeneration, handleChangeType } =
    useContext(Context);

  return (
    <div className="form__container">
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Generation
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={formGeneration}
          onChange={handleChangeGeneration}
          autoWidth
          label="Generation"
        >
          <MenuItem value={"generation1"}>1</MenuItem>
          <MenuItem value={"generation2"}>2</MenuItem>
          <MenuItem value={"generation3"}>3</MenuItem>
          <MenuItem value={"generation4"}>4</MenuItem>
          <MenuItem value={"generation5"}>5</MenuItem>
          <MenuItem value={"generation6"}>6</MenuItem>
          <MenuItem value={"generation7"}>7</MenuItem>
          <MenuItem value={"generation8"}>8</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={formType}
          onChange={handleChangeType}
          autoWidth
          label="Type"
        >
          <MenuItem value="all">- All -</MenuItem>
          <MenuItem value="normal">Normal</MenuItem>
          <MenuItem value="fire">Fire</MenuItem>
          <MenuItem value="water">Water</MenuItem>
          <MenuItem value="electric">Electric</MenuItem>
          <MenuItem value="grass">Grass</MenuItem>
          <MenuItem value="ice">Ice</MenuItem>
          <MenuItem value="fighting">Fighting</MenuItem>
          <MenuItem value="poison">Poison</MenuItem>
          <MenuItem value="ground">Ground</MenuItem>
          <MenuItem value="flying">Flying</MenuItem>
          <MenuItem value="psychic">Psychic</MenuItem>
          <MenuItem value="bug">Bug</MenuItem>
          <MenuItem value="rock">Rock</MenuItem>
          <MenuItem value="ghost">Ghost</MenuItem>
          <MenuItem value="dragon">Dragon</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
          <MenuItem value="steel">Steel</MenuItem>
          <MenuItem value="fairy">Fairy</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default Form;

{
  /* <form>
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
</form>; */
}
