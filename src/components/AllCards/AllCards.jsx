import React, { useEffect } from 'react'
import styles from './AllCards.module.css'
import { food_list } from '../../assets/assets'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE } from '../../redux/action/action'

const AllCards = () => {

    const cartItems = useSelector((state) => state.cartReducer);

    const dispatch = useDispatch();

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
        <div className={styles.foodDisplay}>
            <h2 id='menuCards'>Order Food Online!</h2>
            <div className={styles.foodDisplayList}>
                {
                    food_list.map((item, index) => {
                        return <Card key={index} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default AllCards
