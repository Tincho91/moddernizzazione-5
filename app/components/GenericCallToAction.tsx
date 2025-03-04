"use client";

import { useLanguage } from "@/app/LanguageContext";
import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, Button } from "@heroui/react";

interface CallToActionProps {
  titleKey?: string;
  textKeys: string[];
  buttonKey: string;
}

const CallToAction = ({ titleKey, textKeys, buttonKey }: CallToActionProps) => {
  const { t } = useLanguage();

  return (
    <div className="w-full flex justify-center items-center bg-primary-light dark:bg-primary-dark p-8 md:p-16">
      <Card className="w-full max-w-3xl mx-auto p-6 bg-secondary-light dark:bg-secondary-dark border border-border-light dark:border-border-dark shadow-lg rounded-xl overflow-hidden">
        <CardHeader className="text-center px-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-4 text-black dark:text-textMain-dark"
          >
            {textKeys.map((key, index) => (
              <p key={index} className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                {t(key)}
              </p>
            ))}

            {titleKey && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-primary-light dark:from-border-dark dark:to-textMain-dark">
                {t(titleKey)}
              </h2>
            )}
          </motion.div>
        </CardHeader>

        <CardBody className="flex justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button size="lg" className="px-6 py-3 text-lg">
              {t(buttonKey)}
            </Button>
          </motion.div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CallToAction;