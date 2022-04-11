import styles from "./Abilities.module.css";
import * as pokeapi from '../../../repositories/pokeapi'
import { useEffect, useState } from "react";


function Abilities(props) {

  const nameAbility = props.name
  const finalNameAbility = nameAbility[0].toUpperCase() + nameAbility.slice(1)
 
  const [isFeatching, setFeatching] = useState(true);
  const [loadedDescription, setLoadedDescription] = useState('');
  
  useEffect(() => {
    setFeatching(true);
    pokeapi.ability(nameAbility).then((data) => {
    setFeatching(false);
    const descriptionList = data.effect_entries.filter( (obj) => obj.language.name === 'en')
    if(descriptionList && descriptionList.length >0){
      setLoadedDescription(descriptionList[0].effect);
    }
    });
  }, []);

  return (
    <li className={styles.abilityContainer}>
      <h3 className={styles.abilityName}>{finalNameAbility}</h3>
      <p className={styles.abilityDescription}>{loadedDescription}</p>
    </li>
  );
}

export default Abilities;
