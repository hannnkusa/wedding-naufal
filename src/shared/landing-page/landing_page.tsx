import { FunctionComponent, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../../ui/text-generate-effect";
import graph from "/1.jpeg";
import graph2 from "/2.jpeg";
import graph5 from "/5.jpg";
import { MixInfiniteMovingLayoutGrid } from "../../ui/mix-infinite-moving-layout-grid";
import Countdown from "react-countdown";
import { SinglePhoto } from "../components/single_photo";
import AOS from "aos";
import "aos/dist/aos.css";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/text-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

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

const wishes = [
  {
    name: "Handy",
    wish: "Lu olang mantab",
  },
  {
    name: "Handy",
    wish: "Lu olang mantab",
  },
  {
    name: "Handy",
    wish: "Lu olang mantab",
  },
  {
    name: "Handy",
    wish: "Lu olang mantab",
  },
  {
    name: "Handy",
    wish: "Lu olang mantab",
  },
  {
    name: "Handy",
    wish: "Lu olang mantab",
  },
  {
    name: "Handy",
    wish: "Lu olang mantab",
  },
  {
    name: "Handy",
    wish: "Lu olang mantab",
  },
  {
    name: "Handy",
    wish: "Lu olang mantab",
  },
  {
    name: "Handy",
    wish: "Lu olang mantab",
  },
  {
    name: "Handy",
    wish: "Lu olang mantab",
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

  function redirect(url: string) {
    window.open(url, "_blank");
  }

  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center justify-between overflow-hidden shadow-md __className_44b83f">
      {!isUnlocked ? (
        <div className="bg-white fixed h-screen w-screen top-0 left-0 z-[112] flex justify-center items-center __className_81562d">
          <div className="w-full h-screen max-w-5xl bg-beige relative">
            <div className="flex flex-col items-center justify-center h-[40rem]">
              <div className="absolute w-full bottom-0 left-0 z-[69] bg-beige"></div>
              <img
                src={graph}
                alt="Logo"
                className="absolute top-0 left-0 object-cover h-screen w-screen object-right"
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
                    className="px-4 py-2 backdrop-blur-sm border border-white rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] text-sm transition duration-200 text-white"
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
          <div className="bg-white h-screen w-screen top-0 left-0 z-[112] flex justify-center items-center __className_81562d">
            <div className="w-full h-screen max-w-5xl bg-beige relative">
              <div className="flex flex-col items-center justify-center h-[40rem]">
                <img
                  src={graph2}
                  alt="Logo"
                  className="absolute top-0 left-0 object-cover h-screen w-screen object-left"
                />
                <div className="absolute z-[70] top-0 left-0 pt-24 w-full text-white">
                  <div className="w-full text-xl font-normal text-center overflow-hidden font-commuters-sans">
                    <div>THE WEDDING OF</div>
                  </div>
                  <div className="font-camorant w-full text-center text-4xl mt-4 overflow-hidden font-medium tracking-[.64px] flex items-center justify-center">
                    <div>Aziza Ayu Nurjannah</div>
                  </div>
                  <div className="font-camorant w-full text-2xl font-normal mt-2 text-center overflow-hidden font-commuters-sans">
                    <div>&</div>
                  </div>
                  <div className="font-camorant w-full text-center text-4xl mt-2 overflow-hidden font-medium tracking-[.64px] flex items-center justify-center">
                    <div>Naufal Al Giffary</div>
                  </div>
                  <div className="w-full text-sm font-normal text-center overflow-hidden font-commuters-sans">
                    <div>28 . 04 . 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-screen top-0 left-0 z-[112] flex justify-center items-center __className_81562d">
            <div className="max-w-5xl relative">
              <div className="m-auto left-0 right-0 mt-8 -mb-32 py-8 px-12">
                <div className="minimalistMagazine_openingContainer__9u6yY __className_44b83f">
                  <div className="w-full flex flex-col gap-16 items-center justify-center">
                    <div className="text-center text-3xl text-darker-grey">
                      QS. Ar-Rum : 21
                    </div>
                    <div className="text-center text-lg text-darker-grey">
                      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                      menciptakan pasangan-pasangan untukmu dari jenismu
                      sendiri, agar kamu cenderung dan merasa tenteram
                      kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
                      sayang. Sungguh, pada yang demikian itu benar-benar
                      terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
                      berpikir."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-screen top-0 left-0 z-[112] flex justify-center items-center">
            <div className="w-full max-w-md">
              <div className="flex flex-col items-center justify-center">
                <SinglePhoto
                  gender="wanita"
                  ig="@azizaayu"
                  name="Aziza Ayu Nurjannah"
                />
                <div className="absolute m-auto left-0 right-0 mt-44">
                  <div className="text-6xl font-great-vibes text-center">&</div>
                </div>
                <SinglePhoto
                  gender="pria"
                  ig="@naufalgiff"
                  name="Naufal Al Giffary"
                />
              </div>
            </div>
          </div>
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
            <div className="minimalistMagazine_LocationDetailContainer__qK6qn __className_44b83f relative text-navy bg-white">
              <div className="h-full w-full flex flex-col justify-center items-center py-5">
                <div className="px-6 py-8 w-full text-center flex flex-col items-center">
                  <div className="text-2xl font-camorant font-bold text-center mb-4 magazine_LocationTitle__upeqi">
                    <div>AKAD</div>
                    <div className="border-t-2 mt-0  border-blue-950" />
                  </div>
                  <div className="text-base font-semibold font-camorantInfant mb-2">
                    Minggu, 28 April 2024
                  </div>
                  <div className="text-base font-camorantInfant font-semibold mb-2">
                    11.00 - 14.00 WIB
                  </div>
                </div>
                <div className="px-6 py-8 w-full text-center flex flex-col items-center">
                  <div className="text-2xl font-camorant font-bold text-center mb-4 magazine_LocationTitle__upeqi">
                    <div>RESEPSI</div>
                    <div className="border-t-2 mt-0  border-blue-950" />
                  </div>
                  <div className="text-base font-semibold font-camorantInfant mb-2">
                    Minggu, 28 April 2024
                  </div>
                  <div className="text-base font-camorantInfant font-semibold mb-2">
                    11.00 - 14.00 WIB
                  </div>
                </div>
                <div className="px-6 py-8 w-full text-center flex flex-col items-center">
                  <div className="text-2xl font-camorant font-bold text-center mb-4">
                    <div>LOKASI</div>
                    <div className="border-t-2 mt-0  border-blue-950" />
                  </div>
                  <div className="font-camorantInfant mb-2 font-semibold text-base">
                    Bale Dayang Sumbi, ITENAS
                  </div>
                  <div className="font-camorantInfant text-base text-gold mb-6 px-6 leading-normal break-words">
                    Jl. P.H.H Mustofa No. 23, Bandung
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 top-[13.5%] overflow-hidden">
                {/* <img
                  className="h-[166px] max-w-none -rotate-6 origin-right"
                  src="https://res.cloudinary.com/drdikhiur/image/upload/v1707703806/contents/henri-jennifer/vectors/location-flower-right_pjbc7j.png"
                  alt="flower"
                /> */}
                <motion.img
                  className="h-[166px] max-w-none -rotate-6 origin-right"
                  src="https://res.cloudinary.com/drdikhiur/image/upload/v1707703806/contents/henri-jennifer/vectors/location-flower-right_pjbc7j.png"
                  alt="flower"
                  animate={{
                    rotate: [20, 0, -9, 0, 20],
                  }}
                  transition={{ repeat: Infinity, duration: 6 }}
                />
              </div>
              <div className="flower absolute right-0 bottom-0 h-[15.31vh] z-0"></div>
              <div className="absolute -left-14 bottom-[25%] overflow-hidden">
                <motion.img
                  className="h-[166px] max-w-none -rotate-6 origin-left"
                  src="https://res.cloudinary.com/drdikhiur/image/upload/v1707703806/contents/henri-jennifer/vectors/location-flower-left_o29byj.png"
                  alt="flower"
                  animate={{
                    rotate: [20, 0, -9, 0, 20],
                  }}
                  transition={{ repeat: Infinity, duration: 6 }}
                />
              </div>
            </div>
          </div>
          <div className="w-screen top-0 left-0 z-[112] flex justify-center items-center">
            <div className="w-full max-w-5xl">
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-start">
                  <div className="font-camorant text-4xl text-center">
                    Gallery
                  </div>
                  <div className="w-2/6 border-t-2 mt-2 mb-4 border-blue-950" />
                </div>
                <div className="relative">
                  <MixInfiniteMovingLayoutGrid cards={cards} />
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 flex flex-col items-center justify-start">
            <div className="font-camorant text-4xl text-center">RSVP</div>
            <div className="w-1/12 border-t-2 mt-2 mb-10 border-blue-950" />

            <form className="w-screen px-5">
              <Input
                className="mb-4"
                id="name"
                placeholder="Nama"
                type="text"
              />
              <Textarea
                className="mb-4 resize-none"
                id="wishes"
                placeholder="Ucapan"
                rows={8}
              />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Konfirmasi Kehadiran" />
                </SelectTrigger>
                <SelectContent className="bottom-0">
                  <SelectItem value="Hadir">Hadir</SelectItem>
                  <SelectItem value="Tidak Hadir">Tidak Hadir</SelectItem>
                </SelectContent>
              </Select>
              <button
                className="text-xs mt-4 bg-gradient-to-br relative group/btn from-[#343650] to-[#343650] block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Berikan Ucapan
              </button>
            </form>
          </div>
          <div className="bg-grayish-orange relative h-fit w-full pb-5 pt-20 px-5 z-[1] text-navy __className_0388d3">
            <div className="flower absolute left-0 top-0 h-[15.31vh] z-0">
              <img
                className="h-full max-w-none opacity-70"
                src="https://res.cloudinary.com/drdikhiur/image/upload/v1707710719/contents/henri-jennifer/vectors/wishes-flower-top_se0isg.png"
                alt="dan"
              />
            </div>
            <div className="py-5 flex flex-col items-center justify-start">
              <div className="font-camorant text-4xl font-lagunac text-center">
                WISHES
              </div>
              <div className="w-1/5 border-t-2 mt-2 mb-6 border-blue-950" />
            </div>
            <div className="relative" style={{ opacity: 1, transform: "none" }}>
              <div
                style={{ position: "inherit", zIndex: 2 }}
                className="flex flex-col space-y-6 overflow-y-auto overflow-x-hidden max-h-96 no-scrollbar relative"
              >
                {wishes.map((wish) => (
                  <div className="break-words rounded-lg minimalistMagazine_WishesCard__NW7F7">
                    <div className="mb-3 text-xs font-medium flex gap-1 justify-center">
                      <span className="font-bold">{wish.name}</span>
                    </div>
                    <div>
                      {/* {wish.wish} */}
                      Happy wedding bro Henri and Jennifer...akhirnya bro...
                      best wish you all the best...
                    </div>
                  </div>
                ))}
              </div>
              <div className="scroll-icon absolute bottom-[-25px] left-1/2 -translate-x-1/2 z-10 rotate-180">
                <img
                  className=" h-[40px]"
                  src="https://www.sepasangselamanya.com/scroll-icon-gold.gif"
                  alt="scroll-icon"
                />
              </div>
            </div>
            <div className="flower absolute right-0 bottom-0 h-[15.31vh] z-0">
              <img
                className="h-full max-w-none opacity-70"
                src="https://res.cloudinary.com/drdikhiur/image/upload/v1707710719/contents/henri-jennifer/vectors/wishes-flower-bottom_fxymsf.png"
                alt="flower"
              />
            </div>
          </div>
          <section className="bg-grayish-orange relative h-fit w-screen pt-20 pb-5 px-5 z-[2] text-darker-grey">
            <div className="py-5 flex flex-col items-center justify-start">
              <div className="font-camorant text-4xl text-center">
                Hadiah Pernikahan
              </div>
              <div className="w-1/5 border-t-2 mt-2 mb-6 border-blue-950" />
              <div className="text-sm text-center w-3/4">
                Doa restu yang kami terima sangat berarti, namun jika memberi
                merupakan tanda kasih, tentunya semakin melengkapi kebahagiaan
                kami.
              </div>
              <div
                className="w-[350px] text-center mt-8 max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
                style={{
                  background:
                    "linear-gradient(180deg, var(--slate-700), var(--slate-800)",
                }}
              >
                <blockquote>
                  <div className="mb-3 relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                    BCA
                  </div>
                  <div className="font-normal relative z-20 text-sm leading-[1.6] text-gray-100">
                    8455780141
                  </div>
                  <div className="font-semibold relative z-20 text-sm leading-[1.6] text-gray-100">
                    <span className="font-thin">a.n </span>
                    Aziza Ayu Nurjannah
                  </div>
                </blockquote>
              </div>
            </div>
          </section>
          <div className="bg-white relative h-fit w-full overflow-hidden __className_0388d3">
            <div className="flex flex-col h-full">
              <img
                className="object-cover object-center h-96 w-full"
                src="/5.jpg"
                alt="cute pic"
              />
              <div
                className="absolute right-0 top-0 text-right p-14 flex flex-col justify-center items-center h-full"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="text-white text-center text-xl text-darker-grey mb-12">
                  QS. Ar-Rum : 21
                </div>
                <div className="text-white text-center text-md text-darker-grey">
                  "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                  menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                  agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                  menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
                  yang demikian itu benar-benar terdapat tanda-tanda (kebesaran
                  Allah) bagi kaum yang berpikir."
                </div>
              </div>
            </div>
          </div>
          <div className="group fixed bottom-3 left-0 p-3 flex items-end justify-start w-24 h-start z-50 ">
            <div
              onClick={togglePlay}
              className="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 22 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              )}
            </div>
          </div>
        </motion.div>
      )}
      <footer
        style={{
          background:
            "linear-gradient(180deg, var(--slate-700), var(--slate-800)",
        }}
        className="relative w-full text-white"
      >
        <div className="px-5 mb-5 flex w-full h-full flex flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <div className="mb-4 text-center 0 md:mb-0">
            <div className="text-xs">Crafted by</div>
            <div>Handy Kusuma</div>
          </div>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <div
              className="opacity-80 transition-opacity hover:opacity-100"
              onClick={() => redirect("https://www.instagram.com/hannnkusa/")}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div
              className="opacity-80 transition-opacity hover:opacity-100"
              onClick={() => redirect("https://github.com/hannnkusa")}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </footer>
      <audio id="audio" src="/bg.mp3" loop />
    </div>
  );
};

export default LandingPage;
