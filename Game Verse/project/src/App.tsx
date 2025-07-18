import React, { useState, useMemo } from 'react';
import { Search, Gamepad2, Star, Users, TrendingUp, Filter, Menu, X } from 'lucide-react';

interface Game {
  id: number;
  title: string;
  category: string;
  rating: number;
  players: string;
  image: string;
  description: string;
  trending: boolean;
  featured: boolean;
}

const games: Game[] = [
  {
    id: 1,
    title: "Cyber Racing 2077",
    category: "Racing",
    rating: 4.8,
    players: "1.2M",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Experience the future of racing in this cyberpunk-themed high-speed adventure.",
    trending: true,
    featured: true
  },
  {
    id: 2,
    title: "Mystic Legends",
    category: "RPG",
    rating: 4.9,
    players: "890K",
    image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Embark on an epic fantasy journey through mystical realms and ancient magic.",
    trending: true,
    featured: false
  },
  {
    id: 3,
    title: "Battle Arena Pro",
    category: "Action",
    rating: 4.7,
    players: "2.1M",
    image: "https://images.pexels.com/photos/1637438/pexels-photo-1637438.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Intense multiplayer battles with strategic gameplay and stunning graphics.",
    trending: false,
    featured: false
  },
  {
    id: 4,
    title: "Space Odyssey",
    category: "Strategy",
    rating: 4.6,
    players: "654K",
    image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Build your galactic empire and explore the vast cosmos in this space strategy game.",
    trending: true,
    featured: false
  },
  {
    id: 5,
    title: "Football Manager Elite",
    category: "Sports",
    rating: 4.5,
    players: "1.8M",
    image: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Take control of your favorite team and lead them to championship glory.",
    trending: false,
    featured: false
  },
  {
    id: 6,
    title: "Mind Bender",
    category: "Puzzle",
    rating: 4.4,
    players: "445K",
    image: "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Challenge your intellect with mind-twisting puzzles and brain teasers.",
    trending: false,
    featured: false
  },
  {
    id: 7,
    title: "Adventure Quest",
    category: "Adventure",
    rating: 4.7,
    players: "723K",
    image: "https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Explore vast worlds filled with mysteries, treasures, and epic adventures.",
    trending: true,
    featured: false
  },
  {
    id: 8,
    title: "City Builder X",
    category: "Simulation",
    rating: 4.3,
    players: "567K",
    image: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Design and manage your dream city with realistic urban planning mechanics.",
    trending: false,
    featured: false
  }
];

const categories = ["All", "Action", "RPG", "Racing", "Strategy", "Sports", "Puzzle", "Adventure", "Simulation"];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredGames = useMemo(() => {
    return games.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || game.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredGame = games.find(game => game.featured);
  const trendingGames = games.filter(game => game.trending);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header */}
      <header className="relative bg-black/30 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                GameVerse
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Games</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Categories</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Community</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-blue-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-purple-500/20 z-50">
              <nav className="px-4 py-4 space-y-4">
                <a href="#" className="block hover:text-blue-400 transition-colors">Home</a>
                <a href="#" className="block hover:text-blue-400 transition-colors">Games</a>
                <a href="#" className="block hover:text-blue-400 transition-colors">Categories</a>
                <a href="#" className="block hover:text-blue-400 transition-colors">Community</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      {featuredGame && (
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={featuredGame.image}
              alt={featuredGame.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          </div>
          <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-medium">Featured Game</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                {featuredGame.title}
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                {featuredGame.description}
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{featuredGame.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span>{featuredGame.players} players</span>
                </div>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Play Now
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Trending Games */}
        {trendingGames.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="h-6 w-6 text-green-400" />
              <h2 className="text-2xl font-bold">Trending Now</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingGames.map(game => (
                <div
                  key={game.id}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Trending
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                      {game.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{game.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{game.players}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Games */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory === "All" ? "All Games" : `${selectedCategory} Games`}
            <span className="text-lg text-gray-400 ml-2">({filteredGames.length})</span>
          </h2>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map(game => (
            <div
              key={game.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                  {game.category}
                </div>
                {game.trending && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Trending
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {game.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                  {game.description}
                </p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{game.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>{game.players}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                  Play Game
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <Gamepad2 className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-400 mb-2">No games found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-purple-500/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad2 className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  GameVerse
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Discover and play the best games from around the internet. Your ultimate gaming destination.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Games</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Action</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">RPG</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Strategy</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Leaderboards</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Tournaments</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Bug Reports</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 GameVerse. All rights reserved. Built with passion for gamers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;