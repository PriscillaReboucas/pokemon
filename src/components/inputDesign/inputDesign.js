import styles from './inputDesign.module.css'
import pic from './magnifier.png'


function InputDesign(props) {
   
    return (
        <section className={styles.inputContainer}>
            <label className={styles.labelName} htmlFor='pokemonSearch'>
                <span className={styles.hiddenLabel}>Search a Pokémon:</span>
            </label>
            <img src={pic}></img>
            <input className={styles.inputContent} type="search" id='pokemonSearch' placeholder='Pokémon name...' onChange={props.getInputValue}/>
        </section>);
}


export default InputDesign;