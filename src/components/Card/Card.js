import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export function Card(props) {
  const initialName = props.name;
  const nameUpperCase = initialName[0].toLocaleUpperCase() + initialName.slice(1);
  
  return (
    <Link
      className={styles.card}
      to={`/profile/${props.name}`}
      target="_blank"
      title="profile"
    >
      <h2 className={styles.name}>{nameUpperCase}</h2>
      <img
        alt={props.name}
        src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg`}
        className={styles.picture}
      />
    </Link>
  );
}
