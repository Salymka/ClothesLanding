import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import styles from './ClothesPage.scss'
const ClothesPage = () => {
    return (
        <div className={styles.clothesPage}>
            <NavBar/>
            <div className={styles.pageText}>
                Clothes
            </div>
        </div>
    );
};

export default ClothesPage;