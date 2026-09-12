import React, { useState, useRef } from 'react';
import { AspectRatio, ImageRadius } from './Image';

export interface VideoProps {
  src: string;
  poster?: string;
  title?: string;
  aspectRatio?: AspectRatio;
  radius?: ImageRadius;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
}

export const Video: React.FC<VideoProps> = ({
  src,
  poster,
  title,
  aspectRatio = '16/9',
  radius = 'image',
  autoPlay = false,
  muted = true,
  loop = true,
  controls = false,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);

  const aspectClasses: Record<AspectRatio, string> = {
    '16/9': 'aspect-[16/9]',
    '16/10': 'aspect-[16/10]',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
    auto: 'aspect-auto',
  };

  const radiusClasses: Record<ImageRadius, string> = {
    none: 'rounded-none',
    surface: 'rounded-[24px]',
    image: 'rounded-[28px]',
    imageLarge: 'rounded-[32px]',
    feature: 'rounded-[36px]',
    pill: 'rounded-full',
  };

  const currentRadius = radiusClasses[radius];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#0B1C2F] ${currentRadius} ${aspectClasses[aspectRatio]} ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        title={title}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        className={`w-full h-full object-cover object-center ${currentRadius}`}
      />

      {!controls && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group cursor-pointer"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <div className="w-14 h-14 rounded-full bg-white/90 text-[#173C62] flex items-center justify-center shadow-none transition-transform duration-[180ms] ease-out group-hover:scale-[1.04]">
            {isPlaying ? (
              <span className="text-sm font-bold">❚❚</span>
            ) : (
              <span className="text-sm font-bold ml-0.5">▶</span>
            )}
          </div>
        </button>
      )}
    </div>
  );
};
