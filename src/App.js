import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Pokemons from "./Pokemons";
import Page from "./Page";
import Error from "./Error";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Pokemons />}></Route>
        <Route path=":pokemonid" element={<Page />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
