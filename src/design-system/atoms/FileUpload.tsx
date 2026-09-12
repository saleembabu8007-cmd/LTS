import React, { useRef, useState } from 'react';
import { Upload, FileText, X } from 'lucide-react';

export interface FileUploadProps {
  label: string;
  id: string;
  hint?: string;
  acceptedFormats?: string;
  maxSizeMb?: number;
  onFileSelect?: (file: File | null) => void;
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  id,
  hint = 'PDF, DWG, DXF, XLSX up to 25MB',
  acceptedFormats = '.pdf,.dwg,.dxf,.xlsx,.zip',
  maxSizeMb = 25,
  onFileSelect,
  className = '',
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      onFileSelect?.(file);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    onFileSelect?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`space-y-1.5 w-full ${className}`}>
      <label
        htmlFor={id}
        className="block text-xs font-sans font-semibold uppercase tracking-[0.08em] text-[#0B1320]"
      >
        {label}
      </label>

      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          handleFiles(e.dataTransfer.files);
        }}
        className={`border border-dashed transition-colors p-4 sm:p-5 text-center cursor-pointer rounded-[12px] shadow-none ${
          dragActive
            ? 'border-[#173C62] bg-[#EDF3F9]'
            : 'border-[#E5E7EB] bg-[#F8FAFC] hover:border-[#173C62] hover:bg-slate-50'
        }`}
      >
        <input
          ref={fileInputRef}
          id={id}
          type="file"
          accept={acceptedFormats}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        {selectedFile ? (
          <div className="flex items-center justify-between bg-white border border-[#E5E7EB] p-3 rounded-[12px]">
            <div className="flex items-center gap-3 truncate text-left">
              <div className="w-8 h-8 rounded-[8px] bg-[#EDF3F9] text-[#173C62] flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-xs font-medium text-[#0B1320] truncate">{selectedFile.name}</p>
                <p className="text-[10px] text-[#64748B] font-mono">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleRemove}
              className="p-1 hover:bg-slate-100 rounded-[6px] text-[#64748B] hover:text-[#0B1320]"
              aria-label="Remove uploaded file"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-[8px] bg-white border border-[#E5E7EB] text-[#173C62] mx-auto flex items-center justify-center">
              <Upload className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-medium text-[#0B1320]">
                Click to attach engineering tender drawings or drag &amp; drop
              </p>
              <p className="text-[10.5px] text-[#64748B] font-mono mt-0.5">{hint}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
