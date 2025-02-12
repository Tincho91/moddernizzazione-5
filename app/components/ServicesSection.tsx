"use client";

import { Card, CardHeader, CardBody, Button } from "@heroui/react";
import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} ${Math.sin(i / 5) * 100 + 100} C-${380 - i * 5 * position} ${Math.sin(i / 5) * 50 + 150} -${312 - i * 5 * position} ${Math.sin(i / 5) * 50 + 150} ${152 - i * 5 * position} ${Math.sin(i / 5) * 100 + 100} C${616 - i * 5 * position} ${Math.sin(i / 5) * 50 + 150} ${684 - i * 5 * position} ${Math.sin(i / 5) * 50 + 150} ${684 - i * 5 * position} ${Math.sin(i / 5) * 100 + 100}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center bg-white dark:bg-neutral-950 p-8 md:p-16">
      <div className="absolute inset-0 z-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Contenedor del Título y las Cards */}
      <div className="w-full max-w-screen-xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16 z-10 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-6xl font-bold tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
                Consulting Services
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Contenedor de las cards */}
        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {/* Consulting Services Card */}
            <Card className="p-6 md:p-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-900 dark:border-neutral-100 shadow-lg rounded-xl z-10">
              <CardHeader className="text-center">
                <h3 className="text-3xl sm:text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300">
                  Consulting Services
                </h3>
              </CardHeader>
              <CardBody className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                FOR COMPANIES AND STARTUPS<br />
                Transform your startup into a recognized success. Thanks to our many years of experience, we offer strategic and financial consulting that lays the groundwork for sustainable growth and access to essential funding.
              </CardBody>
              <div className="flex justify-center">
                <Button className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 py-2 px-4 rounded-md">
                  Learn More
                </Button>
              </div>
            </Card>

            {/* For Investors Card */}
            <Card className="p-6 md:p-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-900 dark:border-neutral-100 shadow-lg rounded-xl z-10">
              <CardHeader className="text-center">
                <h3 className="text-3xl sm:text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300">
                  For Investors
                </h3>
              </CardHeader>
              <CardBody className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                FOR INVESTORS, FUNDS, AND PRIVATE EQUITY<br />
                Maximize the return on your investments with our specialized consulting in M&A and corporate investment strategies. We assist investors, funds, and private equity firms in identifying, evaluating, and capitalizing on investment opportunities with a tailored approach.
              </CardBody>
              <div className="flex justify-center">
                <Button className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 py-2 px-4 rounded-md">
                  Learn More
                </Button>
              </div>
            </Card>

            {/* Professional Firms Card */}
            <Card className="p-6 md:p-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-900 dark:border-neutral-100 shadow-lg rounded-xl z-10">
              <CardHeader className="text-center">
                <h3 className="text-3xl sm:text-3xl font-bold mb-4 text-gray-700 dark:text-gray-300">
                  For Professional Firms
                </h3>
              </CardHeader>
              <CardBody className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                FOR PROFESSIONAL FIRMS<br />
                Expand your offerings with high-level financial consulting services. Collaborate with us to integrate your range of services with our specialization in corporate finance and M&A operations, ensuring optimal management of your clients&apos; financial needs.
              </CardBody>
              <div className="flex justify-center">
                <Button className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 py-2 px-4 rounded-md">
                  Learn More
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}