"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
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
  )
}

export default function FounderSection() {
  return (
    <div className="w-full flex justify-center items-center bg-white dark:bg-neutral-950 p-8 md:p-16">
      <Card className="w-full max-w-3xl mx-auto p-4 bg-neutral-100 dark:bg-neutral-900 border border-neutral-900 dark:border-neutral-100 shadow-lg rounded-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center md:items-start">
          <CardHeader className="text-left px-3 lg:w-1/2">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-6xl font-bold tracking-tighter mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
                  Founder
                </span>
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-medium mb-4 text-gray-700 dark:text-gray-300">
                Maurizio Ansaldi Arena
              </p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Founder and owner of the Studio. A Certified Public Accountant registered in the Milan Register at no.
                10641 Section A since 1991, and on the ICAEW register in London for the Commonwealth at n. 8767902. He has
                specialized training with a Master's in Corporate Finance, is a startup expert, and serves as a Mentor on
                behalf of university incubators and as a partner in investor associations.
              </p>
            </motion.div>
          </CardHeader>

          <CardBody className="flex justify-center my-auto md:justify-start md:w-1/2 lg:ml-12">
            <Image
              src="/founder.jpg"
              alt="Maurizio Ansaldi Arena"
              className="rounded-lg object-cover w-full h-64 md:h-auto mx-auto"
            />
          </CardBody>
        </div>
      </Card>
    </div>
  );
}

