import RelationDamage from "./RelationDamages";
import styles from './RelationDamagesContainer.module.css'


function RelationDamagesContainer(props){

    return (
    <section className={styles.relationContainer}> 
           <RelationDamage damages='Double damage from' list={props.relation.double_damage_from} /> 
           <RelationDamage damages='Half damage from' list={props.relation.half_damage_from} />
           <RelationDamage damages='No damage from' list={props.relation.no_damage_from} />
           <RelationDamage damages='Double damage to' list={props.relation.double_damage_to} /> 
           <RelationDamage damages='Half damage to' list={props.relation.half_damage_to} />
           <RelationDamage damages='No damage to' list={props.relation.no_damage_to} />
    </section>);
}


export default RelationDamagesContainer;