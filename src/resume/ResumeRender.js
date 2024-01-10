import React, {useState, useEffect} from 'react';
import ResumePNG from './ResumePNG.png';
const pdfURL = process.env.PUBLIC_URL + '/Resume.pdf';

export default function ResumeRender({isMobile, windowWidth}) {

    /* This file contains my attempt at using react-pdf. Everything was able to load in
    the local host, mobile and web version, but once deployed it failed to load.
    The code will remain, but I just converted it into a PNG */

    const [height, setHeight] = useState(isMobile ? windowWidth/0.8*8.5/10 : 880);

    useEffect(() => {
        setHeight(isMobile ? windowWidth/0.8*8.5/10 : 880);
    }, [windowWidth]);


    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: `${height}px`, width: `${isMobile? windowWidth*.8 : 680}px`,overflow: 'hidden', marginLeft: 'auto', marginRight: 'auto'}}>
            {/*<Document file={pdfURL}>
                <Page pageNumber={1} scale={isMobile? windowWidth/700 : 1} />
            </Document>*/}
            <img src={ResumePNG  } alt="Resume" style={{width: '100%', height: '100%'}}/>
        </div>
    );
};
