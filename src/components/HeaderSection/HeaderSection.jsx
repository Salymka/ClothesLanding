import React, {useEffect, useState} from 'react';
import styles from './HeaderSection.scss'
import BlueLine from "../../../svg/BlueLine/BlueLine";
import Platforms from "../Platforms/Platforms";

const TIMEOUT = 8000;
const HeaderSection = () => {
    const images = importAll(require.context('../../../static', false, /\.(png|jpe?g|svg)$/))
    const [currentImgIndex, setCurrentImgIndex] = useState(0)
    const backgroundTextImg = {backgroundImage: `url('${images[currentImgIndex].default}')`}
    function importAll(r) {
        return r.keys().map(r);
    }

    useEffect(() => {
        setTimeout(() => {
            if (currentImgIndex === images.length - 1) {
                setCurrentImgIndex(0)
            }
            setCurrentImgIndex(flag => flag + 1)
        }, TIMEOUT)
    }, [currentImgIndex])

    return (
        <div className={styles.headerSection}>
            <div className={styles.animated__line}>
                <BlueLine/>
            </div>
            <div className={styles.headerSection__content}>
                <Platforms/>
                <h1 className={styles.background__mask} style={backgroundTextImg}>
                    {`CR\nEA\nTE`}
                </h1>
                <div className={`${styles.headerSection__text} ${styles.headerSection__text_animation}`}>
                    CHOOSE YOUR WINTER
                    <span className={`${styles.inner__text_transform}`}>
                        <span className={styles.inner__text}>
                            LOOK
                        </span>
                        <span className={styles.inner__text_appendix}>
                            {`*`}
                        </span>
                    </span>
                    <p>
                        APPAREL
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;