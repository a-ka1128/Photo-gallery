import React from 'react';

const PhotoCard = ({ photo, onClick }) => {
  return (
    <div 
      onClick={() => onClick(photo)}
      className="group relative rounded-xl overflow-hidden bg-gray-100 aspect-square cursor-pointer"
    >
      <img 
        src={photo.url} 
        alt={photo.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default PhotoCard;