import React from 'react';

const SkeletonCard = ({ height = 'h-48', className = '' }) => {
  return (
    <div className={`bg-gray-100 rounded-2xl overflow-hidden ${className}`}>
      <div className={`${height} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-gradient"></div>
      </div>
      <div className="p-6 space-y-4">
        <div className="h-4 bg-gray-200 rounded-lg animate-shimmer"></div>
        <div className="h-3 bg-gray-200 rounded-lg w-3/4 animate-shimmer"></div>
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-200 rounded-lg w-20 animate-shimmer"></div>
          <div className="h-8 bg-gray-200 rounded-lg w-24 animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
