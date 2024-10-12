import yanamiChan from '../assets/yanami.jpg';
import styles from './Card.module.css';

function Card(){
    return(
        <div className = {styles.card}>
            <img className={styles['card-image']} src={yanamiChan}></img>
            <h2 className={styles['card-title']}>This is my waifu</h2>
            <p className={styles['card-text']}>I want this girl becomes real</p>
        </div>
    );
}

export default Card