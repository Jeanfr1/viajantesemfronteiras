"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowRight, Building2, GraduationCap, Heart, Hotel, Landmark, Palmtree, PartyPopper, Utensils, Waves } from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    city: "Cusco",
    country: "Peru",
    slug: "peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    description: "Trabalhe em hostels históricos e projetos culturais no coração do antigo império Inca.",
    opportunities: ["Hotelaria", "Turismo", "Gastronomia"],
    icons: [Hotel, Landmark, Utensils]
  },
  {
    city: "Medellín",
    country: "Colômbia",
    slug: "colombia",
    image: "https://images.unsplash.com/photo-1599827552599-eadf5fb3c75f",
    description: "Experiências em hostels modernos e projetos sociais na cidade da eterna primavera.",
    opportunities: ["Social", "Hotelaria", "Eventos"],
    icons: [Heart, Hotel, PartyPopper]
  },
  {
    city: "Londres",
    country: "Inglaterra",
    slug: "inglaterra",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    description: "Combine aprendizado de inglês com trabalho em hostels internacionais.",
    opportunities: ["Idiomas", "Hotelaria", "Cultura"],
    icons: [GraduationCap, Hotel, Landmark]
  },
  {
    city: "Lisboa",
    country: "Portugal",
    slug: "portugal",
    image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a",
    description: "Oportunidades em hostels à beira do Tejo e projetos culturais portugueses.",
    opportunities: ["Hotelaria", "Turismo", "Eventos"],
    icons: [Hotel, Building2, PartyPopper]
  },
  {
    city: "Atenas",
    country: "Grécia",
    slug: "grecia",
    image: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb",
    description: "Trabalhe em hostels com vista para a Acrópole e projetos de preservação cultural.",
    opportunities: ["História", "Hotelaria", "Cultura"],
    icons: [Landmark, Hotel, GraduationCap]
  },
  {
    city: "Dublin",
    country: "Irlanda",
    slug: "irlanda",
    image: "https://images.unsplash.com/photo-1564959130747-897fb406b9af",
    description: "Experiências em pubs históricos e hostels no coração da cultura irlandesa.",
    opportunities: ["Hotelaria", "Eventos", "Idiomas"],
    icons: [Hotel, PartyPopper, GraduationCap]
  },
  {
    city: "Barcelona",
    country: "Espanha",
    slug: "espanha",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded",
    description: "Combine trabalho em hostels com experiência na vibrante cena cultural catalã.",
    opportunities: ["Hotelaria", "Turismo", "Gastronomia"],
    icons: [Hotel, Palmtree, Utensils]
  },
  {
    city: "Cracóvia",
    country: "Polônia",
    slug: "polonia",
    image: "https://images.unsplash.com/photo-1606992894456-799462dacd65",
    description: "Trabalhe em hostels históricos e projetos de preservação cultural.",
    opportunities: ["História", "Hotelaria", "Eventos"],
    icons: [Landmark, Hotel, PartyPopper]
  },
  {
    city: "Berlim",
    country: "Alemanha",
    slug: "alemanha",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047",
    description: "Experiências em hostels alternativos e na vibrante cena cultural berlinense.",
    opportunities: ["Hotelaria", "Eventos", "Arte"],
    icons: [Hotel, PartyPopper, Heart]
  }
];

export function DestinationsDemo() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Destinos em Destaque</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra oportunidades únicas de voluntariado e trabalho em troca de hospedagem
            nos destinos mais incríveis da Europa e América do Sul.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={`${destination.city}, ${destination.country}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold">{destination.city}</h3>
                    <p className="text-sm">{destination.country}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    {destination.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.opportunities.map((opportunity, i) => (
                      <div
                        key={opportunity}
                        className="flex items-center gap-1 text-xs bg-secondary rounded-full px-3 py-1"
                      >
                        {React.createElement(destination.icons[i], { className: "w-3 h-3" })}
                        {opportunity}
                      </div>
                    ))}
                  </div>
                  <Link href={`/destinos/${destination.slug}`}>
                    <RainbowButton className="w-full">
                      Saiba Mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </RainbowButton>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}