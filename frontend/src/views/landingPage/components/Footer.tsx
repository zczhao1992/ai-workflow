import { Cpu } from "lucide-react";
import { motion } from "framer-motion";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem}>
            <motion.div
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Cpu className="h-5 w-5 text-black" />
              </div>
              <span className="text-xl font-bold">AI-WorkFlow</span>
            </motion.div>
            <p className="text-gray-400">
              The complete platform for LLM operations and deployment.
            </p>
          </motion.div>
          <motion.div variants={staggerItem}>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <motion.li whileHover={{ x: 4 }}>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <a href="#" className="hover:text-white transition-colors">
                  Enterprise
                </a>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={staggerItem}>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <motion.li whileHover={{ x: 4 }}>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <a href="#" className="hover:text-white transition-colors">
                  API Reference
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <a href="#" className="hover:text-white transition-colors">
                  Tutorials
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={staggerItem}>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <motion.li whileHover={{ x: 4 }}>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 4 }}>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">© 2024 LLMOps. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.div whileHover={{ y: -2 }}>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </a>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
