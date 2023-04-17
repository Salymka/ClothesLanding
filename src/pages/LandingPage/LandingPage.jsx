import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import styles from './LandingPage.scss'
const LandingPage = () => {
    return (
        <div className={styles.page}>
            <NavBar/>
            <HeaderSection/>
            <AboutSection/>
        </div>
    );
};

export default LandingPage;