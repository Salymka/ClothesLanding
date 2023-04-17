import React, {useEffect, useState} from 'react';
import BlueLine from "../../../svg/BlueLine/BlueLine";
import styles from './LandingPage.scss'
import {NavLink} from "react-router-dom";
import {landingPage} from "../router";
import AppleTag from "../../../svg/AppleTag/AppleTag";
import img from '../../../static/img_1.png'
import AndroidTag from "../../../svg/AndroidTag/AndroidTag";
import NavBar from "../../components/NavBar/NavBar";
import Container1 from "../../components/Container1/Container1";
import Container2 from "../../components/Container2/Container2";
const LandingPage = () => {


    return (
        <div className={styles.page}>
            <NavBar/>
            <Container1/>
            <Container2/>
        </div>
    );
};

export default LandingPage;