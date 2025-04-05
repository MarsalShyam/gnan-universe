import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import unilogo from '../assets/images/unilogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-gray-900 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-between h-16 items-center">
        <Link to="/" className="text-white text-base  md:text-2xl font-bold flex justify-center items-center gap-2">
          <span className='h-14 w-14'><img className='rounded-full' src={unilogo}/></span>GnyanMediaUniverse
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <motion.div key={link.name} whileHover={{ y: -2 }}>
              <Link
                to={link.href}
                className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-blue-500 text-white px-6 py-2 rounded-full ml-4 shadow-lg hover:bg-blue-600"
          >
            Join Club
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 p-4 space-y-4 shadow-lg"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2 text-white hover:text-blue-400 text-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600">
              Join Club
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
