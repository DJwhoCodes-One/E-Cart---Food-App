import React from 'react'
import styles from './AiBot.module.css'
import { Link } from 'react-router-dom'

const AiAssitant = () => {
    return (
        <div>
            <div className={styles.bot}>
                <Link to={'https://dj-gpt-sigma.vercel.app'}>Ai</Link>
            </div>
        </div>
    )
}

export default AiAssitant
