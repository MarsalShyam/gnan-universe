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
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { FiInstagram, FiCamera, FiVideo, FiFacebook, FiDownload, FiLinkedin, FiTwitter, FiYoutube, FiMail } from 'react-icons/fi';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ticket from '../assets/images/gnyanfest.png';

// New AnimatedNumber component
const AnimatedNumber = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.floor);
  const formatted = useTransform(rounded, (latest) => `${latest}+`);

  useEffect(() => {
    const animation = animate(count, value, {
      duration: Math.min(2, value / 50),
      ease: "easeOut"
    });
    return () => animation.stop();
  }, [value, count]);

  return <motion.span>{formatted}</motion.span>;
};

const HeroSection = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-04-11T00:00:00").getTime(); // Changed to April 11
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
            Welcome to{' '}
            <motion.span
              className="inline-flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient definition - should be outside text flow */}
              <svg aria-hidden="true" className="absolute w-0 h-0">
                <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" /> {/* blue-400 */}
                  <stop offset="100%" stopColor="#8b5cf6" /> {/* purple-500 */}
                </linearGradient>
              </svg>

              {/* Text part with gradient */}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Gnayn
              </span>

              {/* Icon with gradient application */}
              <motion.div
                className="mx-2 relative"
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FiCamera
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  style={{
                    stroke: 'url(#icon-gradient)',
                    filter: 'drop-shadow(0 2px 4px rgba(139, 92, 246, 0.2))'
                  }}
                />
              </motion.div>

              {/* Second part of text gradient */}
              <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                Universe
              </span>
            </motion.span>
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
            className="flex flex-row justify-center gap-4 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-blue-500 px-3 md:px-6 py-3 rounded-full hover:bg-blue-600 transition shadow-lg flex items-center gap-2 justify-center text-sm sm:text-base">
              Explore Events <FiArrowRight />
            </button>
            <button className="border-2 border-white px-3 md:px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition text-sm sm:text-base">
              Watch Showreel
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Sections */}
      <div className="container mx-auto px-4 sm:px-6 mt-8 space-y-6 sm:space-y-8">
        {/* Countdown Section */}
        <div className="
  flex flex-col md:flex-row 
  bg-transparent backdrop-blur-sm 
  text-white rounded-xl 
  shadow-[0_0_20px_5px_rgba(191,219,254,0.8)] 
  hover:shadow-[0_0_25px_7px_rgba(191,219,254,0.9)]
  transition-shadow duration-300
  max-w-4xl mx-auto 
  justify-center items-center
">
          <div className='text-center py-6 px-4'>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-3 text-xl sm:text-xl font-semibold">
              <div className="flex flex-col px-2 sm:px-3 md:px-1 ">
                <span>{timeLeft.days}</span>
                <span className="text-xs sm:text-sm opacity-75">Days</span>
              </div>
              <div className="flex flex-col px-2 sm:px-3 md:px-1">
                <span>{timeLeft.hours}</span>
                <span className="text-xs sm:text-sm opacity-75">Hours</span>
              </div>
              <div className="flex flex-col px-2 sm:px-3 md:px-1">
                <span>{timeLeft.minutes}</span>
                <span className="text-xs sm:text-sm opacity-75">Mins</span>
              </div>
              <div className="flex flex-col px-2 sm:px-3">
                <span>{timeLeft.seconds}</span>
                <span className="text-xs sm:text-sm opacity-75">Secs</span>
              </div>
            </div>
          </div>
          <div
            className="h-40 w-full bg-center bg-no-repeat bg-cover overflow-hidden"
            style={{
              backgroundImage: `url(${ticket})`,
              backgroundColor: 'transparent'
            }}
          >
            {/* Content */}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 sm:p-6 bg-blue-700/90 backdrop-blur-sm rounded-xl shadow-lg text-center"
          >
            <div className="text-2xl sm:text-3xl font-bold mb-2">
              <AnimatedNumber value={19} />
            </div>
            <div className="text-sm sm:text-base opacity-90">Departments</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 sm:p-6 bg-blue-600/90 backdrop-blur-sm rounded-xl shadow-lg text-center"
          >
            <div className="text-2xl sm:text-3xl font-bold mb-2">
              <AnimatedNumber value={150} />
            </div>
            <div className="text-sm sm:text-base opacity-90">Teams</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 sm:p-6 bg-blue-500/90 backdrop-blur-sm rounded-xl shadow-lg text-center"
          >
            <div className="text-2xl sm:text-3xl font-bold mb-2">
              <AnimatedNumber value={400} />
            </div>
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