import React from 'react';
import styles from './resume.module.css';
import pngImg from './downloadIcon.png';

const pdfURL = process.env.PUBLIC_URL + '/Resume.pdf';

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