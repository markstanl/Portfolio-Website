import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import pdfURL from './Resume.pdf'; 

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumeRender() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '110vh', overflow: 'hidden', marginLeft: '5%' }}>
            <Document file={pdfURL}>
                <Page pageNumber={1} style={{ backgroundColor: 'tomato', width: '100%', height: '200%' }} />
            </Document>
        </div>
    );
};
