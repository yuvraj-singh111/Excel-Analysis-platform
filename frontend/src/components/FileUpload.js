import React, { useState } from "react";
import axios from "axios";
import { AiOutlineCloudUpload } from "react-icons/ai";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData);
      if (res.data.data) {
        setMessage("✅ File uploaded and processed successfully!");
        console.log("Parsed Data:", res.data.data);
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to upload the file.");
    }
  };

  return (
    <div className="space-y-4 text-center">
      <input type="file" onChange={handleFileChange} className="border p-2" />
      <button
        onClick={handleUpload}
        className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        <AiOutlineCloudUpload size={20} />
        Upload File
      </button>
      {message && <p className="mt-4 text-blue-800 font-medium">{message}</p>}
    </div>
  );
}

export default FileUpload;
