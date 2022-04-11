import styles from "./Type.module.css";
import { useState, useEffect } from "react";
import * as pokeapi from "../../../repositories/pokeapi";
import RelationDamagesContainer from "../relationDamages/RelationDamagesContainer";

function Type(props) {
  const nameInit = props.name.type.name;
  const typeName = props.name.type.name[0].toUpperCase() + props.name.type.name.slice(1);

  const [isDamage, setDamage] = useState([]);

  useEffect(() => {
    pokeapi.types(nameInit).then((data) => {
      setDamage(data.damage_relations);
    });
  }, []);

    return (
      <li className={styles.typePokemon}>
        <h3 className={styles.name}>{typeName}</h3>
        <RelationDamagesContainer relation={isDamage} />
      </li>
    );

}

export default Type;
