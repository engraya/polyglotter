import React from "react";
import { PiPaperclipLight } from "react-icons/pi";

const FileUpload = ({ handleFileUpload }) => (
  <label htmlFor="file-upload" className="cursor-pointer">
    <PiPaperclipLight color="white" size={21} />
    <input
      type="file"
      id="file-upload"
      onChange={handleFileUpload}
      className="hidden"
    />
  </label>
);

export default FileUpload;
