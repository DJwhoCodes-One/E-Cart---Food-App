import React from 'react'
import styles from './Card.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, DEC } from '../../redux/action/action';

const Card = ({ item }) => {

    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cartReducer);

    const send = (item) => {
        dispatch(ADD(item));
    }

    const remove = (item) => {
        dispatch(DEC(item));
    }

    const itemIndex = cartItems.cart.findIndex((elem) => elem.id === item.id);

    return (
        <div className={styles.foodItem}>
            <div className={styles.foodItemImgContainer}>
                <img src={item.image} alt={item.name} />
            </div>
            <div className={styles.foddItemInfo}>
                <div className={styles.foodItemName}>
                    <p>{item.name}</p>
                </div>
                <p className={styles.foodItemDesc}>
                    {item.description}
                </p>
                <div className={styles.foodItemPrice}>
                    <span>₹{item.price * 30}</span>
                    <span>
                        {itemIndex >= 0 ? (
                            <div style={{ display: "flex", alignItems: "center", gap: "15px", fontSize: "20px", cursor: "pointer" }}>
                                <div style={{ backgroundColor: "rgb(251, 174, 174)", width: "35px", height: "35px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "30px", borderRadius: "50%" }} onClick={() => remove(item)}>-</div>
                                <div>{cartItems.cart[itemIndex].qnty}</div>
                                <div style={{ backgroundColor: "rgb(187, 251, 187)", width: "35px", height: "35px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "25px", borderRadius: "50%" }} onClick={() => send(item)} >+</div>
                            </div>
                        ) : (
                            <button onClick={() => send(item)}>Add to Cart</button>
                        )}
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Card
