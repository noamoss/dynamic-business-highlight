
import { motion } from "framer-motion";
import { businessData } from "@/data/content";
import { BarChart, Cloud, Paintbrush, Shield } from "lucide-react";

const iconMap = {
  Paintbrush,
  Cloud,
  BarChart,
  Shield,
};

export const ToolsSection = () => {
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
          Tools We Use
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businessData.tools.map((tool, index) => {
            const Icon = iconMap[tool.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-accent-soft rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
