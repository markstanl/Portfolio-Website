import React, {useState, useEffect} from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import pdfURL from './Resume.pdf'; 

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumeRender({isMobile, windowWidth}) {

    const [height, setHeight] = useState(isMobile ? windowWidth/0.8*8.5/10 : 110);

    useEffect(() => {
        setHeight(isMobile ? windowWidth/0.8*8.5/10 : 110);
    }, [windowWidth]);


    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: `${height}px`,overflow: 'hidden', marginLeft: 'auto', marginRight: 'auto'}}>
            <Document file={pdfURL}>
                <Page pageNumber={1} scale={isMobile? windowWidth/700 : 1} />
            </Document>
        </div>
    );
};
