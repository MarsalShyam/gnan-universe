import { motion } from 'framer-motion';
import { FiImage } from 'react-icons/fi';
import HeroSection from '../components/HeroSection';
import Events from '../components/Events';
import Achievements from '../components/Achievements';
import Gallery from '../components/Gallery';
import Organizers from '../components/Organizers';
import Memorabilia from '../components/Memorabillia';
// import CollegeLogo from '../components/CollegeLogo';

const Home = () => {
    return (
        <div className="pt-16"> {/* Offset for fixed navbar */}
        {/* <CollegeLogo/> */}
            <HeroSection />
            <Events />
            <Achievements />
            <Gallery />
            <Organizers />
            <Memorabilia/>

            {/* Memorabilia Section */}
            {/* <motion.section
                className="py-20 px-4 bg-dark"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-light mb-8 font-inter">
                        Campus Pulse
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {[1, 2, 3, 4].map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ scale: 1.05 }}
                                className="aspect-square bg-light/10 rounded-xl cursor-pointer"
                            >
                                <div className="w-full h-full flex items-center justify-center">
                                    <FiImage className="text-3xl text-light/30" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <button className="bg-accent text-light px-8 py-3 rounded-full hover:bg-accent/90 transition-colors">
                        Explore Full Gallery
                    </button>
                </div>
            </motion.section> */}
        </div>
    );
};

export default Home;