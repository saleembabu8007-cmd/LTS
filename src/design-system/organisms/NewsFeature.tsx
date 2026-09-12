import React from 'react';
import { Container } from '../structures/Container';
import { Image } from '../atoms/Image';
import { Tag } from '../atoms/Tag';
import { TextLink } from '../atoms/TextLink';

export interface NewsFeatureProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime?: string;
  imageSrc: string;
  imageAlt: string;
  onRead?: () => void;
  className?: string;
}

export const NewsFeature: React.FC<NewsFeatureProps> = ({
  title,
  excerpt,
  date,
  category,
  readTime = '4 min read',
  imageSrc,
  imageAlt,
  onRead,
  className = '',
}) => {
  return (
    <article className={`py-12 border-b border-[#E5E7EB] ${className}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Tag variant="brand" shape="pill">
                {category}
              </Tag>
              <span className="text-xs font-mono text-[#64748B]">{date}</span>
              <span className="text-xs font-mono text-[#64748B]">&bull;</span>
              <span className="text-xs font-mono text-[#64748B]">{readTime}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#0B1320] tracking-tight leading-snug">
              {title}
            </h3>

            <p className="text-sm text-[#4A5568] leading-relaxed">
              {excerpt}
            </p>

            <div className="pt-2">
              <TextLink arrow onClick={onRead}>
                Read Technical Analysis
              </TextLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Image
              src={imageSrc}
              alt={imageAlt}
              aspectRatio="16/10"
              radius="image"
            />
          </div>
        </div>
      </Container>
    </article>
  );
};
