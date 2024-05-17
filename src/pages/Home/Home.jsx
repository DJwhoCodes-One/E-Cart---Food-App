import React from 'react'
import styles from './Home.module.css'
import Header from '../../components/Header/Header'
import AllCards from '../../components/AllCards/AllCards'

const Home = () => {
    return (
        <div>
            <Header />
            <AllCards />
        </div>
    )
}

export default Home
