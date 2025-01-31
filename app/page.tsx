"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TimelineDemo } from "@/components/timeline-demo";
import { TestimonialsDemo } from "@/components/testimonials-demo";
import { GalleryDemo } from "@/components/gallery-demo";
import { HeroText } from "@/components/hero-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, MapPin, PiggyBank } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";

// Initialize EmailJS with your public key
emailjs.init("NXeWnLnfUsjvgu8en");

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

export default function Home() {
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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        to_name: "Admin",
        from_name: formData.name,
        from_email: formData.email,
        whatsapp: formData.whatsapp,
        destination: formData.destination,
        experience_type: formData.experienceType,
        start_date: formData.startDate,
        duration: formData.duration,
        additional_info: formData.additionalInfo,
      };

      await emailjs.send("service_leibx5f", "template_vd8ekap", templateParams);

      setIsSubmitted(true);
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Em breve entraremos em contato com você.",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-background.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container mx-auto px-4 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <HeroText />
            <p className="text-xl text-gray-200 mb-8 mt-8">
              Descubra como viajar e viver internacionalmente sem gastar muito.
              Orientação especializada para sua jornada rumo à liberdade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://wa.link/wzdjjk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RainbowButton>
                  Comece Sua Jornada
                  <ArrowRight className="ml-2 h-5 w-5" />
                </RainbowButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Por Que Nos Escolher?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ajudamos você a navegar pela complexidade da vida internacional
              com estratégias comprovadas e orientação personalizada.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold mb-4">Momentos de Viagem</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore a beleza dos destinos ao redor do mundo através de nossa
              lente
            </p>
          </motion.div>
          <GalleryDemo />
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineDemo />

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold mb-4">Histórias de Sucesso</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ouça de pessoas que transformaram suas vidas com nossa orientação
            </p>
          </motion.div>
          <TestimonialsDemo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Pronto para Começar Sua Aventura?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de viajantes bem-sucedidos que transformaram
              suas vidas com nossa orientação.
            </p>
            <Link
              href="https://wa.link/wzdjjk"
              target="_blank"
              rel="noopener noreferrer"
            ></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Orientação Especializada",
    description:
      "Conselhos personalizados de expatriados experientes que entendem sua jornada.",
    icon: Globe2,
  },
  {
    title: "Soluções Econômicas",
    description:
      "Descubra destinos acessíveis e estratégias financeiras inteligentes para viver no exterior.",
    icon: PiggyBank,
  },
  {
    title: "Seleção de Destinos",
    description:
      "Encontre o destino perfeito que combina com seu estilo de vida e orçamento.",
    icon: MapPin,
  },
];
