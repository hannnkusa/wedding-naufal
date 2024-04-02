import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../utils/cn";
import AOS from "aos";
import "aos/dist/aos.css";

export function SinglePhoto({
  gender,
  name,
  ig,
}: {
  gender: "pria" | "wanita" | string;
  name: string;
  ig: string;
}) {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  // const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scale = useTransform(scrollYProgress, [0, 1], ["85%", "100%"]);

  const isPria = gender === "pria";

  return (
    // <div className={cn(isPria ? "-translate-y-24" : "")}>
    <div className={cn("pt-24 relative w-full")} ref={containerRef}>
      <div className={cn("w-full relative")}>
        <motion.div style={{ scale, height: "auto" }}>
          <div className="minimalistMagazine_CoupleInfoContainer__zIVZY __className_44b83f">
            <div className="h-full max-w-5xl w-full relative overflow-y-hidden overflow-x-hidden">
              <div
                className={cn(
                  "absolute top-0 left-0 z-10 w-full h-full flex flex-col items-center justify-between"
                  //   isPria ? "-translate-y-24" : ""
                )}
              >
                <div
                  className="mt-16 w-fit font-month-glade text-[40px] font-great-vibes"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <div className="-rotate-[18deg]">
                    {isPria ? "The Groom" : "The Bride"}
                  </div>
                </div>
                <div className="py-10 px-6 flex flex-col gap-10">
                  <div
                    className="text-center font-felixti text-[32px] tracking-[0.96px] text-white"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="900"
                  >
                    {name}
                  </div>
                  <div className="flex flex-col gap-2 py-[10px] px-4  items-center justify-center">
                    <div
                      className="w-fit py-2 px-4 flex gap-2 items-center border-[0.5px] border-slate-300 rounded-lg"
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="800"
                    >
                      <img
                        src="https://res.cloudinary.com/drdikhiur/image/upload/v1697259756/contents/generics/instagram.svg"
                        alt="instagram icon"
                      />
                      <div className="text-xs font-normal __className_44b83f text-white">
                        {ig}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[-32] left-0 overflow-hidden z-0 h-full w-full">
                <img
                  className={cn(
                    "absolute top-0 left-0 object-cover h-screen w-screen",
                    isPria ? "object-left" : ""
                  )}
                  src={isPria ? "/3.jpeg" : "/4.jpeg"}
                  alt="bride or groom portrait pic"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    // </div>
  );
}
