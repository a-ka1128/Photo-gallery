import React from 'react';
import { X, Share2, Check } from 'lucide-react';

const PhotoModal = ({ photo, onClose, onShare, isCopied }) => {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row">
        <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full"><X size={20} /></button>

        <div className="flex-1 bg-black flex items-center justify-center min-h-[40vh]">
          <img src={photo.url} alt={photo.title} className="max-h-[85vh] w-full object-contain" />
        </div>

        <div className="w-full md:w-[350px] flex flex-col bg-white border-l border-gray-100">
          <div className="p-6 border-b border-gray-50 flex items-center space-x-3">
            {/* from-purple -> from-blue */}
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 p-[2px]">
               <img src="/src/assets/profile.png" className="w-full h-full rounded-full object-cover border border-white" alt="Profile" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Moon Haram</h3>
              <p className="text-xs text-gray-500">Seoul, Korea</p>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            <h2 className="font-bold text-xl mb-3">{photo.title}</h2>
            {/* whitespace-pre-wrap 클래스를 추가하면 \n 이 실제 줄바꿈으로 작동합니다 */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 whitespace-pre-wrap">
            {photo.desc}
            </p>
          </div>

          <div className="p-6 border-t border-gray-50 relative">
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">{photo.date}</span>
              {/* hover:text-purple -> hover:text-blue, bg-purple -> bg-blue */}
              <button onClick={onShare} className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 px-4 py-2 rounded-full transition-colors">
                <span className="text-xs font-bold">Share</span>
                <Share2 size={16} />
              </button>
            </div>
            {isCopied && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white text-xs py-2 px-4 rounded-lg flex items-center space-x-2">
                <Check size={12} />
                <span>Link Copied!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;