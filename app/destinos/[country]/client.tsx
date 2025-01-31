"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowLeft, Building2, GraduationCap, Heart, Hotel, Landmark, Palmtree, PartyPopper, Utensils } from "lucide-react";
import Link from "next/link";
import { CountryData, IconType } from "./types";

const IconMap = {
  "hotel": Hotel,
  "landmark": Landmark,
  "utensils": Utensils,
  "heart": Heart,
  "party-popper": PartyPopper,
  "graduation-cap": GraduationCap,
  "building-2": Building2,
  "palmtree": Palmtree
};

export function CountryPageClient({ data }: { data: CountryData }) {
  const getIcon = (iconName: IconType) => {
    const Icon = IconMap[iconName];
    return Icon ? <Icon className="h-8 w-8 text-primary mb-4" /> : null;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <Link href="/destinos">
          <RainbowButton className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Destinos
          </RainbowButton>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
          <p className="text-xl text-muted-foreground mb-8">{data.description}</p>

          {/* Imagens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {data.images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative h-64 overflow-hidden rounded-lg"
              >
                <Image
                  src={image}
                  alt={`${data.name} ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Cidades */}
          <h2 className="text-2xl font-bold mb-4">Principais Cidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {data.cities.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-4 rounded-lg"
              >
                <h3 className="font-semibold">{city}</h3>
              </motion.div>
            ))}
          </div>

          {/* Benefícios */}
          <h2 className="text-2xl font-bold mb-4">Benefícios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {data.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-2 bg-card p-4 rounded-lg"
              >
                <div className="h-2 w-2 bg-primary rounded-full" />
                <p>{benefit}</p>
              </motion.div>
            ))}
          </div>

          {/* Oportunidades */}
          <h2 className="text-2xl font-bold mb-4">Oportunidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6">
                  {getIcon(opportunity.icon)}
                  <h3 className="font-semibold mb-2">{opportunity.title}</h3>
                  <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}