"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BookOpen, FileText, Globe2, GraduationCap, Languages, Landmark, Wallet } from "lucide-react";
import Image from "next/image";

const resources = [
  {
    title: "Planilha de Orçamento Internacional",
    description: "Planilha detalhada para planejar seus gastos em diferentes países, incluindo custo de vida, despesas mensais e reservas de emergência.",
    icon: Wallet,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
    category: "Finanças",
    type: "Excel"
  },
  {
    title: "Checklist de Documentos",
    description: "Lista completa de documentos necessários para diferentes tipos de vistos e processos de imigração.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2000&auto=format&fit=crop",
    category: "Legal",
    type: "PDF"
  },
  {
    title: "Guia de Idiomas Essenciais",
    description: "Frases e vocabulário essencial em diferentes idiomas para situações do dia a dia no trabalho e vida social.",
    icon: Languages,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2000&auto=format&fit=crop",
    category: "Idiomas",
    type: "PDF"
  },
  {
    title: "Manual de Entrevistas",
    description: "Dicas e exemplos de respostas para entrevistas em hostels e estabelecimentos internacionais.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2000&auto=format&fit=crop",
    category: "Carreira",
    type: "PDF"
  },
  {
    title: "Guia Cultural por País",
    description: "Informações detalhadas sobre costumes, etiqueta e práticas culturais em diferentes países.",
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1528493758966-a816a4a0d4e4?q=80&w=2000&auto=format&fit=crop",
    category: "Cultura",
    type: "PDF"
  },
  {
    title: "Calendário de Eventos",
    description: "Calendário anual de eventos, festivais e temporadas de trabalho em diferentes destinos.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=2000&auto=format&fit=crop",
    category: "Eventos",
    type: "PDF"
  }
];

const tools = [
  {
    title: "Calculadora de Custo de Vida",
    description: "Compare o custo de vida entre diferentes cidades e planeje seu orçamento.",
    icon: Wallet
  },
  {
    title: "Conversor de Moedas",
    description: "Ferramenta atualizada para converter valores entre diferentes moedas.",
    icon: Globe2
  },
  {
    title: "Simulador de Economia",
    description: "Calcule quanto você pode economizar trabalhando em diferentes países.",
    icon: BookOpen
  }
];

export default function RecursosPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Recursos para Viajantes
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ferramentas e materiais essenciais para planejar sua jornada internacional
              com confiança e organização.
            </p>
          </motion.div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">
                        {resource.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <resource.icon className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{resource.title}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ferramentas Úteis
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Calculadoras e ferramentas interativas para ajudar no seu planejamento
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <tool.icon className="h-12 w-12 text-primary mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                    <p className="text-muted-foreground">{tool.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}