import React from 'react';
import styles from './notfound.module.css';

export default function PageNotFound(){

    return(
        <div>
            <div className={styles.barrier}></div>
            <div className={styles.notFoundBox}>
                <h1>PAGE NOT FOUND</h1>
                <a href='/'> Let's go back home, shall we?</a>
            </div>
        </div>
    )
}