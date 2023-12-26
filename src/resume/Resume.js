import React from 'react';
import styles from './resume.module.css'; 
import ResumeRender from './ResumeRender.js';

export default function Resume(){
    return(
        <div>
            <div className={styles.barrier}></div>
            <ResumeRender />
        </div>
    );
}
