import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { assets } from '../../assets/assets';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const getCartData = useSelector((state) => state.cartReducer);
    const [menu, setMenu] = useState('home');
    const location = useLocation();

    useEffect(() => {
        // Retrieve 'menu' value from session storage when the component mounts
        const menuSession = sessionStorage.getItem('menu');
        if (menuSession) {
            setMenu(JSON.parse(menuSession));
        }
    }, []); // This effect runs once when the component mounts

    useEffect(() => {
        // Update session storage 'menu' value when the location changes
        sessionStorage.setItem('menu', JSON.stringify(menu));
    }, [menu]); // This effect runs whenever the 'menu' state changes

    const handleMenuClick = (menuItem) => {
        // Update 'menu' state only if the clicked menu item is different from the current 'menu'
        if (menuItem !== menu) {
            setMenu(menuItem);
        }
    };

    return (
        <div className={styles.nav}>
            <div className={styles.navbar}>
                <h2 className={styles.logo}>DJwhoCODES</h2>
                <div className={styles.navbarMenu}>
                    <Link to='/' onClick={() => handleMenuClick("home")} className={menu === "home" ? styles.active : ""}><span className={styles.navList}>Home</span></Link>
                    <a href='#menuCards' onClick={() => handleMenuClick("menu")} className={menu === "menu" ? styles.active : ""}><span className={styles.navList}>Menu</span></a>
                    <Link to='/cart' onClick={() => handleMenuClick("about")} className={menu === "about" ? styles.active : ""}><span className={styles.navList}>My Cart</span></Link>
                </div>
                <div className={styles.right}>
                    {/* <img src={assets.search_icon} alt="search" /> */}
                    <div className="cart">
                        <Badge badgeContent={getCartData.cart?.length} color="success">
                            <div>
                                <Link to='/cart' onClick={() => handleMenuClick("about")} className={menu === "about" ? styles.active : ""}>
                                    <i className={`fa-solid fa-cart-shopping fa-xl ${styles.cartIcon}`} style={{ color: "rgba(50, 255, 50,1)" }}></i></Link>
                            </div>
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
