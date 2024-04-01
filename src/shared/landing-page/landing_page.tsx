import { FunctionComponent, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import graph from "/1.jpeg";
import graph2 from "/2.jpeg";
import { MixInfiniteMovingLayoutGrid } from "../../ui/mix-infinite-moving-layout-grid";
import Countdown from "react-countdown";
import { SinglePhoto } from "../components/single_photo";
import AOS from "aos";
import "aos/dist/aos.css";

const words = "Family and Friends";

const cards = [
  {
    id: 1,
    className: "col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    className: "col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    className: "col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    className: "col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const togglePlay = () => {
    const audioElement = document.getElementById("audio") as HTMLAudioElement;

    if (isPlaying) {
      audioElement?.pause();
    } else {
      audioElement?.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
    togglePlay();
  };

  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-between overflow-hidden shadow-md">
      {!isUnlocked ? (
        <div className="bg-white fixed h-screen w-screen top-0 left-0 z-[112] flex justify-center items-center __className_81562d">
          <div className="w-full h-screen max-w-md bg-beige relative">
            <div className="flex flex-col items-center justify-center h-[40rem]">
              <div className="absolute w-full bottom-0 left-0 z-[69] bg-beige"></div>
              <img
                src={graph}
                alt="Logo"
                className="absolute h-full w-full top-0 left-0 z-[68] object-cover"
              />
              <div className="absolute z-[70] bottom-0 left-0 pb-32 w-full text-white">
                <div className="w-full text-sm font-normal text-center overflow-hidden font-commuters-sans">
                  <div>Hello</div>
                </div>
                <div className="w-full text-center text-4xl mb-4 overflow-hidden font-normal tracking-[.64px] flex items-center justify-center">
                  <TextGenerateEffect words={words} className="text-white" />
                </div>
                <div className="text-white cursor-pointer overflow-hidden flex items-center justify-center">
                  <button
                    className="px-4 py-2 backdrop-blur-sm border border-white rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200 text-white"
                    onClick={handleUnlock}
                  >
                    OPEN INVITATION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-screen relative antialiased">
            <div className="flex flex-col items-center justify-center h-[40rem]">
              <img
                src={graph2}
                alt="Logo"
                className="absolute h-full w-full top-0 left-0 z-[68] object-cover origin-right"
              />
              <div className="absolute z-[70] top-0 left-0 pt-24 w-full text-white">
                <div className="w-full text-sm font-normal text-center overflow-hidden font-commuters-sans">
                  <div>THE WEDDING OF</div>
                </div>
                <div className="w-full text-center text-4xl mt-4 overflow-hidden font-normal tracking-[.64px] flex items-center justify-center">
                  <div>Naufal Alghifary</div>
                </div>
                <div className="w-full text-sm font-normal mt-4 text-center overflow-hidden font-commuters-sans">
                  <div>AND</div>
                </div>
                <div className="w-full text-center text-4xl mt-4 overflow-hidden font-normal tracking-[.64px] flex items-center justify-center">
                  <div>Sang Mempelai Wanita</div>
                </div>
                <div className="w-full text-sm font-normal text-center overflow-hidden font-commuters-sans">
                  <div>28 . 04 . 2024</div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md relative">
            <div className="m-auto left-0 right-0 mt-8 -mb-16 py-8 px-12">
              <div className="minimalistMagazine_openingContainer__9u6yY __className_44b83f">
                <div className="w-full flex flex-col gap-16 items-center justify-center">
                  <div className="text-center text-3xl text-darker-grey">
                    QS. Ar-Rum : 21
                  </div>
                  <div className="text-center text-lg text-darker-grey">
                    "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                    menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                    agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                    menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
                    yang demikian itu benar-benar terdapat tanda-tanda
                    (kebesaran Allah) bagi kaum yang berpikir."
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SinglePhoto gender="wanita" ig="isi aja" name="wanita" />
          <div className="absolute m-auto left-0 right-0 mt-14">
            <div className="text-6xl font-great-vibes text-center">&</div>
          </div>
          <SinglePhoto gender="pria" ig="isi aja" name="Naufal Alghifary" />
          <div
            className="pt-8 w-full"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <Countdown
              date={new Date(2024, 3, 28)}
              renderer={(props) => (
                <div className="">
                  <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16">
                    <div className="flex justify-center gap-3 sm:gap-2">
                      <div className="flex flex-col gap-5 relative">
                        <div className="h-12 w-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex justify-between items-center bg-[#343650] rounded-lg">
                          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#FFF]"></div>
                          <span className="lg:text-3xl md:text-lg sm:text-md xs:text-xs font-semibold text-slate-100">
                            {props?.days}
                          </span>
                          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#FFF]"></div>
                        </div>
                        <span className="text-emerald-950 text-xs sm:text-lg text-center capitalize">
                          {props?.days == 1 ? "Day" : "Days"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-5 relative">
                        <div className="h-12 w-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex justify-between items-center bg-[#343650] rounded-lg">
                          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#FFF]"></div>
                          <span className="lg:text-3xl md:text-lg sm:text-md xs:text-xs font-semibold text-slate-100">
                            {props?.hours}
                          </span>
                          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#FFF]"></div>
                        </div>
                        <span className="text-emerald-950 text-xs sm:text-lg text-center capitalize">
                          {props?.hours == 1 ? "Hour" : "Hours"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-5 relative">
                        <div className="h-12 w-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex justify-between items-center bg-[#343650] rounded-lg">
                          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#FFF]"></div>
                          <span className="lg:text-3xl md:text-lg sm:text-md xs:text-xs font-semibold text-slate-100">
                            {props?.minutes}
                          </span>
                          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#FFF]"></div>
                        </div>
                        <span className="text-emerald-950 text-xs sm:text-lg text-center capitalize">
                          {props?.minutes == 1 ? "Minute" : "Minutes"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-5 relative">
                        <div className="h-12 w-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex justify-between items-center bg-[#343650] rounded-lg">
                          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#FFF]"></div>
                          <span className="lg:text-3xl md:text-lg sm:text-md xs:text-xs font-semibold text-slate-100">
                            {props?.seconds}
                          </span>
                          <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#FFF]"></div>
                        </div>
                        <span className="text-emerald-950 text-xs sm:text-lg text-center capitalize">
                          {props?.seconds == 1 ? "Second" : "Seconds"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
            <div className="minimalistMagazine_LocationDetailContainer__qK6qn __className_44b83f !text-darker-grey !bg-grayish-orange w-full">
              <div className="h-full w-full flex flex-col justify-center items-center py-5">
                <div className="px-6 py-8 w-full text-center flex flex-col items-center">
                  <div className="text-2xl font-lagunac text-center mb-10 magazine_LocationTitle__upeqi">
                    <div>AKAD</div>
                  </div>
                  <div className="text-sm font-lagunac mb-2">
                    MINGGU, 28 APRIL 2024
                  </div>
                  <div className="text-base font-lagunac mb-2">
                    ・09:00 WIB・
                  </div>
                  <div className="text-xs">
                    <a
                      className="underline text-light-burgundy font-medium __className_e42d7b"
                      href="https://www.instagram.com/byintanina/"
                      rel="noopener"
                      target="_blank"
                    >
                      Lihat Live Streaming
                    </a>
                  </div>
                </div>
                <div className="px-6 py-8 w-full text-center flex flex-col items-center">
                  <div className="text-2xl font-lagunac text-center mb-10 magazine_LocationTitle__upeqi">
                    <div>RESEPSI</div>
                  </div>
                  <div className="text-sm font-lagunac mb-2">
                    MINGGU, 28 APRIL 2024
                  </div>
                  <div className="text-base font-lagunac mb-2">
                    ・12:30 - 17:00 WIB・
                  </div>
                  <div className="text-xs">
                    <a
                      className="underline text-light-burgundy font-medium __className_e42d7b"
                      href="https://www.instagram.com/byintanina/"
                      rel="noopener"
                      target="_blank"
                    >
                      Tambahkan ke Kalender
                    </a>
                  </div>
                </div>
                <div className="px-6 py-8 w-full text-center flex flex-col items-center">
                  <div className="text-2xl font-lagunac text-center mb-10">
                    <div>LOKASI</div>
                  </div>
                  <div className="mb-2 text-sm font-normal">
                    Mason Pine Hotel
                  </div>
                  <div className="text-base font-lagunac mb-2">
                    ・12:30 - 17:00 WIB・
                  </div>
                  <div className="text-xs text-gold mb-6 px-6 leading-normal break-words">
                    Jl. H.R. Soebrantas Km 8,5 Kotak Pos, 1027,
                    <br />
                    Sidomulyo Bar., Kec. Tampan, Kota Pekanbaru, Riau 28294
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative items-center">
            <div className="text-2xl font-lagunac text-center">
              <div>GALLERY</div>
            </div>
            <MixInfiniteMovingLayoutGrid cards={cards} />
            {/* <ParallaxScroll images={images} /> */}
          </div>
        </motion.div>
      )}
      <audio id="audio" src="/bg.mp3" loop />
    </div>
  );
};

export default LandingPage;
