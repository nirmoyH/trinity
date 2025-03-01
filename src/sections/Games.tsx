import React, { useState } from 'react';
import { Filter, Star } from 'lucide-react';

interface GamesProps {
  onGameSelect: (game: any) => void;
}

const Games: React.FC<GamesProps> = ({ onGameSelect }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFilter, setActiveFilter] = useState('popular');

  // Categories
  const categories = [
    { id: 'all', name: 'All Games' },
    { id: 'action', name: 'Action' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'rpg', name: 'RPG' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'casual', name: 'Casual' },
    { id: 'multiplayer', name: 'Multiplayer' }
  ];

  // Filters
  const filters = [
    { id: 'popular', name: 'Popular' },
    { id: 'newest', name: 'Newest' },
    { id: 'rating', name: 'Top Rated' }
  ];

  // Games data
  const allGames = [
    {
      id: 1,
      title: 'Cosmic Odyssey',
      image: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1614294149010-950b698f72c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Embark on an epic journey through the cosmos, discovering new planets and battling intergalactic threats in this immersive space adventure.',
      rating: 4.8,
      tags: ['Adventure', 'Sci-Fi', 'RPG'],
      categories: ['adventure', 'rpg'],
      releaseDate: 'Mar 2025',
      size: '2.3 GB',
      players: '1 Player'
    },
    {
      id: 2,
      title: 'Neon Racers',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Race through futuristic neon-lit cities at breakneck speeds, upgrading your vehicle and competing against the best drivers in the galaxy.',
      rating: 4.6,
      tags: ['Racing', 'Arcade', 'Multiplayer'],
      categories: ['action', 'multiplayer'],
      releaseDate: 'Feb 2025',
      size: '1.8 GB',
      players: 'Multiplayer'
    },
    {
      id: 3,
      title: 'Shadow Legends',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Master the ancient arts of stealth and combat as you navigate a world of shadows, uncovering a conspiracy that threatens to plunge the realm into darkness.',
      rating: 4.9,
      tags: ['Action', 'Stealth', 'Fantasy'],
      categories: ['action', 'adventure'],
      releaseDate: 'Jan 2025',
      size: '3.1 GB',
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
      categories: ['strategy'],
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
      categories: ['action', 'multiplayer'],
      releaseDate: 'May 2025',
      size: '2.7 GB',
      players: 'Multiplayer'
    },
    {
      id: 6,
      title: 'Fantasy Quest',
      image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Embark on an epic quest through a magical realm filled with mythical creatures, powerful spells, and ancient treasures waiting to be discovered.',
      rating: 4.7,
      tags: ['RPG', 'Fantasy', 'Open World'],
      categories: ['rpg', 'adventure'],
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
      categories: ['action', 'adventure'],
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
      categories: ['casual'],
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
      categories: ['action', 'multiplayer'],
      releaseDate: 'Feb 2025',
      size: '3.5 GB',
      players: 'Multiplayer'
    },
    {
      id: 10,
      title: 'Tiny Farm',
      image: 'https://images.unsplash.com/photo-1605142859862-978be7eba909?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1605142859862-978be7eba909?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Build and manage your own virtual farm in this relaxing and charming simulation game. Plant crops, raise animals, and customize your farm to perfection.',
      rating: 4.4,
      tags: ['Simulation', 'Casual', 'Relaxing'],
      categories: ['casual', 'strategy'],
      releaseDate: 'Mar 2025',
      size: '950 MB',
      players: '1 Player'
    },
    {
      id: 11,
      title: 'Dungeon Crawlers',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Delve into procedurally generated dungeons, battle fearsome monsters, and collect powerful loot in this roguelike dungeon crawler with pixel art graphics.',
      rating: 4.7,
      tags: ['Roguelike', 'Dungeon Crawler', 'RPG'],
      categories: ['rpg', 'action'],
      releaseDate: 'Apr 2025',
      size: '1.5 GB',
      players: 'Multiplayer'
    },
    {
      id: 12,
      title: 'Space Commander',
      image: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      banner: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Command your own space fleet in this epic strategy game. Explore the galaxy, research new technologies, and engage in tactical space battles against alien civilizations.',
      rating: 4.9,
      tags: ['Strategy', 'Sci-Fi', 'Space'],
      categories: ['strategy'],
      releaseDate: 'May 2025',
      size: '2.8 GB',
      players: 'Multiplayer'
    }
  ];

  // Filter games based on category and sort based on filter
  const filteredGames = allGames
    .filter(game => activeCategory === 'all' || game.categories.includes(activeCategory))
    .sort((a, b) => {
      if (activeFilter === 'rating') return b.rating - a.rating;
      if (activeFilter === 'newest') {
        // Simple sorting by id for demo purposes (higher id = newer)
        return b.id - a.id;
      }
      // Default to popular (also using id for demo)
      return b.id - a.id;
    });

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Our Games</h1>
      
      {/* Categories */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg shadow-purple-900/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-2 sm:flex-nowrap">

        <h2 className="text-xl font-semibold text-white">
          {categories.find(c => c.id === activeCategory)?.name || 'All Games'}
          <span className="text-gray-400 ml-2 text-sm">({filteredGames.length} games)</span>
        </h2>
        <div className="flex items-center space-x-2">
          <Filter size={18} className="text-gray-400" />
          <div className="flex flex-wrap justify-center bg-gray-800/50 rounded-lg p-1 w-full sm:w-auto">

            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1 rounded-md text-sm transition-all ${
                  activeFilter === filter.id
                    ? 'bg-purple-900/70 text-white'
                    : 'text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map(game => (
          <div
            key={game.id}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 border border-purple-500/10 hover:border-purple-500/30"
            onClick={() => onGameSelect(game)}
          >
            <div className="relative h-48">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-3 right-3">
                <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star size={12} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-xs font-medium">{game.rating}</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{game.title}</h3>
              <div className="flex flex-wrap gap-1 mb-3">
                {game.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-0.5 bg-purple-900/50 text-purple-300 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{game.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 text-xs">{game.releaseDate}</span>
                <button className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-medium rounded-lg transition-all shadow-md shadow-purple-900/20">
                  View Game
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;