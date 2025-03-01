import React, { useEffect } from 'react';
import { Star, Download, Play, X } from 'lucide-react';

interface GameDetailsProps {
  game: any;
  onClose: () => void;
  isMobile: boolean;
}

const GameDetails: React.FC<GameDetailsProps> = ({ game, onClose, isMobile }) => {
  // Prevent body scrolling when panel is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>
      
      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full ${
          isMobile ? 'w-full' : 'w-1/3'
        } bg-gray-900/95 backdrop-blur-md shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto`}
      >
        <div className="relative">
          {/* Game Banner */}
          <div className="relative h-64">
            <img
              src={game.banner || game.image}
              alt={game.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/50 text-white hover:bg-gray-800 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Game Content */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-blue-400">{game.title}</h2>
              <div className="flex items-center space-x-1 bg-purple-900/50 px-3 py-1 rounded-full">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="text-white font-medium">{game.rating}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {game.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-300 mb-6">{game.description}</p>

            {/* Game Trailer */}
            <div className="mb-6 bg-black/30 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="p-4 rounded-full bg-purple-600/80 text-white hover:bg-purple-500 transition-all">
                    <Play size={24} fill="white" />
                  </button>
                </div>
                <img
                  src={game.trailer || game.image}
                  alt={`${game.title} trailer`}
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
            </div>

            {/* Game Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-800/50 p-3 rounded-lg text-center">
                <p className="text-xs text-gray-400">Release Date</p>
                <p className="font-medium text-white">{game.releaseDate}</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg text-center">
                <p className="text-xs text-gray-400">Size</p>
                <p className="font-medium text-white">{game.size}</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg text-center">
                <p className="text-xs text-gray-400">Players</p>
                <p className="font-medium text-white">{game.players}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all shadow-lg shadow-purple-900/30">
                <Download size={18} />
                <span>Download</span>
              </button>
              <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all">
                <Play size={18} />
                <span>Play Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetails;