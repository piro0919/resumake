import { TCreatedPdf } from 'pdfmake/build/pdfmake';
import React from 'react';

export interface ResumeIframeProps {
  pdf?: TCreatedPdf;
}

const ResumeIframe: React.FC<ResumeIframeProps> = ({ pdf }) => {
  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    if (!pdf) {
      return;
    }

    pdf.getDataUrl(result => {
      setUrl(result);
    });
  }, [pdf, setUrl]);

  return (
    <iframe
      src={url}
      style={{
        height: '100%',
        width: '100%'
      }}
      title="resume"
    />
  );
};

export default ResumeIframe;
