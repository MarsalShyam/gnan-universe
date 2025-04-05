// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
// import { FaThList, FaUserGraduate, FaFutbol, FaMusic } from 'react-icons/fa';


// const Gal2023 = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const loadImages = async () => {
//       try {
//         // Static glob imports for each category
//         const categoryImports = {
//           'alumni-meet': import.meta.glob('../assets/images/2023/alumni-meet/*.{jpeg,jpg,png,svg}'),
//           'performance': import.meta.glob('../assets/images/2023/performance/*.{jpeg,jpg,png,svg}'),
//           'sports-day': import.meta.glob('../assets/images/2023/sports-day/*.{jpeg,jpg,png,svg}')
//         };

//         const loadedImages = [];
        
//         for (const [category, importFn] of Object.entries(categoryImports)) {
//           const imageEntries = Object.entries(importFn);
          
//           for (const [path, importer] of imageEntries) {
//             const image = await importer();
//             const fileName = path.split('/').pop().split('.')[0];
            
//             loadedImages.push({
//               id: `${category}-${fileName}`,
//               src: image.default,
//               category: category
//             });
//           }
//         }

//         setImages(loadedImages.sort(() => Math.random() - 0.5)); // Optional shuffle
//       } catch (error) {
//         console.error('Error loading images:', error);
//       }
//     };

//     loadImages();
//   }, []);

//   const filteredImages = activeTab === 'all' 
//     ? images 
//     : images.filter(img => img.category === activeTab);

//   const tabs = [
//     { id: 'all', icon: <FaThList />, label: 'All' },
//     { id: 'alumni-meet', icon: <FaUserGraduate />, label: 'Alumni Meet' },
//     { id: 'sports-day', icon: <FaFutbol />, label: 'Sports Day' },
//     { id: 'performance', icon: <FaMusic />, label: 'Performance' },
//   ];

//   return (
//     <div className="min-h-[calc(100vh-4rem)] bg-gray-50 pt-20 px-5 md:px-10">
//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
//         2023 Memory Gallery
//       </h1>

//       <LayoutGroup>
//         <div className="flex overflow-x-auto pb-4 md:justify-center gap-2 md:gap-4 mb-8 md:mb-12">
//           {tabs.map((tab) => (
//             <motion.button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors flex-shrink-0
//                 ${activeTab === tab.id 
//                   ? 'bg-indigo-600 text-white' 
//                   : 'bg-white text-gray-600 hover:bg-indigo-50'}`}
//               layout
//             >
//               {tab.icon}
//               {tab.label}
//             </motion.button>
//           ))}
//         </div>

//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0"
//           layout
//         >
//           <AnimatePresence mode='wait'>
//             {filteredImages.map((image) => (
//               <motion.div
//                 key={image.id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.3 }}
//                 className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl"
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <img
//                   src={image.src}
//                   alt={`${image.category} ${image.id}`}
//                   loading="lazy"
//                   className="w-full h-48 md:h-56 object-cover transform transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </LayoutGroup>
//     </div>
//   );
// };

// export default Gal2023;

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { FaThList, FaUserGraduate, FaFutbol, FaMusic } from 'react-icons/fa';

const Gal2023 = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('all');
  const [images, setImages] = useState([]);

  // Extract category from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromQuery = params.get('category');
    if (categoryFromQuery) {
      setActiveTab(categoryFromQuery);
    }
  }, [location.search]);

  // Load images dynamically
  useEffect(() => {
    const loadImages = async () => {
      try {
        const categoryImports = {
          'alumni-meet': import.meta.glob('../assets/images/2023/alumni-meet/*.{jpeg,jpg,png,svg}'),
          'performance': import.meta.glob('../assets/images/2023/performance/*.{jpeg,jpg,png,svg}'),
          'sports-day': import.meta.glob('../assets/images/2023/sports-day/*.{jpeg,jpg,png,svg}'),
        };

        const loadedImages = [];

        for (const [category, importFn] of Object.entries(categoryImports)) {
          const imageEntries = Object.entries(importFn);

          for (const [path, importer] of imageEntries) {
            const image = await importer();
            const fileName = path.split('/').pop().split('.')[0];

            loadedImages.push({
              id: `${category}-${fileName}`,
              src: image.default,
              category: category,
            });
          }
        }

        setImages(loadedImages.sort(() => Math.random() - 0.5)); // Shuffle
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, []);

  const filteredImages =
    activeTab === 'all' ? images : images.filter((img) => img.category === activeTab);

  const tabs = [
    { id: 'all', icon: <FaThList />, label: 'All' },
    { id: 'alumni-meet', icon: <FaUserGraduate />, label: 'Alumni Meet' },
    { id: 'sports-day', icon: <FaFutbol />, label: 'Sports Day' },
    { id: 'performance', icon: <FaMusic />, label: 'Performance' },
  ];

  // Handle tab switch + query update
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'all') {
      navigate(location.pathname); // remove query
    } else {
      navigate(`${location.pathname}?category=${tabId}`);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 pt-20 px-5 md:px-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
        2023 Memory Gallery
      </h1>

      <LayoutGroup>
        <div className="flex overflow-x-auto pb-4 md:justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors flex-shrink-0
                ${activeTab === tab.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
                }`}
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
          <AnimatePresence mode="wait">
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
                  alt={`${image.category} ${image.id}`}
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
