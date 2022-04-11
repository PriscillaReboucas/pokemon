import Abilities from "./Abilities";
import styles from "./AbilitiesList.module.css";

function AbilitiesList(props) {
  return (
    <ul className={styles.abilitiesList}>
      {props.abilities.map((ability, index) => {
        return <Abilities key={index} name={ability.ability.name} url={ability.ability.url}/>;
      })}
    </ul>
  );
}

export default AbilitiesList;
