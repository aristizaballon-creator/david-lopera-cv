import React, { useState } from 'react';

interface Props {
  videoId: string;
  title: string;
  /** true = video vertical/short (9:16). false/omitido = horizontal (16:9). */
  vertical?: boolean;
}

export const YouTubePlayer: React.FC<Props> = ({ videoId, title, vertical = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const aspectClass = vertical ? 'aspect-[9/16]' : 'aspect-video';

  return (
    <div className={`relative ${aspectClass} w-full overflow-hidden bg-bg-card border border-cream/10`}>
      {!isPlaying ? (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group relative w-full h-full flex items-center justify-center focus:outline-none cursor-pointer"
        >
          <img
            src={thumbnailUrl}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute flex items-center justify-center">
            <div className="w-14 h-14 bg-orange group-hover:bg-orange-light rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110">
              <svg className="w-6 h-6 text-cream translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      )}
    </div>
  );
};
