import { FunctionComponent } from "react";
import TypewriterEffect from "./typewriter_effect";
import AppButton from "../components/app_button";
import { APP_NAME } from "../../utils/constant";
// import { motion } from "framer-motion";
// import LampContainer from "./lamp_container";

const words = [
  {
    text: "Execute",
  },
  {
    text: "your",
  },
  {
    text: "query",
  },
  {
    text: "with",
  },
  {
    text: `${APP_NAME}.`,
    className: "text-blue-500 dark:text-blue-500",
  },
];

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The tool to talk to your database in human language
      </p>
      <TypewriterEffect words={words} className="my-8" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-10">
        <AppButton label="Signup" href="/signup" variant="sketch" />
        {/* <AppButton label="Login" href="/login" variant="moving-border" /> */}
      </div>
    </div>
    // <LampContainer>
    //   <motion.h1
    //     initial={{ opacity: 0.5, y: 100 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{
    //       delay: 0.3,
    //       duration: 0.8,
    //       ease: "easeInOut",
    //     }}
    //     className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    //   >
    //     Welcome to <br /> Chat DBT
    //   </motion.h1>
    // </LampContainer>
  );
};

export default LandingPage;
