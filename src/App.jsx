import React, { useState } from 'react';
import { Camera, MapPin, Grid, Instagram } from 'lucide-react';
import Header from './components/Header';
import PhotoCard from './components/PhotoCard';
import PhotoModal from './components/PhotoModal';
import { PHOTO_DATA } from './data/photos';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsCopied(false);
    document.body.style.overflow = 'unset';
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Photo Gallery', url: window.location.href });
      } catch (err) { console.log('Share canceled'); }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) { console.error('Failed to copy: ', err); }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex flex-col items-center text-center space-y-6 mb-10">
          <div className="relative">
            {/* 보라색 -> 파란색 그라데이션 수정 */}
            <div className="h-32 w-32 md:h-36 md:w-36 rounded-full bg-gradient-to-tr from-blue-600 via-blue-400 to-sky-300 p-[3px]">
              <div className="bg-white rounded-full p-[2px] h-full w-full">
                <img className="h-full w-full rounded-full object-cover" src="/src/assets/profile.png" alt="Profile" />
              </div>
            </div>
            <div className="absolute bottom-1 right-1 bg-blue-500 text-white p-2 rounded-full border-4 border-white shadow-sm">
              <Camera size={16} />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-gray-900">Moon Haram</h1>
            <div className="flex items-center justify-center space-x-3 text-sm text-gray-500">
              <span className="flex items-center">
                <MapPin size={14} className="mr-1 text-blue-500" /> Seoul, Korea
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <a href="https://instagram.com/m_ha.03" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700 transition-colors font-medium">
                <Instagram size={14} className="mr-1.5" />
                <span>@m_ha.03</span>
              </a>
            </div>
            <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
              취미로 사진을 찍고 기록하고 있습니다.📷<br/>
              일상 속 소소한 순간들을 담아 공유하고 싶습니다.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-8 border-b border-gray-100 pb-4">
           <div className="flex items-center space-x-2 text-gray-900 font-semibold text-xs tracking-widest uppercase">
              <Grid size={16} />
              <span>Posts</span>
           </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PHOTO_DATA.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} onClick={handlePhotoClick} />
          ))}
        </div>
      </main>
      <footer className="py-10 text-center text-gray-300 text-xs font-medium uppercase tracking-widest">
        <p>© MHR Photo Gallery</p>
      </footer>
      <PhotoModal photo={selectedPhoto} onClose={closeModal} onShare={handleShare} isCopied={isCopied} />
    </div>
  );
}