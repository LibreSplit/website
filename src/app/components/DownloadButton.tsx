'use client';

import React from 'react';
import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  fileUrl: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileUrl }) => {
  const downloadFileFromUrl = (url: string) => {
    const fileName = url.split('/').pop() || '';
    const aTag = document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download', fileName);    
    window.open(url, '_blank');
  };

  return (
    <Button 
      className="bg-black hover:bg-[#3b3b3b] text-white hover:text-white" 
      onClick={() => downloadFileFromUrl(fileUrl)}
    >
      <u>Download</u>
    </Button>
  );
};

export default DownloadButton;