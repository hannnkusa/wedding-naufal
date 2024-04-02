import { useState } from "react";
import { AuroraBackground } from "../../ui/aurora-background";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import AppButton from "../components/app_button";
import { motion } from "framer-motion";
import graph from "/2.jpeg";

const words = "Family and Friends";
interface IntroScreenProps {
  isUnlocked: boolean;
  handleUnlock: () => void;
}

export function IntroScreen({ isUnlocked, handleUnlock }: IntroScreenProps) {
  return (
    <div className="w-full h-screen max-w-5xl bg-beige relative">
      {!isUnlocked ? (
        <div className="flex flex-col items-center justify-center h-[40rem]">
          <img
            src={graph}
            alt="Logo"
            className="absolute h-full w-full top-0 left-0 z-[68] object-cover"
          />
          <div className="absolute z-[70] bottom-0 left-0 pb-32 w-full text-white">
            <p className="text-white text-xs sm:text-base">Hello</p>
            <TextGenerateEffect words={words} className="text-white" />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-10">
              <button
                className="px-4 py-2 backdrop-blur-sm border border-white rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200 text-white"
                onClick={handleUnlock}
              >
                OPEN INVITATION
              </button>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Screen Unlocked!</h2>
        </motion.div>
      )}
    </div>
  );
}
