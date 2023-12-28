import React from 'react';
import styles from '../body.module.css';
import mark1 from '../images/markpic6.jpg';
import {bodytext} from '../javascriptarrays/bodytext.js';

export default function SecondHomeBody(){

    return(
            <div className={styles.body}>
                <div className = {styles.secondTextBox}>
                    <div className={styles.secondTextBoxText}>
                        <h1>{bodytext[1].title}</h1>
                        <ul>
                            <li>{bodytext[1].l1}</li>
                            <li>{bodytext[1].l2}</li>
                        </ul>
                    </div>
                    <img src={mark1} alt='mark1' className={styles.mark2}></img>
                </div>
            
            </div>
    )
}