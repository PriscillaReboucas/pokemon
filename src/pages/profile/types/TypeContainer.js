import styles from './TypeContainer.module.css'
import {useState, useEffect} from 'react'
import * as pokeapi from '../../../repositories/pokeapi'
import {useParams} from 'react-router-dom'
import TypesList from './TypesList'

function TypesPokemon (){
    const [isLoading, setLoading] = useState(true)
    const [isLoadedType, setLoadedType] = useState([])

    const {name} = useParams();

    useEffect(() => {
        setLoading(true)
        pokeapi.profile(name).then((dataType)=>{
            setLoading(false)
            setLoadedType(dataType.types)
        });
    }, []);
   
    return (
        <section>
           <TypesList types={isLoadedType} />
        </section>);
}



export default TypesPokemon;