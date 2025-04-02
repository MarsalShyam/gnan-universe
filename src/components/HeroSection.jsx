import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiDownload, FiLinkedin, FiTwitter, FiYoutube, FiMail } from 'react-icons/fi';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex items-center text-white">
      {/* Floating WhatsApp Icon - Fixed at Bottom Left */}
      <div className="fixed left-4 bottom-4 z-40">
        <motion.a 
          href="https://wa.me/yourwhatsapplink" 
          whileHover={{ scale: 1.1 }} 
          className="block bg-green-500 p-4 rounded-full shadow-lg transition hover:bg-green-600"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </motion.a>
      </div>

      {/* Join Us Button - Fixed on Left Side Center */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
        <motion.a 
          href="#join-us"
          className="bg-blue-500 text-white px-6 py-4 rounded-r-full text-lg font-semibold shadow-lg transition hover:bg-blue-600"
        >
          Join Us
        </motion.a>
      </div>

      {/* Social Media Icons - Fully Colored with Hover Effect */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 space-y-4 z-40 flex flex-col">
        {[
          { Icon: FiInstagram, color: 'bg-pink-500' },
          { Icon: FiFacebook, color: 'bg-blue-600' },
          { Icon: FiLinkedin, color: 'bg-blue-500' },
          { Icon: FiTwitter, color: 'bg-sky-500' },
          { Icon: FiYoutube, color: 'bg-red-600' },
          { Icon: FiMail, color: 'bg-yellow-500' }
        ].map(({ Icon, color }, index) => (
          <motion.a key={index} href="#" whileHover={{ scale: 1.1 }} className={`block p-3 rounded-full shadow-lg transition ${color} hover:opacity-80`}>
            <Icon className="text-white text-xl md:text-2xl" />
          </motion.a>
        ))}
      </div>

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to <span className="text-blue-400">Gnanuniverse</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A universe of limitless learning, innovation, and excellence at Gnanamani College of Technology.
          </motion.p>
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-blue-500 px-8 py-3 rounded-full hover:bg-blue-600 transition shadow-lg flex items-center gap-2">
              Explore Events <FiArrowRight />
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition">
              Watch Showreel
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scrolling Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FiChevronDown className="text-white text-3xl" />
      </motion.div>
    </section>
  );
};

export default HeroSection;


