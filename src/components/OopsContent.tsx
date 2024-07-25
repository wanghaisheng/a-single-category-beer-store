import { motion } from 'framer-motion';

const OopsContent = () => {
  return (
    <motion.div 
      className="max-w-2xl mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-red-500 mt-10">
        Oops... looks like you clicked something.
      </h1>
      
      <p className="mb-8 text-lg">
        It seems you've stumbled upon a page that doesn't quite exist yet. Don't worry, though – it's all part of the adventure! This website is a <strong className="text-indigo-400">project showcase</strong>, not a real website of Liquid Death.
      </p>
      
      <p className="mb-8 text-lg">
        I'm <strong className="text-indigo-400">Oriol Mont Creus</strong>, the person behind this personal project. Check out my other work and also visit the real Liquid Death website!
      </p>
      
      <div className="flex justify-center space-x-4">
        <a 
          href="/" 
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Go back
        </a>
        <a 
          href="https://liquiddeath.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Visit Liquid Death
        </a>
        <a 
          href="https://bento.me/omont-dev" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Visit my Bento.me
        </a>
      </div>
    </motion.div>
  );
};

export default OopsContent;