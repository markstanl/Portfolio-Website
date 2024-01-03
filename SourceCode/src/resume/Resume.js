import React from 'react';
import styles from './resume.module.css'; 
import ResumeRender from './ResumeRender.js';
import ResumeDownload from './ResumeDownload.js';

export default function Resume(){
    return(
        <div>
            <div className={styles.barrier}></div> {/* This barrier is used as a box that covers the size of the navbar */}
            <ResumeRender />
            <ResumeDownload />
        </div>
    );
}
