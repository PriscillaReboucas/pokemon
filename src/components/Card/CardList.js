import { Card } from "./Card";
import styles from "./CardList.module.css";

function CardList(props) {
  return (
    <ul className={styles.list}>
      {props.pokemons.map((pokemon, index) => {
        return <Card key={index} name={pokemon.name} url={pokemon.url} />;
      })}
    </ul>
  );
}

export default CardList;
