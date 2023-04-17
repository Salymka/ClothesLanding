import React from 'react';
import AppleTag from "../../../svg/AppleTag/AppleTag";
import AndroidTag from "../../../svg/AndroidTag/AndroidTag";
import styles from './Platforms.scss'
const Platforms = () => {
    return (
        <div className={styles.platforms}>
            <div className={styles.platforms__icons}>
                <div className={styles.platforms__apple}>
                    <AppleTag/>
                </div>
                <div className={styles.platforms__android}>
                    <AndroidTag/>
                </div>
            </div>
            <p className={styles.platforms__description}>
                {`App available`}
            </p>
        </div>
    );
};

export default Platforms;