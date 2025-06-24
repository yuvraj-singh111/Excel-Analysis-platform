import React from "react";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Excel Analysis Platform</h1>
        <FileUpload />
      </div>
    </div>
  );
}

export default App;
