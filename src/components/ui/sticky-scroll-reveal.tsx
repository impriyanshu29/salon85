"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/util";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string | any;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    let closestBreakpointIndex = activeCard;

    // Only update the active card if the scroll passes a certain threshold.
    if (latest > cardsBreakpoints[activeCard + 1] && activeCard < cardLength - 1) {
      closestBreakpointIndex = activeCard + 1;
    } else if (latest < cardsBreakpoints[activeCard] && activeCard > 0) {
      closestBreakpointIndex = activeCard - 1;
    }

    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="h-[30rem] bg-gradient-to-br bg-header dark:from-zinc-900 dark:to-gray-900 shadow-xl overflow-y-auto flex justify-center relative space-x-10 rounded-lg p-3 md:p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                className="text-lg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-header sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
