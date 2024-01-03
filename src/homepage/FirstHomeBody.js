import React from 'react';
import styles from './body.module.css';
import mark1 from '../images/markpic5.jpg';
import {bodytext} from '../javascriptarrays/bodytext.js';

export default function FirstHomeBody(){

    return(
            <div className={styles.body}>
                <img src = {mark1} className={styles.mark1} alt='Mark'/>
                <div className = {styles.textBox}>
                    <h1>{bodytext[0].title}</h1>
                    <ul>
                        <li>{bodytext[0].l1}</li>
                        <li>{bodytext[0].l2}</li>
                        <li>{bodytext[0].l3}</li>
                    </ul>
                </div>
            </div>
    )
}