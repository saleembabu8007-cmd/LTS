import React from 'react';
import { Tag } from '../atoms/Tag';

export interface NewsMetaProps {
  date: string;
  category: string;
  readTime?: string;
  author?: string;
  className?: string;
}

export const NewsMeta: React.FC<NewsMetaProps> = ({
  date,
  category,
  readTime,
  author,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-3 text-xs text-[#64748B] ${className}`}>
      <Tag variant="neutral" shape="square">
        {category}
      </Tag>
      <span className="font-mono text-[11px]">{date}</span>
      {readTime && (
        <>
          <span className="text-slate-300">&bull;</span>
          <span className="font-mono text-[11px]">{readTime}</span>
        </>
      )}
      {author && (
        <>
          <span className="text-slate-300">&bull;</span>
          <span>{author}</span>
        </>
      )}
    </div>
  );
};
