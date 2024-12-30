import React, { useState } from 'react';
import axios from 'axios';

const Sandbox = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const response = await uploadImageFunc(selectedFile);
        setUploadStatus('Upload successful!');
        console.log(response);
      } catch (error) {
        setUploadStatus('Upload failed.');
        console.error(error);
      }
    }
  };

  return (
    <div>
      <h1>Sandbox</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {uploadStatus && <p>{uploadStatus}</p>}
      <img src="file://192.168.88.180/onAim/Avto/images/63bd2a0d-1565-48bf-9ae9-26e3e0da6a5c.png" alt='test' /> 
    </div>
  );
};

export const uploadImageFunc = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("File", file);
    const res = await axios.post(
      "https://192.168.10.42/api/File/UploadImage",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZW1haWwiOiJzdXBlcmFkbWluQHRlc3QuY29tIiwianRpIjoiYzIxYjJhZTgtODZmYy00MjQ3LTk2Y2YtMTBkZDlhNGMzYzRiIiwiaWF0IjoxNzM1NDgwODY2LCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBlclJvbGUiLCJuYmYiOjE3MzU0ODA4NjUsImV4cCI6MTczNTU2NzI2NSwiaXNzIjoib25haW0tYWRtaW4tYXBpIiwiYXVkIjoiKiJ9.rive3utyQCLR1HWFMRZIpasd9uBr-gcUH3LKjdE_yw4",
        },
      }
    );
    return res;
  } catch (err: any) {
    throw new Error(err.message || String(err));
  }
};

export default Sandbox;