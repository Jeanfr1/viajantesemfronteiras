"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Twitter, Plane, Map, Compass, TreePalm as PalmTree, Mountain, Briefcase as Suitcase, Globe, Camera } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    icon: Instagram,
    href: "#",
    color: "hover:text-pink-500",
    label: "Instagram"
  },
  {
    icon: Twitter,
    href: "#",
    color: "hover:text-blue-400",
    label: "Twitter"
  },
  {
    icon: Linkedin,
    href: "#",
    color: "hover:text-blue-600",
    label: "LinkedIn"
  },
  {
    icon: Youtube,
    href: "#",
    color: "hover:text-red-600",
    label: "YouTube"
  }
];

const backgroundIcons = [
  { icon: Plane, delay: 0 },
  { icon: Map, delay: 1 },
  { icon: Compass, delay: 2 },
  { icon: PalmTree, delay: 3 },
  { icon: Mountain, delay: 4 },
  { icon: Suitcase, delay: 5 },
  { icon: Globe, delay: 6 },
  { icon: Camera, delay: 7 }
];

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const rotatingAnimation = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-secondary">
      {/* Background Icons */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="relative w-full h-full">
          {backgroundIcons.map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${(index * 15) % 100}%`,
                top: `${(index * 20) % 80}%`
              }}
              initial="initial"
              animate="animate"
              variants={index % 2 === 0 ? floatingAnimation : rotatingAnimation}
            >
              <Icon.icon className="w-16 h-16 text-black" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-6 border-t border-border pt-8"
        >
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  href={social.href}
                  className={`block transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <motion.div
                    whileHover={{ 
                      y: -5,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <social.icon width={24} height={24} />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Viajantes Sem Fronteiras</p>
            <p className="mt-1">Made by AgenceJaraujo</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}