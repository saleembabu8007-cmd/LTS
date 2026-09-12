import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  pageSize?: number;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  pageSize = 12,
  className = '',
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = totalItems ? Math.min(currentPage * pageSize, totalItems) : currentPage * pageSize;

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 py-4 ${className}`}>
      {totalItems !== undefined && (
        <span className="text-xs text-slate-500 font-mono">
          SHOWING <span className="font-bold text-slate-900">{startItem}–{endItem}</span> OF{' '}
          <span className="font-bold text-slate-900">{totalItems}</span> SPECIFICATIONS
        </span>
      )}

      <div className="flex items-center border border-slate-300 divide-x divide-slate-300 bg-white">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-2.5 text-slate-600 hover:bg-slate-100 hover:text-[#173C62] disabled:opacity-30 disabled:pointer-events-none transition-colors rounded-none"
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {pages.map((p) => {
          const isCurrent = p === currentPage;
          return (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              aria-current={isCurrent ? 'page' : undefined}
              className={`w-9 h-9 text-xs font-mono font-semibold transition-colors rounded-none ${
                isCurrent
                  ? 'bg-[#173C62] text-white'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-[#173C62]'
              }`}
            >
              {p}
            </button>
          );
        })}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-2.5 text-slate-600 hover:bg-slate-100 hover:text-[#173C62] disabled:opacity-30 disabled:pointer-events-none transition-colors rounded-none"
          aria-label="Next Page"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
