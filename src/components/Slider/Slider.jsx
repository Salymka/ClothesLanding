import React, {useState} from 'react';
import styles from './Slider.scss'

const PARENT_ELEMENT_WIDTH = 100 // 100%
const Slider = () => {
    const images = importAll(require.context('../../../static', false, /\.(png|jpe?g|svg)$/))
    const [mudslidePosition, setMudslidePosition] = useState(setPosition(3));
    const sliderShiftStyle = `${mudslidePosition}%`
    function importAll(r) {
        return r.keys().map(r);
    }
    function firstPosition() {
        return - PARENT_ELEMENT_WIDTH / images.length / 2
    }
    function lastPosition() {
        return - PARENT_ELEMENT_WIDTH * (2 * images.length - 1) / (2 * images.length)
    }

    function setPosition(position) {
        if (position <= 0 || position > images.length) {
            return firstPosition()
        }
        return - PARENT_ELEMENT_WIDTH * (2 * position - 1) / (2 * images.length)
    }

    const nextSlide = () => {
        if (Math.round(+mudslidePosition) === Math.round(lastPosition())) {
            return setMudslidePosition(firstPosition())
        }
        setMudslidePosition(currentPosition => currentPosition - PARENT_ELEMENT_WIDTH / images.length)
    }
    const lastSlide = () => {
        if (Math.round(+mudslidePosition) === Math.round(firstPosition())) {
            return setMudslidePosition(lastPosition())
        }
        setMudslidePosition(currentPosition => currentPosition + PARENT_ELEMENT_WIDTH / images.length)
    }

    return (
        <div className={styles.slider}>
            <button onClick={nextSlide} className={styles.btn__next}/>
            <button onClick={lastSlide} className={styles.btn__before}/>
            <div className={styles.slider__row} >
                <div className={styles.slider__stream}>
                    <div className={styles.shift} style={{left: sliderShiftStyle}}>
                        {
                            images.map((img, index) =>
                                <div className={styles.slider__item} key={index}> {/*only img without logic*/}
                                    <div className={styles.slider__item_hidden}>
                                        <img src={img.default} alt={'img'}/>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;