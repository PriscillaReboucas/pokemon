import styles from './RelationDamages.module.css';

function RelationDamage(props) {
  if (props.list && props.list.length === 0) {
    props.list.push({ name: "no one" });
  }
 

  return (
    <dl className={styles.relationBorder}>
      <dt className={styles.relationDamage}>{props.damages}</dt>
      {props.list &&
        props.list.map((type, index) => {
          return (
            <dd key={index} className={styles.typePokemon}>
              {type.name}
            </dd>
          );
        })}
    </dl>
  );
}

export default RelationDamage;
