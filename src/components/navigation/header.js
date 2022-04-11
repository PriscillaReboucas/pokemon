import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import pic from './pokedex.png'


function HeaderMenu (){
    return <h1 className={styles.menu}>
      <div className={styles.title}><img src={pic} alt='pokedex'/><span>Who is this Pokémon?</span></div>
      <Link to='/' title='Home' className={styles.mainNavigation}>Home</Link>
  </h1>
}


export default HeaderMenu;