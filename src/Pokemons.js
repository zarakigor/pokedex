import React, { useContext } from "react";
import { Context } from "./Context";
// import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Form from "./Form";
import Pokecard from "./Pokecard";

function Pokemons() {
  const { pokemonArrFiltered } = useContext(Context);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  const pokecardElements = pokemonArrFiltered.map((pokemonID) => (
    <Pokecard id={pokemonID} key={pokemonID} />
  ));

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Form />
      </ThemeProvider>
      <div className="pokecard__container">{pokecardElements}</div>
    </div>
  );
}
export default Pokemons;
