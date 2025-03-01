import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Twitch, Youtube, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Error sending message. Please check your internet connection.');
    }

    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Contact Form */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">Get In Touch</h2>
          {successMessage && <p className="text-green-400 mb-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-400 mb-4">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
              <input 
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                placeholder="Subject"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-900/50 border border-purple-500/30 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
                placeholder="Your message"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg shadow-purple-900/30 flex items-center justify-center"
            >
              <Send size={18} className="mr-2" />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all mb-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Contact Information</h2>
            <p className="text-gray-400">For support or questions, please reach out to us.</p>
            <div className="mt-4 space-y-4">
              <p><Mail size={18} className="inline mr-2 text-blue-400" /> trinitygameworld@gmail.com</p>
              <p><Phone size={18} className="inline mr-2 text-purple-400" /> +91-7003820096</p>
              <p><MapPin size={18} className="inline mr-2 text-blue-400" /> Kolkata, India</p>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-purple-400 hover:text-white"><Twitch size={32} /></a>
            <a href="#" className="text-red-400 hover:text-white"><Youtube size={32} /></a>
            <a href="#" className="text-blue-400 hover:text-white"><MessageSquare size={32} /></a>
          </div>

          



        </div>
      </div>
      {/* FAQ Section */}
<div>
<h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
<div className="space-y-4">
{[
  {
    question: 'How do I report a bug in one of your games?',
    answer: 'You can report bugs through our support portal in the game settings or by emailing support@trinitygameworld.com with details about the issue you encountered.'
  },
  {
    question: 'Are your games available on both iOS and Android?',
    answer: 'Yes, all of our games are available on both iOS and Android platforms. Some titles may have timed exclusivity on certain platforms for promotional purposes.'
  },
  {
    question: 'Do you offer internships or job opportunities?',
    answer: 'We regularly offer internships and job opportunities for talented individuals passionate about game development. Check our Careers page for current openings.'
  },
  {
    question: 'How can I request a refund for in-app purchases?',
    answer: 'Refund requests should be directed to the platform where you made the purchase (App Store or Google Play). We cannot process refunds directly.'
  }
].map((faq, index) => (
  <div 
    key={index}
    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all"
  >
    <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
    <p className="text-gray-400">{faq.answer}</p>
  </div>
))}
</div>
</div>
    </div>
  );
};

export default Contact;
