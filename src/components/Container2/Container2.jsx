import React from 'react';
import styles from './Container2.scss'
import Slider from "../Slider/Slider";
const Container2 = () => {
    return (
        <div className={`${styles.container2}`}>
            <h2 className={styles.container2_title}>
                {`CHOOSE LOOKS`}
            </h2>
            <Slider/>
            <h2 className={styles.container2_title}>
                {`MORE ABOUT US`}
            </h2>
            <div className={styles.container2__description}>
                <p>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim sed libero commodo efficitur. Suspendisse et lorem ac neque dictum pellentesque nec sit amet nisl. Fusce rutrum quis purus ut pretium. Vivamus ornare mauris non ligula egestas, accumsan faucibus quam sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus felis, porttitor consequat quam. Morbi gravida semper mattis. Nunc ultrices justo in pulvinar convallis. Curabitur dapibus ut tellus eu condimentum. Morbi vitae convallis purus, ac finibus ipsum.`}
                </p>
                <p>
                    {`Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu eu, eleifend vestibulum tortor. Duis facilisis, est et aliquam dapibus, urna mauris sagittis mi, et mattis metus magna vel tellus. Phasellus sit amet volutpat ante, ut condimentum lorem. Quisque auctor sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam sem. Donec a nibh molestie, aliquam libero maximus, feugiat velit. Curabitur ac accumsan velit. In hac habitasse platea dictumst.`}
                </p>
            </div>

        </div>
    );
};

export default Container2;