import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchSprite } from "../hooks/FetchSprite";

function EvolutionLine(props) {
  if (props) {
    console.log(props.info);
  }

  return (
    <div className="pokemon__evolution--line">
      <div className="arrow"></div>
      <img src={FetchSprite(props.info.id)}></img>
      <p> {props.info.species_name}</p>
    </div>
  );
}
export default EvolutionLine;
