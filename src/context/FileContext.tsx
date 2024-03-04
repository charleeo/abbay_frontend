// FileUploadContext.tsx
import React, { createContext, useContext, ReactNode, useState, useCallback } from 'react';

interface FileUploadContextProps {
  children: ReactNode;
}

interface FileUploadContextValue {
  uploadedFiles: File[];
  uploadFile: (file: File) => void;
}

const FileUploadContext = createContext<FileUploadContextValue | undefined>(undefined);

export const FileUploadProvider: React.FC<FileUploadContextProps> = ({ children }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const uploadFile = useCallback((file: File) => {
    setUploadedFiles((prevFiles) => [...prevFiles, file]);
  }, []);

  const value: FileUploadContextValue = {
    uploadedFiles,
    uploadFile,
  };

  return (
    <FileUploadContext.Provider value={value}>
      {children}
    </FileUploadContext.Provider>
  );
};

export const useFileUpload = (): FileUploadContextValue => {
  const context = useContext(FileUploadContext);
  if (!context) {
    throw new Error('useFileUpload must be used within a FileUploadProvider');
  }
  return context;
};
