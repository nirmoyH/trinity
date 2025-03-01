import React from 'react';
import { Users, Award, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Nirmoy Banerjee',
      role: 'Lead Developer',
      image: 'https://scontent-ccu1-2.xx.fbcdn.net/v/t39.30808-6/453494391_7950740288338316_9162498795298938006_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Wzkh_s6Le30Q7kNvgH8IL_8&_nc_oc=AdibYXlQA255405Ek32i_io39C74WPOVVZcBuwlNjNzI716RLbkAnpbWy0Wrv4HK8qk&_nc_zt=23&_nc_ht=scontent-ccu1-2.xx&_nc_gid=AP4oDK31bE68iA3ZxFUMJFb&oh=00_AYCUuyU8IWuEmX2YFgyQnWVNIi3Vfi6hRSDeFfXbYYo4Yg&oe=67C8B08D',
      bio: 'Gaming enthusiast with 15+ years in the industry. Founded Trinity Game World with a vision to create immersive mobile gaming experiences.'
    },
    {
      name: 'Pranob Saha',
      role: 'Level Designer',
      image: 'https://scontent-ccu2-2.xx.fbcdn.net/v/t39.30808-6/394742388_2048321985545464_6991745036524953116_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YBkvrTeXw5kQ7kNvgHARlQL&_nc_oc=Adjgxc1SrWH280IPN_vN_qyrMjxFvaULDZa5RnNq91JXjP-9oO8tZF0HZMVPINZhF8Y&_nc_zt=23&_nc_ht=scontent-ccu2-2.xx&_nc_gid=AZuo8BulmuMRuD6FEhJD6u0&oh=00_AYBFT-VReQ2WXgXU0kGrSQU9XNU0XrWsZQS8-G5m423j0Q&oe=67C89ADF',
      bio: 'Award-winning art director with a passion for creating visually stunning game worlds that push the boundaries of mobile gaming.'
    },
    {
      name: 'Anirudhya Das',
      role: 'Developer and Designer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      bio: 'Tech wizard who loves solving complex problems. Leads our development team in creating smooth, responsive gaming experiences.'
    },
    {
      name: 'Priya Patel',
      role: 'UX Designer',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      bio: 'Specializes in creating intuitive and engaging user experiences that keep players coming back for more.'
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">About Trinity Game World</h1>
      
      {/* Company Overview */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-purple-500/20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Our Story</h2>
            <p className="text-gray-300 mb-6">
              Founded in 2025, Trinity Game World was born from a passion for creating immersive mobile gaming experiences that push the boundaries of what's possible on handheld devices. What started as a small team of three developers working out of a garage has grown into a vibrant studio of over 50 talented individuals dedicated to crafting unforgettable gaming adventures.
            </p>
            <p className="text-gray-300">
              Our mission is simple: to create games that captivate, challenge, and connect players around the world. We believe that great games should be accessible to everyone, which is why we focus on developing high-quality experiences for mobile platforms that don't compromise on depth or visual fidelity.
            </p>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all group">
          <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4 group-hover:bg-blue-800/50 transition-colors">
            <Users size={24} className="text-blue-400" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
          <p className="text-gray-400">Team Members</p>
        </div>
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all group">
          <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4 group-hover:bg-purple-800/50 transition-colors">
            <Zap size={24} className="text-purple-400" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">5+</h3>
          <p className="text-gray-400">Games Released</p>
        </div>
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all group">
          <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4 group-hover:bg-blue-800/50 transition-colors">
            <Globe size={24} className="text-blue-400" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">100k+</h3>
          <p className="text-gray-400">Global Downloads</p>
        </div>
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all group">
          <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mb-4 group-hover:bg-purple-800/50 transition-colors">
            <Award size={24} className="text-purple-400" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">3+</h3>
          <p className="text-gray-400">Industry Awards</p>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Innovation</h3>
            <p className="text-gray-300">
              We constantly push the boundaries of what's possible in mobile gaming, exploring new technologies and gameplay mechanics to create fresh experiences.
            </p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Quality</h3>
            <p className="text-gray-300">
              We believe in creating polished, high-quality games that stand the test of time. Every detail matters, from visual design to performance optimization.
            </p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Community</h3>
            <p className="text-gray-300">
              Our players are at the heart of everything we do. We actively listen to feedback and foster a positive, inclusive community around our games.
            </p>
          </div>
        </div>
      </div>
      
      {/* Team */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all group">
              <div className="relative h-48">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;