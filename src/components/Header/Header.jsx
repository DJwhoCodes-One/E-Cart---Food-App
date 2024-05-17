import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerContents}>
                    <h2>Discover culinary delights!</h2>
                    <p>Select from our diverse menu, offering a tantalizing variety of dishes expertly crafted with premium ingredients and culinary mastery.</p>
                    <a href="#menuCards" className={styles.button}>View Menu</a>
                </div>
            </div>
        </div>
    )
}

export default Header
