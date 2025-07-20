import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div>
            <motion.div
              className="text-3xl font-bold text-black mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              viewport={{ once: true }}
            >
              99.9%
            </motion.div>
            <div className="text-gray-600">Uptime SLA</div>
          </motion.div>
          <motion.div>
            <motion.div
              className="text-3xl font-bold text-black mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              viewport={{ once: true }}
            >
              50ms
            </motion.div>
            <div className="text-gray-600">Avg Response</div>
          </motion.div>
          <motion.div>
            <motion.div
              className="text-3xl font-bold text-black mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              viewport={{ once: true }}
            >
              10B+
            </motion.div>
            <div className="text-gray-600">API Calls/Month</div>
          </motion.div>
          <motion.div>
            <motion.div
              className="text-3xl font-bold text-black mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
              viewport={{ once: true }}
            >
              500+
            </motion.div>
            <div className="text-gray-600">Enterprise Clients</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
