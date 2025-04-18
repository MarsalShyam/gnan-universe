import { useState } from "react";
import { motion } from "framer-motion";
import { FiImage } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import I1 from '../assets/images/campus-pulse/first/1.jpg'
import I2 from '../assets/images/campus-pulse/second/1.jpg'
import I3 from '../assets/images/campus-pulse/third/compressed-1.jpg'
import I4 from '../assets/images/campus-pulse/fourth/compressed-1.jpg'

export default function Memorabilia() {
    const campusimage = [
        {  image: I1 },
        { image: I2 },
        { image: I3 },
        {image:I4},
    ]

    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
            setEmail("");
        }
    };

    return (
        <>
            {/* Memorabilia Section */}
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
            
            {/* Newsletter Subscription */}
            <motion.section
                className="py-16 px-6 bg-gray-900 text-center text-blue-950"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h3 className="text-3xl font-bold mb-6">Subscribe to GnanMediaUniverse Newsletter</h3>
                <p className="text-light/70 mb-8 text-lg">Stay updated with the latest events, insights, and stories from GnanUniverse.</p>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-2 border-blue-950 px-5 py-3 rounded-full text-white w-72 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg shadow-md hover:bg-blue-500 transition-all">
                        Subscribe
                    </button>
                </form>
                {submitted && (
                    <div className="mt-5 flex items-center justify-center gap-2 text-green-400 text-lg font-semibold">
                        <FaCheckCircle className="text-xl" /> Successfully Subscribed!
                    </div>
                )}
            </motion.section>
                         
            {/* Footer */}
            <footer className="bg-gray-950 py-8 text-center text-light">
                <p className="text-light/60 text-lg">&copy; {new Date().getFullYear()} GnanMediaUniverse. All rights reserved.</p>
            </footer>
        </>
    );
}
