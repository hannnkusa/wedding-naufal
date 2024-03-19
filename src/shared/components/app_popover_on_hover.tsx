"use client";
import { FunctionComponent, ReactNode } from "react";
import { motion } from "framer-motion";
import { transition } from "../../utils/constants";
import clsx from "clsx";

interface AppPopoverOnHoverProps {
  children: ReactNode;
  className?: string;
}

const AppPopoverOnHover: FunctionComponent<AppPopoverOnHoverProps> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={transition}
    >
      <div
        className={clsx(
          "absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2",
          className
        )}
      >
        <motion.div
          transition={transition}
          layoutId="active" // layoutId ensures smooth animation
          className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
        >
          <motion.div
            layout // layout ensures smooth animation
            className="w-max h-full p-4"
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppPopoverOnHover;
