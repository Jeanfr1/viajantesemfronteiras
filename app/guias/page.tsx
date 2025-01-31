"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ArrowRight, BookOpen, Globe2, MapPin, Plane, Wallet } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const guides = [
  {
    title: "Guia de Trabalho em Hostels",
    description: "Aprenda como conseguir trabalho em hostels ao redor do mundo, dicas de entrevista e melhores práticas.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2000&auto=format&fit=crop",
    category: "Trabalho"
  },
  {
    title: "Economia em Viagens",
    description: "Estratégias comprovadas para economizar em hospedagem, transporte e alimentação durante suas viagens.",
    icon: Wallet,
    image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?q=80&w=2000&auto=format&fit=crop",
    category: "Finanças"
  },
  {
    title: "Vistos e Documentação",
    description: "Guia completo sobre vistos de trabalho, documentos necessários e processos de imigração.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1586174035695-35ab9e19215c?q=80&w=2000&auto=format&fit=crop",
    category: "Legal"
  },
  {
    title: "Melhores Destinos 2024",
    description: "Descubra os destinos mais promissores para trabalhar e viver no exterior este ano.",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2000&auto=format&fit=crop",
    category: "Destinos"
  },
  {
    title: "Adaptação Cultural",
    description: "Como se adaptar a novas culturas, fazer amigos e construir uma vida no exterior.",
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1528493758966-a816a4a0d4e4?q=80&w=2000&auto=format&fit=crop",
    category: "Cultura"
  }
];

const destinations = [
  "Alemanha",
  "Colômbia",
  "Espanha",
  "Grécia",
  "Inglaterra",
  "Irlanda",
  "Peru",
  "Polônia",
  "Portugal",
];

const experienceTypes = [
  "Hotelaria",
  "Turismo",
  "Gastronomia",
  "Eventos",
  "Cultura",
  "Social",
  "Idiomas",
  "Arte",
];

export default function GuiasPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    destination: "",
    experienceType: "",
    startDate: "",
    duration: "",
    additionalInfo: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log(formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      destination: "",
      experienceType: "",
      startDate: "",
      duration: "",
      additionalInfo: "",
    });
    setIsSubmitted(false);
  };

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
              Guias e Recursos
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa saber para começar sua jornada internacional
              com confiança e preparação.
            </p>
          </motion.div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium">
                        {guide.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <guide.icon className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">{guide.title}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {guide.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Receba Novos Guias e Dicas
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Inscreva-se para receber nossos guias mais recentes e dicas
              exclusivas para viajantes.
            </p>
            <Dialog open={isDialogOpen} onOpenChange={(open) => {
              setIsDialogOpen(open);
              if (!open) {
                resetForm();
              }
            }}>
              <DialogTrigger asChild>
                <RainbowButton>
                  Inscrever-se
                  <ArrowRight className="ml-2 h-5 w-5" />
                </RainbowButton>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Inscreva-se para Receber Nossos Guias</DialogTitle>
                  <DialogDescription>
                    Preencha o formulário abaixo para receber guias personalizados e dicas exclusivas para sua jornada internacional.
                  </DialogDescription>
                </DialogHeader>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp</Label>
                        <Input
                          id="whatsapp"
                          name="whatsapp"
                          required
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          placeholder="+55 (11) 98765-4321"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="destination">Destino de Interesse</Label>
                        <Select
                          value={formData.destination}
                          onValueChange={(value) => handleSelectChange("destination", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um destino" />
                          </SelectTrigger>
                          <SelectContent>
                            {destinations.map((destination) => (
                              <SelectItem key={destination} value={destination.toLowerCase()}>
                                {destination}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="experienceType">Tipo de Experiência</Label>
                        <Select
                          value={formData.experienceType}
                          onValueChange={(value) => handleSelectChange("experienceType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma experiência" />
                          </SelectTrigger>
                          <SelectContent>
                            {experienceTypes.map((type) => (
                              <SelectItem key={type} value={type.toLowerCase()}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="startDate">Data Prevista</Label>
                        <Input
                          id="startDate"
                          name="startDate"
                          type="month"
                          required
                          value={formData.startDate}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Duração Planejada</Label>
                      <Select
                        value={formData.duration}
                        onValueChange={(value) => handleSelectChange("duration", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a duração" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3">1-3 meses</SelectItem>
                          <SelectItem value="3-6">3-6 meses</SelectItem>
                          <SelectItem value="6-12">6-12 meses</SelectItem>
                          <SelectItem value="12+">Mais de 1 ano</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Informações Adicionais</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        placeholder="Conte-nos mais sobre seus objetivos e expectativas..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <RainbowButton type="submit" className="w-full">
                      Enviar
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </RainbowButton>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <h3 className="text-xl font-semibold mb-4">Inscrição Realizada com Sucesso!</h3>
                    <p className="text-muted-foreground">
                      Obrigado por se inscrever! Em breve entraremos em contato através do WhatsApp ou e-mail fornecido.
                    </p>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>
    </main>
  );
}