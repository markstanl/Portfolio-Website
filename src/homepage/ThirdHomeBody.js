import React from 'react';
import styles from './body.module.css';
import mark3 from '../images/markpic3.jpg';
import {bodytext} from '../javascriptarrays/bodytext.js';

export default function ThirdHomeBody({windowWidth}){


    return(
        <div className={styles.bigBody}>
            <div className={styles.circle}></div>
            <div className={styles.thirdTextBox}>
                <h1>{bodytext[2].title}</h1>
                <div className={styles.invisibleBarrier}></div>
                <ul style={windowWidth < 1500 ? {width: '48%'} : {width: '60%'}}>
                    <li>{bodytext[2].l1}</li>
                    <li>{bodytext[2].l2}</li>
                    {bodytext[2].l3 && <li>{bodytext[2].l3}</li>}
                    {bodytext[2].l4 && <li>{bodytext[2].l4}</li>}
                </ul>
            </div> 
            <img src={mark3} className={styles.mark3} alt='mark intellectually standing by a tree'></img>
        </div>
    );
}