import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/full-screen/lib/styles/index.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

const PDFViewer = ({ fileUrl }) => {
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
    <Worker workerUrl="/pdfjs-dist/pdf.worker.min.js">
      <div className="h-[75vh]">
        <Viewer
          fileUrl={fileUrl}
          plugins={[defaultLayoutPluginInstance]}
          theme={'dark'}
        />
      </div>
    </Worker>
  );
};

export default PDFViewer;
