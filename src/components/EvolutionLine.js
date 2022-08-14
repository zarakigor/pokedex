import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchSprite } from "../hooks/FetchSprite";
import Name from "./Name";
import Sprite from "./Sprite";

function EvolutionLine(props) {
  // if (props) {
  //   console.log(props.info);
  // }

  return (
    <div className="pokemon__evolution--line">
      <div className="arrow"></div>
      <Sprite src={FetchSprite(props.info.id)} />
      <Name name={props.info.species_name} myStyle={{ color: "white" }} />
    </div>
  );
}
export default EvolutionLine;
