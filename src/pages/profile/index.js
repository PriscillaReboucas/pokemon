import AbilitiesContent from './abilities/AbilitiesContent'
import TypeContainer from './types/TypeContainer';
import styles from './Pokemon.module.css'



function Pokemon() {


   
  return (
    <section className={styles.flexbox}>
      <AbilitiesContent />
      <TypeContainer/>
    </section>
  );
}

export default Pokemon;
