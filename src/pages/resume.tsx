import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ResumePage = () => {
  return (
    <iframe
      src="/resume.pdf"
      frameBorder="0"
      className="w-full h-screen"
    ></iframe>
  );
};

export default ResumePage;
