import { motion } from 'framer-motion';
import { FiArrowRight,FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/2024/alumni-meet/3.jpg';
import img2 from '../assets/images/2024/performance/1.jpg';
import img3 from '../assets/images/2024/sports-day/4.jpg';

import img4 from '../assets/images/2023/alumni-meet/1.jpg';
import img5 from '../assets/images/2023/performance/7.jpg';
import img6 from '../assets/images/2023/sports-day/5.jpg';

import img7 from '../assets/images/2022_earlier/alumni-meet/1.jpg';
import img8 from '../assets/images/2022_earlier/performance/5.jpg';
import img9 from '../assets/images/2022_earlier/sports-day/11.jpg';

import I1 from '../assets/images/campus-pulse/first/1.jpg'
import I2 from '../assets/images/campus-pulse/second/1.jpg'
import I3 from '../assets/images/campus-pulse/third/compressed-1.jpg'
import I4 from '../assets/images/campus-pulse/fourth/compressed-1.jpg'
const Gallery = () => {
  const campusimage = [
    {  image: I1 },
    { image: I2 },
    { image: I3 },
    {image:I4},
]
  const navigate = useNavigate();

  const galleryData = [
    {
      year: "2024",
      images: [img1, img2, img3],
      categories: ['alumni-meet', 'performance', 'sports-day'],
    },
    {
      year: "2023",
      images: [img4, img5, img6],
      categories: ['alumni-meet', 'performance', 'sports-day'],
    },
    {
      year: "2022 & Earlier",
      images: [img7, img8, img9],
      categories: ['alumni-meet', 'performance', 'sports-day'],
    },
    // {
    //   year: "Workshops & Technical Events",
    //   images: [img1, img2, img3],
    //   categories: ['robotics-workshop', 'coding-competition', 'research-symposium'],
    // },
  ];

  const handleNavigate = (year, category) => {
    let path = "";
    switch(year) {
      case "2024": path = "/gallery2024"; break;
      case "2023": path = "/gallery2023"; break;
      case "2022 & Earlier": path = "/gallery2022-earlier"; break;
      // case "Workshops & Technical Events": path = "/tech-gallery"; break;
      default: path = "/gallery";
    }
    navigate(`${path}?category=${category}`);
  };

  return (
    <section id="gallery-page" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/" className="flex items-center gap-2 text-white hover:text-gray-300 mb-12">
              <FiArrowLeft className="text-xl" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </motion.div>

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-4xl font-bold mb-4">Institute Gallery</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Relive our institution's memorable moments through the years
          </p>
        </motion.div>

        {galleryData.map((section, index) => (
          <div key={index} className="mb-20">
            <motion.h2 
              className="text-3xl font-semibold mb-8 text-center text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {section.year}
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {section.images.map((img, i) => (
                <motion.div
                  key={i}
                  className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  onClick={() => handleNavigate(section.year, section.categories[i])}
                >
                  <img 
                    src={img} 
                    alt={`Gallery - ${section.year} - ${section.categories[i]}`} 
                    className="w-full h-72 object-cover transform transition-transform group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6 transition-opacity">
                    <div className="flex items-center gap-2 text-white">
                      <span className="font-medium">View {section.categories[i].replace(/-/g, ' ')}</span>
                      <FiArrowRight className="text-lg" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex justify-center mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <button
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-medium transition-all flex items-center gap-2"
                onClick={() => handleNavigate(section.year, 'all')}
              >
                Explore Full {section.year} Collection
                <FiArrowRight className="text-lg" />
              </button>
            </motion.div>
          </div>
        ))}
        <motion.section
                className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black text-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl font-extrabold mb-10 font-inter tracking-wide">Campus Pulse</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {campusimage.map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ scale: 1.1 }}
                                className="aspect-square bg-gray-800 rounded-2xl shadow-lg cursor-pointer flex items-center justify-center transition-transform duration-300 hover:bg-gray-700"
                            >
                                {/* <FiImage className="text-4xl text-light/50" /> */}
                                <img className='w-full h-full rounded-2xl' src={item.image} alt="image"></img>
                            </motion.div>
                        ))}
                    </div>

                    <Link to='/campus-pulse'>
                    <button className="bg-blue-600 text-white px-10 py-3 text-lg rounded-full shadow-md hover:bg-blue-500 transition-all cursor-pointer">
                        Explore Full Gallery
                    </button>
                    </Link>
                    
                </div>
            </motion.section>
      </div>
    </section>
  );
};

export default Gallery;