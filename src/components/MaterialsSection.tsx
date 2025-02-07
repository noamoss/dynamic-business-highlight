
import { motion } from "framer-motion";
import { businessData } from "@/data/content";
import { ArrowRight } from "lucide-react";

export const MaterialsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Recommended Materials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessData.materials.map((material, index) => (
            <motion.a
              key={material.title}
              href={material.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="text-sm font-medium text-accent mb-2 block">
                {material.type}
              </span>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                {material.title}
              </h3>
              <p className="text-gray-600 mb-4">{material.description}</p>
              <div className="flex items-center text-accent">
                <span className="mr-2">Learn More</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
