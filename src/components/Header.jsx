import React from 'react';
import { Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 로고 섹션 */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600 cursor-pointer">Photo Gallery</span>
          </div>
          
          {/* 검색창 섹션 (데스크탑 전용) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full text-gray-400 focus-within:text-gray-800">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-1.5 border border-gray-200 rounded-full bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-200 sm:text-sm transition duration-150"
                placeholder="Search photos..."
              />
            </div>
          </div>

          {/* 우측 메뉴 섹션 */}
          <div className="flex items-center space-x-5">
            <button className="text-gray-400 hover:text-gray-600">
              <Menu className="h-5 w-5" />
            </button>
            {/* 프로필 이니셜 아이콘 */}
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs shadow-sm">
              HR
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Header;