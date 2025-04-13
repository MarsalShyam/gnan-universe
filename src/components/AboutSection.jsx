import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-20" id="about">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About Social Media Universe
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          <strong>Social Media Universe</strong> is the official tech and media club of 
          <strong> Gnanamani College of Technology</strong>, founded and guided by our visionary 
          <strong> Vice-Chairperson Ms. Madhuvanthinie Arangannal</strong>. This team is crafted to 
          promote, capture, and showcase all the vibrant moments of our institution at a national and 
          international level.
        </p>
        <p className="text-gray-600 text-base md:text-lg mt-4 leading-relaxed">
          Led by President <strong>Himanshu Raj</strong> and Vice-President <strong>Divya VT</strong>, the 
          team includes units for Editing, Photography, Blogging, Short Films, Content Creation, 
          Strategy, and Social Engagement. Together, they maintain the digital presence of our 
          college through this beautifully crafted gallery website.
        </p>
        <p className="text-gray-600 text-base md:text-lg mt-4 leading-relaxed">
          This platform is a one-stop showcase of our campus infrastructure, academic life, events, 
          sports, training, and alumni memories—helping new students explore and others stay 
          connected.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
