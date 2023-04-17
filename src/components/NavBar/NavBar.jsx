import React from 'react';
import styles from './NavBar.scss'
import {NavLink} from "react-router-dom";
import {landingPage} from "../../pages/router";
const NavBar = () => {
    return (
        <div className={`${styles.navbar}`}>
            <div className={styles.navbar__logo}>
                {`LANDING`}
            </div>
            <div className={styles.navbar__wrapper}>
                <div className={styles.navbar__links}>
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
                <button className={styles.navbar__button}>
                    <p>
                        {`BUY`}
                    </p>
                </button>

            </div>
        </div>
    );
};

export default NavBar;