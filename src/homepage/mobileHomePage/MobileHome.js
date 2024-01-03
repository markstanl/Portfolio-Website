import React from 'react';
import styles from './mobile.module.css';
import mark1 from '../../images/markpic5.jpg';
import mark2 from '../../images/markpic6.jpg';
import mark3 from '../../images/markpic3.jpg';
import {bodytext} from '../../javascriptarrays/bodytext.js';

export default function MobileHome() {

    return(
        <>
            <div className={styles.invisibleBarrier}></div>
            <img src = {mark1} className={styles.mark1} alt='Mark'/>
            <div className = {styles.body}>
                <h1>{bodytext[0].title}</h1>
                <ul>
                    <li>{bodytext[0].l1}</li>
                    <li>{bodytext[0].l2}</li>
                    <li>{bodytext[0].l3}</li>
                </ul>
            </div>
            <img src = {mark2} className={styles.mark1} alt='Mark'/>
            <div className = {styles.body}>
                <h1>{bodytext[1].title}</h1>
                <ul>
                    <li>{bodytext[1].l1}</li>
                    <li>{bodytext[1].l2}</li>
                    <li>{bodytext[1].l3}</li>
                </ul>
            </div>
            <img src = {mark3} className={styles.mark1} alt='Mark'/>
            <div className = {styles.body}>
                <h1>{bodytext[2].title}</h1>
                <ul>
                    <li>{bodytext[2].l1}</li>
                    <li>{bodytext[2].l2}</li>
                    <li>{bodytext[2].l3}</li>
                </ul>
            </div>
        </>
    );
}