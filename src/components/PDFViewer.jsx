import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { useEffect, useState } from 'react';

const PDFViewer = ({ fileUrl }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 735);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {(slots) => {
        const { Download, EnterFullScreen, Print, Zoom, ZoomIn, ZoomOut } =
          slots;
        return (
          <div className="flex w-full justify-center">
            <div className="flex items-center">
              <div>
                <ZoomOut />
              </div>
              <div>
                <Zoom />
              </div>
              <div>
                <ZoomIn />
              </div>
            </div>
            <div className="flex absolute right-2">
              <div>
                <EnterFullScreen />
              </div>
              <div>
                <Download />
              </div>
              <div>
                <Print />
              </div>
            </div>
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    sidebarTabs: () => [],
  });

  return (
    <div className="px-4 md:px-0">
      <Worker workerUrl="/pdfjs-dist/pdf.worker.min.js">
        <div className="h-[75vh]">
          <Viewer
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance]}
            theme={'dark'}
            defaultScale={isMobile ? 0.6 : 1.5}
          />
        </div>
      </Worker>
    </div>
  );
};

export default PDFViewer;
