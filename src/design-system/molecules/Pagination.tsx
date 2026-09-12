import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) => {
  if (totalPages <= 1) return null;

  const pages: (number | string)[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  return (
    <nav
      aria-label="Pagination"
      className={`flex items-center justify-center gap-1 select-none ${className}`}
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 text-[#4A5568] hover:bg-[#F8FAFC] hover:text-[#173C62] disabled:opacity-30 disabled:pointer-events-none transition-colors border border-[#E5E7EB] rounded-none shadow-none cursor-pointer"
        aria-label="Previous Page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((p, idx) => {
        if (p === '...') {
          return (
            <span
              key={`ellipsis-${idx}`}
              className="w-9 h-9 flex items-center justify-center text-xs font-mono text-[#64748B]"
            >
              ...
            </span>
          );
        }

        const isCurrent = p === currentPage;

        return (
          <button
            type="button"
            key={`page-${p}`}
            onClick={() => onPageChange(Number(p))}
            aria-current={isCurrent ? 'page' : undefined}
            className={`w-9 h-9 text-xs font-mono font-semibold transition-colors border rounded-none shadow-none cursor-pointer ${
              isCurrent
                ? 'bg-[#173C62] text-white border-[#173C62]'
                : 'bg-white text-[#0B1320] border-[#E5E7EB] hover:bg-[#F8FAFC] hover:border-[#CBD5E1]'
            }`}
          >
            {p}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 text-[#4A5568] hover:bg-[#F8FAFC] hover:text-[#173C62] disabled:opacity-30 disabled:pointer-events-none transition-colors border border-[#E5E7EB] rounded-none shadow-none cursor-pointer"
        aria-label="Next Page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
