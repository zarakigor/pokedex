import { useContext } from "react";
import { Context } from "./Context";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Form() {
  const { formGeneration, formType, handleChangeGeneration, handleChangeType } =
    useContext(Context);

  const theme = createTheme({
    typography: {
      fontFamily: ["Merriweather Sans", "sans-serif"].join(","),
      fontSize: 16,
      fontWeightRegular: 500,
    },
    palette: {
      primary: {
        main: "#ffffff",
        dark: "#000000",
      },
      secondary: {
        main: "#27f590",
      },
    },
  });

  return (
    <div className="form__container">
      <ThemeProvider theme={theme}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel
            id="demo-simple-select-autowidth-label"
            sx={{ color: "primary.dark" }}
          >
            Generation
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={formGeneration}
            onChange={handleChangeGeneration}
            autoWidth
            label="Generation"
            sx={{ color: "primary.dark" }}
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
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel
            id="demo-simple-select-autowidth-label"
            sx={{ color: "primary.dark" }}
          >
            Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={formType}
            onChange={handleChangeType}
            autoWidth
            label="Type"
            sx={{ color: "primary.dark" }}
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
      </ThemeProvider>
    </div>
  );
}
export default Form;
