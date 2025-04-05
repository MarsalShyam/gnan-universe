// import { motion } from 'framer-motion';
// import { FiArrowRight } from 'react-icons/fi';
// import { useState } from 'react';
// import img1 from '../assets/images/2024/alumni-meet/1.jpg'
// import img2 from '../assets/images/2024/performance/1.jpg'
// import img3 from '../assets/images/2024/sports-day/4.jpg'


// const Gallery = () => {
//   const [selectedYear, setSelectedYear] = useState(null);

//   const galleryData = [
//     {
//       year: "2024",
//       images: [img1, img2,img3],
//     },
//     {
//       year: "2023",
//       images: [img1, img2,img3],
//     },
//     {
//       year: "2022 & Earlier",
//       images: [img1, img2,img3],
//     },
//     {
//       year: "Workshops & Technical Events",
//       images: ["/images/workshop1.jpg", "/images/workshop2.jpg", "/images/workshop3.jpg"],
//     }
//   ];

//   return (
//     <section id="gallery" className="py-20 px-4 bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto text-center">
//         <motion.h2 className="text-4xl font-bold mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           Event Gallery
//         </motion.h2>
//       </div>

//       {galleryData.map((section, index) => (
//         <div key={index} className="mb-16">
//           <h3 className="text-2xl font-semibold mb-4 text-center">{section.year}</h3>
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {section.images.map((img, i) => (
//               <motion.div
//                 key={i}
//                 className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <img src={img} alt="Gallery Image" className="w-full h-64 object-cover" />
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
//                   <FiArrowRight className="text-white text-3xl" />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//           <div className="flex justify-center mt-6">
//             <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition" onClick={() => setSelectedYear(section.year)}>
//               View More {section.year} Gallery
//             </button>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Gallery;


import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/images/2024/alumni-meet/1.jpg';
import img2 from '../assets/images/2024/performance/1.jpg';
import img3 from '../assets/images/2024/sports-day/4.jpg';

const Gallery = () => {
  const navigate = useNavigate();

  const galleryData = [
    {
      year: "2024",
      images: [img1, img2, img3],
      categories: ['alumni-meet', 'performance', 'sports-day'],
    },
    {
      year: "2023",
      images: [img1, img2, img3],
      categories: ['alumni-meet', 'performance', 'sports-day'],
    },
    {
      year: "2022 & Earlier",
      images: [img1, img2, img3],
      categories: ['alumni-meet', 'performance', 'sports-day'],
    },
    {
      year: "Workshops & Technical Events",
      images: ["/images/workshop1.jpg", "/images/workshop2.jpg", "/images/workshop3.jpg"],
      categories: ['workshop1', 'workshop2', 'workshop3'],
    },
  ];

  const handleNavigate = (year, category) => {
    let path = "";
    if (year === "2024") path = "/gallery2024";
    else if (year === "2023") path = "/gallery2023";
    else if (year === "2022 & Earlier") path = "/gallery2022-earlier";
    else if (year === "Workshops & Technical Events") path = "/workshops_tech";

    navigate(`${path}?category=${category}`);
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 className="text-4xl font-bold mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Event Gallery
        </motion.h2>
      </div>

      {galleryData.map((section, index) => (
        <div key={index} className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">{section.year}</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {section.images.map((img, i) => (
              <motion.div
                key={i}
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleNavigate(section.year, section.categories[i] || 'all')}
              >
                <img src={img} alt="Gallery Image" className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <FiArrowRight className="text-white text-3xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => handleNavigate(section.year, 'all')}
            >
              View More {section.year} Gallery
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
