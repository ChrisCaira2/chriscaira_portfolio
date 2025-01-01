// components/PDFViewer.js
import { useState } from 'react';

const PDFViewer = ({ pdfUrl = '/resume.png' }) => {
    const [showPDF, setShowPDF] = useState(false);

    const handleButtonClick = () => {
        setShowPDF(true);
    };

    const handleCloseClick = () => {
        setShowPDF(false);
    };

    return (

        <div className='link link--icon'>
            <button onClick={handleButtonClick}>
                View Resume
            </button>
            {showPDF && (
                <div className="pdf-viewer">
                    <img src={pdfUrl} alt='resume' style={{ maxWidth: '100vh', maxHeight: '90vh', objectFit: 'contain' }}></img>
                    {/* <object data={pdfUrl} title="PDF Viewer" type='image/png'></object> */}
                    <button className="close-button" onClick={handleCloseClick}>Close</button>
                </div>
            )}
        </div>

    );
};

export default PDFViewer;