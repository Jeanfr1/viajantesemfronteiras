"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const ParallaxScrollSecond = ({
  images,
  className = "",
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start start", "end end"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.floor(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={`relative min-h-[150vh] ${className}`}
      ref={gridRef}
      style={{ zIndex: 10 }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mx-auto max-w-7xl px-4"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "grid",
          alignItems: "center",
        }}
      >
        <motion.div
          style={{ y: translateFirst }}
          className="grid gap-4"
        >
          {firstPart.map((image, idx) => (
            <div key={idx} className="relative h-[40vh] md:h-[350px] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt="thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          style={{ y: translateSecond }}
          className="grid gap-4"
        >
          {secondPart.map((image, idx) => (
            <div key={idx} className="relative h-[40vh] md:h-[350px] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt="thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          style={{ y: translateThird }}
          className="grid gap-4"
        >
          {thirdPart.map((image, idx) => (
            <div key={idx} className="relative h-[40vh] md:h-[350px] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt="thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
