"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024-2025 - Europa",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expandindo horizontes na Europa, trabalhando em diferentes funções e culturas:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🏰 Füssen, Alemanha (Jan 2025) - Guia Turística e Recepção
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🇵🇹 Lisboa, Portugal (Out 2024) - Recepção
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/timeline/lisboa.jpg"
              alt="Lisboa, Portugal"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/images/timeline/alemanha.jpg"
              alt="Füssen, Alemanha"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023-2024 - Brasil",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Retorno ao Brasil com novas experiências e habilidades:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🏖️ Florianópolis (Fev-Abr 2024) - Marketing e Auxiliar de Cozinha
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🌆 São Paulo (Jan 2024) - Recepção
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/timeline/Sao-Paulo.jpg"
              alt="São Paulo - Avenida Paulista"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/images/timeline/florianopolis.jpg"
              alt="Praia de Florianópolis"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - América do Sul",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Um ano de experiências intensas pela América do Sul:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🗺️ La Paz, Bolívia (Dez) - Recepção
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🏔️ Cusco, Peru (Out) - Bartender
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🏖️ Máncora, Peru (Set) - Party Promoter
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🌆 Lima, Peru (Ago) - Marketing e Party Promoter
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🏖️ Cartagena, Colômbia (Mai) - Housekeeping e Recepção
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🌊 Santa Marta, Colômbia (Abr) - Auxiliar de Café da Manhã
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🌆 Bogotá, Colômbia (Fev) - Recepção
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/timeline/cartagena.jpg"
              alt="Cartagena, Colômbia"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/images/timeline/peru.jpg"
              alt="Machu Picchu, Peru"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022 - Início da Jornada",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            O começo de tudo em Curitiba:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🌆 Curitiba (Mai 2022) - Recepção, Social Media e Party Promoter
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/timeline/curitiba.jpg"
              alt="Museu Oscar Niemeyer, Curitiba"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="/images/timeline/curitiba2.jpg"
              alt="Jardim Botânico, Curitiba"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <section className="relative min-h-screen w-full">
      <Timeline data={data} />
    </section>
  );
}