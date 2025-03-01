import React, { useState, useRef } from 'react';
import { Search, ChevronRight, ChevronLeft, Star } from 'lucide-react';

interface HomeProps {
  onGameSelect: (game: any) => void;
}

const Home: React.FC<HomeProps> = ({ onGameSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const carouselRef = useRef<HTMLDivElement>(null);

  // Featured games data
  const featuredGames = [
    {
      id: 1,
      title: 'Math Bridge',
      image: 'https://play-lh.googleusercontent.com/gkFeL4B_dCF-pOvxNKLjAWffptRx5Recjr_Ko5fjaIEvg8u0TIK4ipUTbhuBD7Mr0w=w2560-h1440-rw',
      banner: 'https://play-lh.googleusercontent.com/TgrauVXl6SZCMeg-FO9kykC2xggBj7JEsdKlMNpJAFUun5oSKe-ECQmJmXGtdkCc65Xl=w2560-h1440-rw',
      description: 'Embark on an epic journey through the cosmos, discovering new planets and battling intergalactic threats in this immersive space adventure.',
      rating: 4.8,
      tags: ['Math', 'Logic', 'Puzzle'],
      releaseDate: 'Mar 2025',
      size: '76 MB',
      players: '1 Player'
    },
    {
      id: 2,
      title: 'Letter Bridge',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Race through futuristic neon-lit cities at breakneck speeds, upgrading your vehicle and competing against the best drivers in the galaxy.',
      rating: 4.6,
      tags: ['Racing', 'Arcade', 'Multiplayer'],
      releaseDate: 'Feb 2025',
      size: '65 MB',
      players: '1 Player'
    },
    {
      id: 3,
      title: 'Riddle Verse',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Master the ancient arts of stealth and combat as you navigate a world of shadows, uncovering a conspiracy that threatens to plunge the realm into darkness.',
      rating: 4.9,
      tags: ['Quiz', 'Puzzle', 'Question & Answer'],
      releaseDate: 'March 2025',
      size: '105 MB',
      players: '1 Player'
    },
    {
      id: 4,
      title: 'Pixel Kingdoms',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Build, defend, and expand your kingdom in this charming pixel art strategy game. Form alliances, research technologies, and conquer neighboring realms.',
      rating: 4.5,
      tags: ['Strategy', 'Simulation', 'Pixel Art'],
      releaseDate: 'Apr 2025',
      size: '850 MB',
      players: 'Multiplayer'
    },
    {
      id: 5,
      title: 'Cyber Hunters',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Join an elite team of hackers and infiltrators in a dystopian future where corporations rule. Hack systems, infiltrate secure facilities, and expose corruption.',
      rating: 4.7,
      tags: ['Action', 'Cyberpunk', 'Shooter'],
      releaseDate: 'May 2025',
      size: '2.7 GB',
      players: 'Multiplayer'
    }
  ];

  // Top selection games
  const topGames = [
    {
      id: 6,
      title: 'Fantasy Quest',
      image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Embark on an epic quest through a magical realm filled with mythical creatures, powerful spells, and ancient treasures waiting to be discovered.',
      rating: 4.7,
      tags: ['RPG', 'Fantasy', 'Open World'],
      releaseDate: 'Dec 2024',
      size: '4.2 GB',
      players: '1 Player'
    },
    {
      id: 7,
      title: 'Zombie Survival',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Survive in a post-apocalyptic world overrun by the undead. Scavenge for resources, build defenses, and fight to stay alive in this intense survival horror game.',
      rating: 4.5,
      tags: ['Survival', 'Horror', 'Action'],
      releaseDate: 'Nov 2024',
      size: '2.9 GB',
      players: 'Multiplayer'
    },
    {
      id: 8,
      title: 'Puzzle Masters',
      image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Challenge your mind with hundreds of ingenious puzzles that will test your logic, spatial reasoning, and problem-solving skills in beautiful environments.',
      rating: 4.6,
      tags: ['Puzzle', 'Casual', 'Educational'],
      releaseDate: 'Jan 2025',
      size: '1.2 GB',
      players: '1 Player'
    },
    {
      id: 9,
      title: 'Battle Royale',
      image: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Drop into a massive battlefield where only one can survive. Gather weapons, eliminate opponents, and stay within the shrinking safe zone to claim victory.',
      rating: 4.8,
      tags: ['Battle Royale', 'Shooter', 'Multiplayer'],
      releaseDate: 'Feb 2025',
      size: '3.5 GB',
      players: 'Multiplayer'
    }
  ];

  // Scroll carousel
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      
      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  // Filter games based on search query
  const filteredGames = [...featuredGames, ...topGames].filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      {/* Search Bar */}
      <div className="relative mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800/50 border border-purple-500/30 rounded-full py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        {searchQuery && (
          <div className="absolute z-10 mt-2 w-full bg-gray-800/95 backdrop-blur-md rounded-lg shadow-lg border border-purple-500/30 overflow-hidden">
            {filteredGames.length > 0 ? (
              <ul className="max-h-96 overflow-y-auto">
                {filteredGames.map(game => (
                  <li key={game.id} className="border-b border-purple-500/20 last:border-b-0">
                    <button
                      onClick={() => {
                        onGameSelect(game);
                        setSearchQuery('');
                      }}
                      className="flex items-center p-3 w-full hover:bg-purple-900/30 transition-colors"
                    >
                      <img src={game.image} alt={game.title} className="w-12 h-12 rounded object-cover mr-3" />
                      <div className="text-left">
                        <h3 className="text-white font-medium">{game.title}</h3>
                        <div className="flex items-center">
                          <Star size={12} className="text-yellow-400 fill-yellow-400 mr-1" />
                          <span className="text-gray-300 text-xs">{game.rating}</span>
                          <span className="mx-2 text-gray-500">•</span>
                          <span className="text-purple-300 text-xs">{game.tags.join(', ')}</span>
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-4 text-center text-gray-400">No games found</div>
            )}
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="relative mb-12 rounded-2xl overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Featured Game" 
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full mb-3">New Release</span>
          <h2 className="text-3xl font-bold text-white mb-2">Riddle Verse</h2>
          <p className="text-gray-300 mb-4 max-w-lg">Join the verse to solve the ultimate question puzzles.</p>
          <button 
            onClick={() => onGameSelect(featuredGames[2])}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-purple-900/30"
          >
            Play Now
          </button>
        </div>
      </div>

      {/* Featured Games Carousel */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Featured Games</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => scrollCarousel('left')}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredGames.map(game => (
            <div 
              key={game.id}
              className="flex-shrink-0 w-64 group"
            >
              <div 
                className="relative h-80 w-full rounded-lg overflow-hidden cursor-pointer mb-3 bg-gray-800 shadow-lg shadow-purple-900/10 group-hover:shadow-purple-900/30 transition-all duration-300"
                onClick={() => onGameSelect(game)}
              >
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3">
                  <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-xs font-medium">{game.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-1">{game.title}</h3>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {game.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-0.5 bg-purple-900/50 text-purple-300 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all text-sm">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Selection Grid */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Top Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {topGames.map(game => (
            <div 
              key={game.id}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => onGameSelect(game)}
            >
              <div className="relative h-64">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-xl transition-all duration-300"></div>
              <div className="absolute top-3 right-3">
                <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star size={12} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-xs font-medium">{game.rating}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{game.title}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {game.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{game.description}</p>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all text-sm shadow-lg shadow-purple-900/30 transform group-hover:translate-y-0 translate-y-1 opacity-0 group-hover:opacity-100">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;