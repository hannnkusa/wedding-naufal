"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

type Card = {
  id: number;
  //   content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const MixInfiniteMovingLayoutGrid = ({
  cards,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  cards: Card[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          //   scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "5s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const handleClick = (card: Card, i: number) => {
    setLastSelected(selected);
    setSelected(card);
    setSelectedIndex(i);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
    setSelectedIndex(0);
  };

  return (
    <div>
      {/* Start Infinite Div */}
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20  max-w-md overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <div
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-64 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]",
            selected?.id && "[animation-play-state:paused]"
          )}
        >
          {/* End Infinite Div */}

          {/* Start Layout Grid */}
          <div className="overflow-visible w-full max-w-md">
            {/* <div className="w-[48rem] h-screen grid md:grid-cols-3"> */}
            <div className="w-[48rem] h-screen p-10 grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 ">
              {cards.map((card, i) => (
                <div key={i} className={cn(card.className, "")}>
                  <motion.div
                    onClick={() => handleClick(card, 0)}
                    className={cn(
                      card.className,
                      "relative overflow-hidden",
                      selected?.id === card.id && selectedIndex === 0
                        ? "hidden"
                        : lastSelected?.id === card.id && selectedIndex === 0
                        ? "z-40 bg-white rounded-xl h-full w-full"
                        : "bg-white rounded-xl h-full w-full"
                    )}
                    layout
                  >
                    <BlurImage card={card} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          {/* End Layout Grid */}
          {/* Start Layout Grid */}
          <div className="overflow-visible w-full max-w-md">
            {/* <div className="w-[48rem] h-screen grid md:grid-cols-3"> */}
            <div className="w-[48rem] h-screen p-10 grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 ">
              {cards.map((card, i) => (
                <div key={i} className={cn(card.className, "")}>
                  <motion.div
                    onClick={() => handleClick(card, 1)}
                    className={cn(
                      card.className,
                      "relative overflow-hidden",
                      selected?.id === card.id && selectedIndex === 1
                        ? "hidden"
                        : lastSelected?.id === card.id && selectedIndex === 1
                        ? "z-40 bg-white rounded-xl h-full w-full"
                        : "bg-white rounded-xl h-full w-full"
                    )}
                    layout
                  >
                    <BlurImage card={card} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          {/* End Layout Grid */}
        </div>
      </div>
      {selected?.id && (
        <SelectedCard selected={selected} lastSelected={lastSelected} />
      )}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-[80]",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.1 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({
  selected,
  lastSelected,
}: {
  selected: Card | null;
  lastSelected: Card | null;
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.div
      className={cn(
        selected?.className,
        "relative overflow-hidden",
        selected?.id
          ? "rounded-lg cursor-pointer absolute inset-0 h-3/4 w-full md:w-3/4 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
          : lastSelected?.id === selected?.id
          ? "z-40 bg-white rounded-xl h-full w-full"
          : "bg-white rounded-xl h-full w-full"
      )}
      layout
    >
      <BlurImage card={selected as Card} />
    </motion.div>
  );
};