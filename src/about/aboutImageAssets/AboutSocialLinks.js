import React, {useState} from 'react';
import styles from '../about.module.css';
import git from './GithubCat.png';
import gitHover from './GithubCatHover.png';
import linkedin from './linkedin.png';
import linkedinHover from './LinkedinHover.png';
import email from './Email.png';
import emailHover from './EmailHover.png';

export default function AboutSocialLinks({isMobile}) {
    const [gitHoverState, setGitHover] = useState(false);
    const [linkedinHoverState, setLinkedinHover] = useState(false);
    const [emailHoverState, setEmailHover] = useState(false);

    return(
        <div className={isMobile? styles.aboutSocialLinksMobile : styles.aboutSocialLinks}>
            <a href="https://www.linkedin.com/in/mark-stanley-ba6996282/" 
            target="_blank" 
            rel="noopener noreferrer" 
            onMouseEnter={() => setLinkedinHover(true)}
            onMouseLeave={() => setLinkedinHover(false)}
            >
                <img src={linkedinHoverState ? linkedinHover : linkedin} alt="Linkedin" className={styles.iconStyle}/>
            </a>
            <a href="https://github.com/markstanl"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setGitHover(true)}
            onMouseLeave={() => setGitHover(false)}>
                <img src={gitHoverState ? gitHover : git} alt="Github" className={styles.iconStyle}/>
            </a>
            <a href="mailto:markgstanley1@gmail.com">
                <img 
                    src={emailHoverState ? emailHover : email} 
                    alt="Email" 
                    className={styles.iconStyle}
                    onMouseEnter={() => setEmailHover(true)}
                    onMouseLeave={() => setEmailHover(false)}
                />
            </a>
        </div>
    );
}