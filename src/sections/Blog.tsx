import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';

interface BlogProps {
  onBlogSelect: (blog: any) => void;
}

const Blog: React.FC<BlogProps> = ({ onBlogSelect }) => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Mobile Gaming in 2025',
      excerpt: 'Explore the upcoming trends and technologies that will shape the mobile gaming landscape in 2025 and beyond.',
      content: 'Mobile gaming has come a long way since the days of Snake on Nokia phones. As we look ahead to 2025, several emerging technologies are set to revolutionize how we play games on our mobile devices.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: 'May 15, 2025',
      author: 'Alex Johnson',
      readTime: '5 min read',
      tags: ['Future Tech', 'Mobile Gaming', 'Industry Trends']
    },
    {
      id: 2,
      title: 'Behind the Scenes: Creating Shadow Legends',
      excerpt: 'Get an exclusive look at the development process of our hit game Shadow Legends, from concept to launch.',
      content: 'Creating a game like Shadow Legends took our team nearly two years of dedicated work...',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: 'April 28, 2025',
      author: 'Sarah Chen',
      readTime: '8 min read',
      tags: ['Game Development', 'Shadow Legends', 'Behind the Scenes']
    },
    {
      id: 3,
      title: 'Optimizing Your Gaming Experience on Mobile',
      excerpt: 'Tips and tricks to enhance your mobile gaming experience, from device settings to accessories.',
      content: 'Mobile gaming doesn\'t have to be a compromise. With the right setup and knowledge, you can create a gaming experience that rivals traditional platforms.',
      image: 'https://images.unsplash.com/photo-1605142859862-978be7eba909?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      date: 'April 15, 2025',
      author: 'Marcus Williams',
      readTime: '6 min read',
      tags: ['Gaming Tips', 'Mobile Optimization', 'Accessories']
    }
  ];

  // Featured post (first post)
  const featuredPost = blogPosts[0];
  // Regular posts (rest of the posts)
  const regularPosts = blogPosts.slice(1);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Latest News & Articles</h1>
      
      {/* Featured Post */}
      <div 
        className="relative mb-12 rounded-xl overflow-hidden cursor-pointer group"
        onClick={() => onBlogSelect(featuredPost)}
      >
        <div className="relative h-96">
          <img 
            src={featuredPost.image} 
            alt={featuredPost.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-6 max-w-2xl">
          <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full mb-3">Featured</span>
          <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{featuredPost.title}</h2>
          <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
          <div className="flex items-center text-gray-400 text-sm mb-4">
            <div className="flex items-center mr-4">
              <Calendar size={14} className="mr-1" />
              <span>{featuredPost.date}</span>
            </div>
            <div className="flex items-center mr-4">
              <User size={14} className="mr-1" />
              <span>{featuredPost.author}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{featuredPost.readTime}</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all shadow-lg shadow-purple-900/30">
            Read Article
          </button>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularPosts.map(post => (
          <div 
            key={post.id}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 border border-purple-500/10 hover:border-purple-500/30"
            onClick={() => onBlogSelect(post)}
          >
            <div className="relative h-48">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-0.5 bg-purple-900/50 text-purple-300 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center text-gray-400 text-xs">
                <div className="flex items-center mr-3">
                  <Calendar size={12} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Newsletter Subscription */}
      <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-purple-500/20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
          <p className="text-gray-300 mb-6">Subscribe to our newsletter to receive the latest news, game updates, and exclusive offers.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-gray-800/70 border border-purple-500/30 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg shadow-purple-900/30">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
