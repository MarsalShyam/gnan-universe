// import { motion } from 'framer-motion';
// import { FiInstagram, FiFacebook, FiDownload, FiLinkedin, FiTwitter, FiYoutube, FiMail } from 'react-icons/fi';
// import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
// import { FaWhatsapp } from 'react-icons/fa';

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex items-center text-white">
//       {/* Floating WhatsApp Icon - Fixed at Bottom Left */}
//       <div className="fixed left-4 bottom-4 z-40">
//         <motion.a 
//           href="https://wa.me/yourwhatsapplink" 
//           whileHover={{ scale: 1.1 }} 
//           className="block bg-green-500 p-4 rounded-full shadow-lg transition hover:bg-green-600"
//         >
//           <FaWhatsapp className="text-white text-3xl" />
//         </motion.a>
//       </div>

//       {/* Join Us Button - Fixed on Left Side Center */}
//       <div className="fixed left-0 top-1/3 -translate-y-1/2 z-50">
//         <motion.a 
//           href="#join-us"
//           className="bg-blue-500 text-white px-6 py-4 rounded-r-full text-lg font-semibold shadow-lg transition hover:bg-blue-600"
//         >
//           Join Us
//         </motion.a>
//       </div>

//       {/* Social Media Icons - Fully Colored with Hover Effect */}
//       <div className="fixed right-4 top-1/2 -translate-y-1/2 space-y-4 z-40 flex flex-col">
//         {[
//           { Icon: FiInstagram, color: 'bg-pink-500' },
//           { Icon: FiFacebook, color: 'bg-blue-600' },
//           { Icon: FiLinkedin, color: 'bg-blue-500' },
//           { Icon: FiTwitter, color: 'bg-sky-500' },
//           { Icon: FiYoutube, color: 'bg-red-600' },
//           { Icon: FiMail, color: 'bg-yellow-500' }
//         ].map(({ Icon, color }, index) => (
//           <motion.a key={index} href="#" whileHover={{ scale: 1.1 }} className={`block p-3 rounded-full shadow-lg transition ${color} hover:opacity-80`}>
//             <Icon className="text-white text-xl md:text-2xl" />
//           </motion.a>
//         ))}
//       </div>

//       {/* Hero Content */}
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="container mx-auto px-6 text-center"
//       >
//         <div className="max-w-4xl mx-auto">
//           <motion.h1 
//             className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             Welcome to <span className="text-blue-400">Gnanuniverse</span>
//           </motion.h1>
//           <motion.p 
//             className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             A universe of limitless learning, innovation, and excellence at Gnanamani College of Technology.
//           </motion.p>
//           <motion.div 
//             className="flex justify-center gap-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             <button className="bg-blue-500 px-8 py-3 rounded-full hover:bg-blue-600 transition shadow-lg flex items-center gap-2">
//               Explore Events <FiArrowRight />
//             </button>
//             <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition">
//               Watch Showreel
//             </button>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Scrolling Indicator */}
//       <motion.div 
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//       >
//         <FiChevronDown className="text-white text-3xl" />
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;




import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiDownload, FiLinkedin, FiTwitter, FiYoutube, FiMail } from 'react-icons/fi';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-06-01T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 flex flex-col items-center text-white pt-20 pb-8">
      {/* Floating WhatsApp Icon */}
      <div className="fixed left-4 bottom-4 z-40">
        <motion.a 
          href="https://wa.me/yourwhatsapplink" 
          whileHover={{ scale: 1.1 }} 
          className="block bg-green-500 p-3 sm:p-4 rounded-full shadow-lg transition hover:bg-green-600"
        >
          <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
        </motion.a>
      </div>

      {/* Join Us Button */}
      <div className="fixed left-0 top-1/3 -translate-y-1/2 z-50">
        <motion.a 
          href="#join-us"
          className="bg-blue-500 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-r-full text-sm sm:text-lg font-semibold shadow-lg transition hover:bg-blue-600"
        >
          Join Us
        </motion.a>
      </div>

      {/* Social Media Icons */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 space-y-2 sm:space-y-4 z-40 flex flex-col">
        {[{ Icon: FiInstagram, color: 'bg-pink-500' },
          { Icon: FiFacebook, color: 'bg-blue-600' },
          { Icon: FiLinkedin, color: 'bg-blue-500' },
          { Icon: FiTwitter, color: 'bg-sky-500' },
          { Icon: FiYoutube, color: 'bg-red-600' },
          { Icon: FiMail, color: 'bg-yellow-500' }
        ].map(({ Icon, color }, index) => (
          <motion.a 
            key={index} 
            href="#" 
            whileHover={{ scale: 1.1 }} 
            className={`block p-2 sm:p-3 rounded-full shadow-lg transition ${color} hover:opacity-80`}
          >
            <Icon className="text-white text-lg sm:text-xl md:text-2xl" />
          </motion.a>
        ))}
      </div>

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 sm:px-6 text-center flex-1 flex items-center"
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to <span className="text-blue-400">GnanUniverse</span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl opacity-80 mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A universe of limitless learning, innovation, and excellence at <span className='text-blue-300'>Gnanamani College of Technology.</span>
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition shadow-lg flex items-center gap-2 justify-center text-sm sm:text-base">
              Explore Events <FiArrowRight />
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition text-sm sm:text-base">
              Watch Showreel
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Sections */}
      <div className="container mx-auto px-4 sm:px-6 mt-8 space-y-6 sm:space-y-8">
        {/* Countdown Section */}
        <div className="bg-transparent backdrop-blur-sm text-white text-center py-6 px-4 rounded-xl shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Latest GnanFest Event</h2>
          <p className="text-sm sm:text-base mb-4">Countdown to the most awaited festival!</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xl sm:text-2xl font-semibold">
            <div className="flex flex-col px-2 sm:px-3">
              <span>{timeLeft.days}</span>
              <span className="text-xs sm:text-sm opacity-75">Days</span>
            </div>
            <div className="flex flex-col px-2 sm:px-3">
              <span>{timeLeft.hours}</span>
              <span className="text-xs sm:text-sm opacity-75">Hours</span>
            </div>
            <div className="flex flex-col px-2 sm:px-3">
              <span>{timeLeft.minutes}</span>
              <span className="text-xs sm:text-sm opacity-75">Mins</span>
            </div>
            <div className="flex flex-col px-2 sm:px-3">
              <span>{timeLeft.seconds}</span>
              <span className="text-xs sm:text-sm opacity-75">Secs</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="p-4 sm:p-6 bg-blue-700/90 backdrop-blur-sm rounded-xl shadow-lg text-center"
          >
            <div className="text-2xl sm:text-3xl font-bold mb-2">19+</div>
            <div className="text-sm sm:text-base opacity-90">Departments</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="p-4 sm:p-6 bg-blue-600/90 backdrop-blur-sm rounded-xl shadow-lg text-center"
          >
            <div className="text-2xl sm:text-3xl font-bold mb-2">150+</div>
            <div className="text-sm sm:text-base opacity-90">Teams</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="p-4 sm:p-6 bg-blue-500/90 backdrop-blur-sm rounded-xl shadow-lg text-center"
          >
            <div className="text-2xl sm:text-3xl font-bold mb-2">400+</div>
            <div className="text-sm sm:text-base opacity-90">Participants</div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div 
        className="mt-8 animate-bounce"
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