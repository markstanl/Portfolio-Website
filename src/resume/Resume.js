import React from 'react';
import styles from './resume.module.css'; 
import ResumeRender from './ResumeRender.js';
import ResumeDownload from './ResumeDownload.js';

export default function Resume({isMobile, windowWidth}){
    return(
        <div>
            <div className={styles.barrier}></div> {/* This barrier is used as a box that covers the size of the navbar */}
            <ResumeRender isMobile={isMobile} windowWidth={windowWidth} />
            <ResumeDownload />
        </div>
    );
}
