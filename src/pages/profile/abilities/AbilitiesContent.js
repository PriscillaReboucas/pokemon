import styles from './AbilitiesContent.module.css'
import {useEffect, useState} from 'react'
import * as pokeapi from '../../../repositories/pokeapi'
import AbilitiesList from './AbilitiesList'
import {useParams} from 'react-router-dom'

function AbilitiesContent (){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedAbilities, setLoadedAbilities] = useState([]);
  
    let { name } = useParams();
    const nameCaps = name[0].toLocaleUpperCase() + name.slice(1);
    
  
    useEffect(() => {
      setIsLoading(true);
      pokeapi.profile(name).then((dataProfile) => {
        setIsLoading(false);
        setLoadedAbilities(dataProfile.abilities);
      });
    }, []);
  
     
    return (
      <section className={styles.profileContainer}>
        <h2 className={styles.profileTitle}>{nameCaps}</h2>
        <img className={styles.profilePicture} src={`https://img.pokemondb.net/artwork/large/${name}.jpg`} alt={name}/>
        <AbilitiesList abilities={loadedAbilities} />
      </section>
    );
}


export default AbilitiesContent;