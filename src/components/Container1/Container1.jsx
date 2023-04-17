import React, {useEffect, useState} from 'react';
import styles from './Container1.scss'
import BlueLine from "../../../svg/BlueLine/BlueLine";
import Platforms from "../Platforms/Platforms";
const Container1 = () => {
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
        }, 8000)
    }, [currentImgIndex])

    return (
        <div className={styles.container1}>
            <div className={styles.animated__line}>
                <BlueLine/>
            </div>
            <div className={styles.container1__content}>
                <Platforms/>
                <div className={`${styles.container1__text} ${styles.container1__text_animation}`}>
                    CHOOSE YOUR WINTER
                    <label className={`${styles.inner__text_transform}`}>
                        <label className={styles.inner__text}>
                            LOOK
                        </label>
                        <label className={styles.inner__text_appendix}>
                            {`*`}
                        </label>
                    </label>
                    <p>
                        APPAREL
                    </p>
                </div>
                <h1 className={styles.background__mask} style={backgroundTextImg}>
                    {`CR\nEA\nTE`}
                </h1>
            </div>
        </div>
    );
};

export default Container1;