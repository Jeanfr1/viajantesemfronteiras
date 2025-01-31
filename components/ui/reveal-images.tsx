"use client";

import { cn } from "@/lib/utils";
import Image from "next/image"; // Ensure Image is imported from next/image

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

export function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative h-fit w-fit overflow-visible py-8">
      <h1 className="text-7xl font-black text-white transition-all duration-500 group-hover:opacity-40">
        {text}
      </h1>
      <div className={container}>
        <div className={effect}>
          <Image
                alt={images[1].alt}
                src={images[1].src}
                className="h-full w-full object-cover"
                width={500}
                height={500}
/>
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12",
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "Adventure",
      images: [
        {
          src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&auto=format&fit=crop&q=60",
          alt: "Mountain adventure",
        },
        {
          src: "https://images.unsplash.com/photo-1682687221175-7b5feba8f54b?w=500&auto=format&fit=crop&q=60",
          alt: "Hiking adventure",
        },
      ],
    },
    {
      text: "Freedom",
      images: [
        {
          src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60",
          alt: "Beach freedom",
        },
        {
          src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60",
          alt: "Mountain freedom",
        },
      ],
    },
    {
      text: "Discovery",
      images: [
        {
          src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&auto=format&fit=crop&q=60",
          alt: "Cultural discovery",
        },
        {
          src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60",
          alt: "Nature discovery",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-1">
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}
