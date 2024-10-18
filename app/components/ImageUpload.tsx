'use client';

import React, { useState, useRef } from 'react';
import { Button } from "@nextui-org/react";

const ImageUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [responseMessage, setResponseMessage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setResponseMessage("");
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file first');
      return;
    }

    try {
      const imageConverted = await fileToBase64(file);
      const res = await fetch('/api/costumeRoast', {
        method: 'POST',
        body: JSON.stringify({ fileType: imageConverted.metadata, image: imageConverted.data }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      const data = await res.json();
      console.log(data.message.text);
      setResponseMessage(data.message.text);
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('File upload failed');
    }
  };

  return (
    <div>
      <div className='flex justify-center'>
        <form className='flex flex-col gap-4 p-4' onSubmit={handleSubmit}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }} // Hide the default input
          />
          <Button 
            className='bg-gradient-to-tl from-sky-500 to-blue-800 font-semibold text-lg max-w-80' 
            onClick={handleFileSelect}
          >
            Add Picture
          </Button>
          <Button 
            className='bg-gradient-to-tl from-sky-500 to-blue-800 font-semibold text-lg max-w-80' 
            type="submit" 
            disabled={!file} // Disable the button until a file is selected
          >
            Get Roasted!
          </Button>
        </form>
        
      </div>
      <div className='flex justify-center'>
       {responseMessage && <p className='text-center p-8'>{responseMessage}</p>}
      </div>
    </div>

  );
};

export default ImageUpload;

const fileToBase64 = async (file: File): Promise<{metadata: string, data: string}> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file); // Read the file as a data URL
    reader.onload = () => {
      const base64String = reader.result as string;
      resolve({metadata: base64String.split(',')[0].split(';')[0].split(':')[1], data: base64String.split(',')[1]}); // Return only the base64 part (without the metadata)
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};
