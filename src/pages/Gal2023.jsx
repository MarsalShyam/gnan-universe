import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { FaThList, FaUserGraduate, FaFutbol, FaMusic } from 'react-icons/fa';

const Gal2023 = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample images data with categories
  const images = [
    { id: 1, src: 'https://picsum.photos/400/300?1', category: 'alumany' },
    { id: 2, src: 'https://picsum.photos/400/300?2', category: 'sports' },
    { id: 3, src: 'https://picsum.photos/400/300?3', category: 'performance' },
    { id: 4, src: 'https://picsum.photos/400/300?4', category: 'alumany' },
    { id: 5, src: 'https://picsum.photos/400/300?5', category: 'sports' },
    { id: 6, src: 'https://picsum.photos/400/300?6', category: 'performance' },
    { id: 7, src: 'https://picsum.photos/400/300?7', category: 'alumany' },
    { id: 8, src: 'https://picsum.photos/400/300?8', category: 'sports' },
    { id: 9, src: 'https://picsum.photos/400/300?9', category: 'performance' },
    { id: 10, src: 'https://picsum.photos/400/300?10', category: 'alumany' },
    { id: 11, src: 'https://picsum.photos/400/300?11', category: 'sports' },
    { id: 12, src: 'https://picsum.photos/400/300?12', category: 'performance' },
  ];

  const filteredImages = activeTab === 'all' 
    ? images 
    : images.filter(img => img.category === activeTab);

  const tabs = [
    { id: 'all', icon: <FaThList />, label: 'All' },
    { id: 'alumany', icon: <FaUserGraduate />, label: 'Alumany Meet' },
    { id: 'sports', icon: <FaFutbol />, label: 'Sports Day' },
    { id: 'performance', icon: <FaMusic />, label: 'Performance' },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 pt-20 px-5 md:px-10 ">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-slate-800">
        2023 Memory Gallery
      </h1>

      <LayoutGroup>
        <div className="flex overflow-x-auto pb-4 md:justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors flex-shrink-0
                ${activeTab === tab.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-slate-600 hover:bg-blue-50'}`}
              layout
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0"
          layout
        >
          <AnimatePresence mode='wait'>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={image.src}
                  alt=""
                  loading="lazy"
                  className="w-full h-48 md:h-56 object-cover transform transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
};

export default Gal2023;