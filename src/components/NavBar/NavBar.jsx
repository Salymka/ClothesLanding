import React, {useState} from 'react';
import styles from './NavBar.scss'
import {NavLink} from "react-router-dom";
import {landingPage} from "../../pages/router";

const BTN_ANIMATION_TIME = 1000;
const NavBar = () => {
    const [btnAnimationPlay, setBtnAnimationPlay] = useState(false)
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(true)

    function btnPlay() {
        setBtnAnimationPlay(true);
        setTimeout(() => setBtnAnimationPlay(false), BTN_ANIMATION_TIME);
    }

    return (
        <div className={`${styles.navbar}`}>
            <NavLink to={landingPage} className={styles.navbar__logo}>
                <div>
                    {`LANDING`}
                </div>
            </NavLink>
            <button
                className={`${styles.navbar__burgerMenu} ${burgerMenuOpen ? styles.navbar__burgerMenu_active : ''}`}
                onClick={() => setBurgerMenuOpen(prev => !prev)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={styles.navbar__wrapper}>
                <div className={`${styles.navbar__links} ${burgerMenuOpen ? styles.navbar__links_active : ''}`}>

                    <NavLink to={landingPage} className={styles.navbar__link}>
                        {`Clothes`}
                    </NavLink>
                    <NavLink to={landingPage} className={styles.navbar__link}>
                        {`Sneakers`}
                    </NavLink>
                    <NavLink to={landingPage} className={styles.navbar__link}>
                        {`Bags`}
                    </NavLink>
                    <NavLink to={landingPage} className={styles.navbar__link}>
                        {`Accessorize`}
                    </NavLink>
                </div>
                <button
                    onClick={btnPlay}
                    className={`${styles.navbar__button} ${btnAnimationPlay ? styles.btnPlayAnimation : ''}`}
                    disabled={btnAnimationPlay}
                >
                    <p>
                        {`BUY`}
                    </p>
                    <span>
                    </span>
                </button>

            </div>
        </div>
    );
};

export default NavBar;