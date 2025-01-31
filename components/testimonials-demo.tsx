"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Graças à orientação deles, agora vivo minha vida dos sonhos em Bali trabalhando remotamente. As estratégias de economia que compartilharam foram inestimáveis.",
      name: "Sarah Chen",
      designation: "Nômade Digital do Canadá",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3687&auto=format&fit=crop",
    },
    {
      quote:
        "Mudar para Portugal parecia assustador, mas a orientação passo a passo deles tornou a transição suave e acessível. Melhor investimento no meu futuro!",
      name: "Miguel Rodriguez",
      designation: "Desenvolvedor de Software Remoto",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3687&auto=format&fit=crop",
    },
    {
      quote:
        "A experiência deles em encontrar moradia acessível e navegar pelos requisitos de visto no Sudeste Asiático foi exatamente o que eu precisava.",
      name: "Emily Watson",
      designation: "Blogueira de Viagens",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Nunca pensei que viver na Europa pudesse ser tão acessível. As estratégias de otimização de orçamento me ajudaram a economizar 40% nas despesas.",
      name: "João Silva",
      designation: "Designer Freelancer",
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=3687&auto=format&fit=crop",
    },
    {
      quote:
        "Desde vistos até encontrar oportunidades de trabalho remoto, a orientação abrangente deles tornou minha transição para a vida nômade perfeita.",
      name: "Ana Thompson",
      designation: "Professora de Inglês Online",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}