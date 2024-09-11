
import { useState } from 'react';

const RatingStars = () => {
  const [hoveredStar, setHoveredStar] = useState(null);
  const [activeStar, setActiveStar] = useState(null);

  const handleMouseEnter = (index) => setHoveredStar(index);
  const handleMouseLeave = () => setHoveredStar(null);
  const handleClick = (index) => setActiveStar(index);

  
  return (
    <div className="flex gap-2 mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className="relative"
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-9 h-9 ${hoveredStar >= star || activeStar >= star ? 'text-yellow-400' : 'text-gray-400'}`}
          >
            <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"></path>
          </svg>
        </button>
      ))}
    </div>
  );
};

export default RatingStars;
