"use client";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";
import { useEffect, useState } from "react";

// Function to get all image paths from the public/images/moments folder
function getImagePaths() {
  // This is a placeholder array until you add your images
  // Replace these with your actual image paths once you add them
  const imagePaths = [
    "/images/gallery/americas/Cópia de Post Retrato para Instagram Corporativo Simples Azul e Preto (12).png",
    "/images/gallery/americas/IMG_1770.jpg",
    "/images/gallery/americas/IMG_2861.jpeg",
    "/images/gallery/americas/IMG_4391.jpeg",
    "/images/gallery/americas/IMG_5948.jpg",
    "/images/gallery/asia/asia.jpg",
    "/images/gallery/asia/asia2.jpg",
    "/images/gallery/europe/image00027.jpg",
    "/images/gallery/europe/IMG_0314.jpg",
    "/images/gallery/europe/IMG_3633.JPG",
  ];

  return imagePaths;
}

export function GalleryDemo() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Load images when component mounts
    setImages(getImagePaths());
  }, []);

  return <ParallaxScrollSecond images={images} />;
}
