import React from 'react';
import styles from './resume.module.css';
import pdfURL from './Resume.pdf'; 
import pngImg from './downloadIcon.png';

export default function ResumeDownload() {
    return(
        <div>
            <div className={styles.outerBox}>
                <a href={pdfURL} download styles='flex' className={styles.downloadText}>
                <img src={pngImg} className={styles.downloadImg} alt=''></img>
                    Download Resume
                </a>
            </div>
        </div>
    );
}