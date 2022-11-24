import React from 'react'
import styles from './Card.module.scss'

function Card({title, imgUrl,  price, onPlus,onFavorite}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        onPlus({title, price, imgUrl});
        setIsAdded(!isAdded)
    }

    return (
        <div className={styles.card} >
        <div className={styles.favorite} onClick={onFavorite}>
        <img src='/img/heartUnliked.svg' alt='Unliked'/>
    </div>
    <img className={styles.imgContent} width={153} height={132}
         src={imgUrl}
         alt='Gingerbreads'/>
    <h5>{title}</h5>
    <div className={styles.card_bottom}>
        <div className={styles.card_price}>
            <span>Цена</span>
            <b>{price} руб.</b>
        </div>
            <img className={styles.plus} onClick={onClickPlus}
                 src={isAdded ? '/img/btnUnchecked.svg' : '/img/btnPlus.svg'} alt='Plus' />
        </div>
</div>
    );
}

export default Card;
