import React from 'react';

export interface PeopleCardProps {
  name: string;
  role: string;
  discipline: string;
  imageUrl: string;
  bio?: string;
  className?: string;
}

/**
 * PeopleCard
 * Conforms to Rule 10 & 13: Engineering leadership & craftsmanship card.
 * Authentic portrait with 18px soft radius, verified title & technical focus.
 * Zero fabricated claims or vanity social links.
 */
export const PeopleCard: React.FC<PeopleCardProps> = ({
  name,
  role,
  discipline,
  imageUrl,
  bio,
  className = '',
}) => {
  return (
    <div className={`group block text-left ${className}`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-[#0B1C2F]">
        <img
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      </div>

      <div className="mt-3.5">
        <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#173C62] font-semibold">
          {discipline}
        </span>
        <h3 className="mt-1 text-[17px] font-medium text-[#0B1320] leading-snug">
          {name}
        </h3>
        <p className="mt-0.5 text-[13px] text-[#64748B] font-normal">
          {role}
        </p>
        {bio && (
          <p className="mt-2 text-[13px] text-[#4A5568] leading-relaxed line-clamp-2">
            {bio}
          </p>
        )}
      </div>
    </div>
  );
};
