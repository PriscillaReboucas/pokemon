import styles from './TypesList.module.css'
import Type from './Type';

function TypesList(props){
    
    return (<ul className={styles.typeFlexbox}>
       {props.types.map((type, index)=> {
           return <Type key={index} name={type} />;
       })}
    </ul>
    );
}


export default TypesList;