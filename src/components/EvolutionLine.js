import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchSprite } from "../hooks/FetchSprite";
import Name from "./Name";
import Sprite from "./Sprite";

function EvolutionLine(props) {
  return (
    <div className="pokemon__evolution--line">
      <div className="arrow"></div>
      <div>
        <Link to={`/${props.info.id}`}>
          <Sprite
            src={FetchSprite(props.info.id)}
            name={props.info.species_name}
          />
        </Link>
        <Name name={props.info.species_name} />
      </div>
    </div>
  );
}
export default EvolutionLine;
