import React, { useEffect } from 'react'
import styles from './Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { DLT, UPDATE } from '../../redux/action/action';

const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer);
    // console.log(cartItems.cart);

    const dispatch = useDispatch();

    const removeFromCart = (itemToDelete) => {
        dispatch(DLT(itemToDelete));
    }

    const subTotal = cartItems.cart.reduce((acc, curr) => {
        return acc += (curr.price * 30 * curr.qnty);
    }, 0)

    useEffect(() => {
        let storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems === null) {

        }
        else if (storedCartItems) {
            storedCartItems = JSON.parse(storedCartItems);
            // console.log(storedCartItems)
            dispatch(UPDATE(storedCartItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems.cart));
    }, [cartItems.cart]);

    return (
        <div className={styles.cart}>
            <div className={styles.cartItems}>
                <div className={styles.cartItemsTitle}>
                    <p className={styles.cartItemsHeading}>Items</p>
                    <p className={styles.cartItemsHeading}>Title</p>
                    <p className={styles.cartItemsHeading}>Price</p>
                    <p className={styles.cartItemsHeading}>Quantity</p>
                    <p className={styles.cartItemsHeading}>Total</p>
                    <p className={styles.cartItemsHeading}>Remove</p>
                </div>
                <br />
                <hr />
                {
                    cartItems.cart.map((item, index) => {
                        return (
                            <div key={index} className={styles.cartItem}>
                                <div className={`${styles.displayCartItem} ${styles.cartItemsTitle}`}>
                                    <img src={item.image} alt={item.name} />
                                    <p className={styles.cartItemsHeadingValues}>{item.name}</p>
                                    <p className={styles.cartItemsHeadingValues}>₹ {item.price * 30}</p>
                                    <p className={styles.cartItemsHeadingValues}>{item.qnty}</p>
                                    <p className={styles.cartItemsHeadingValues}>₹ {item.price * 30 * item.qnty}</p>
                                    <p onClick={() => removeFromCart(item)} className={styles.cross}><i className="fa-solid fa-trash" style={{ color: "#ff0000" }}></i></p>
                                </div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.total}>
                <p><span className={styles.totalDesc}>Subtotal &nbsp;&nbsp;-  &nbsp;&nbsp;&nbsp;</span><span className={styles.amount}>₹ {subTotal}</span></p> <hr />
                <p><span className={styles.totalDesc}>Delivery &nbsp;&nbsp;-  &nbsp;&nbsp;&nbsp;</span><span className={styles.amount}>₹ {50}</span></p> <hr />
                <p><span className={styles.totalDesc}>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    -&nbsp;&nbsp;&nbsp;&nbsp;</span><span className={styles.amount}>₹ {subTotal + 50}</span></p>
            </div>
        </div >
    )
}

export default Cart