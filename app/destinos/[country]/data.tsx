import { IconType } from "./types";

export interface CountryData {
  name: string;
  cities: string[];
  description: string;
  images: string[];
  benefits: string[];
  opportunities: {
    title: string;
    description: string;
    icon: IconType;
  }[];
}

export const countryData: Record<string, CountryData> = {
  "peru": {
    name: "Peru",
    cities: ["Cusco", "Lima", "Arequipa"],
    description: "O Peru oferece uma mistura única de história Inca, cultura vibrante e gastronomia premiada. Trabalhe em hostels históricos enquanto explora sítios arqueológicos mundialmente famosos.",
    images: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
      "https://images.unsplash.com/photo-1526392060635-9d6019884377",
      "https://images.unsplash.com/photo-1580889272861-dc2dbea5468d"
    ],
    benefits: [
      "Aprenda espanhol em um ambiente imersivo",
      "Explore sítios arqueológicos Incas",
      "Experimente uma das melhores gastronomias do mundo",
      "Trabalhe em hostels históricos"
    ],
    opportunities: [
      {
        title: "Hotelaria",
        description: "Posições em hostels e hotéis boutique",
        icon: "hotel"
      },
      {
        title: "Turismo",
        description: "Guia turístico e assistente de excursões",
        icon: "landmark"
      },
      {
        title: "Gastronomia",
        description: "Trabalho em restaurantes e cafés",
        icon: "utensils"
      }
    ]
  },
  "colombia": {
    name: "Colômbia",
    cities: ["Medellín", "Bogotá", "Cartagena"],
    description: "A Colômbia é conhecida por sua hospitalidade calorosa, cultura vibrante e paisagens diversas. Trabalhe em projetos sociais e hostels modernos enquanto desfruta da 'cidade da eterna primavera'.",
    images: [
      "https://images.unsplash.com/photo-1599827552599-eadf5fb3c75f",
      "https://images.unsplash.com/photo-1531761535209-180857e963b9",
      "https://images.unsplash.com/photo-1628874892359-2e5d6f0f7b2d"
    ],
    benefits: [
      "Ambiente acolhedor e amigável",
      "Custo de vida acessível",
      "Rica diversidade cultural",
      "Oportunidades em projetos sociais"
    ],
    opportunities: [
      {
        title: "Social",
        description: "Trabalho em projetos comunitários",
        icon: "heart"
      },
      {
        title: "Hotelaria",
        description: "Posições em hostels modernos",
        icon: "hotel"
      },
      {
        title: "Eventos",
        description: "Organização de eventos culturais",
        icon: "party-popper"
      }
    ]
  },
  "inglaterra": {
    name: "Inglaterra",
    cities: ["Londres", "Manchester", "Liverpool"],
    description: "A Inglaterra oferece uma experiência única de imersão cultural e linguística. Trabalhe em hostels internacionais enquanto aperfeiçoa seu inglês na capital mundial do idioma.",
    images: [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      "https://images.unsplash.com/photo-1520986606214-8b456906c813",
      "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9"
    ],
    benefits: [
      "Aperfeiçoe seu inglês",
      "Experiência internacional valorizada",
      "Rica vida cultural e histórica",
      "Networking global"
    ],
    opportunities: [
      {
        title: "Idiomas",
        description: "Imersão total em inglês",
        icon: "graduation-cap"
      },
      {
        title: "Hotelaria",
        description: "Trabalho em hostels internacionais",
        icon: "hotel"
      },
      {
        title: "Cultura",
        description: "Eventos culturais e turísticos",
        icon: "landmark"
      }
    ]
  },
  "portugal": {
    name: "Portugal",
    cities: ["Lisboa", "Porto", "Faro"],
    description: "Portugal é a porta de entrada perfeita para a Europa, com sua rica história, cultura acolhedora e custo de vida acessível. Trabalhe em hostels históricos enquanto explora este país encantador.",
    images: [
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a",
      "https://images.unsplash.com/photo-1558102822-da570eb113ed",
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b"
    ],
    benefits: [
      "Facilidade com o idioma",
      "Custo de vida acessível",
      "Qualidade de vida excepcional",
      "Localização estratégica na Europa"
    ],
    opportunities: [
      {
        title: "Hotelaria",
        description: "Trabalho em hostels históricos",
        icon: "hotel"
      },
      {
        title: "Turismo",
        description: "Guia turístico e informações",
        icon: "building-2"
      },
      {
        title: "Eventos",
        description: "Organização de eventos culturais",
        icon: "party-popper"
      }
    ]
  },
  "grecia": {
    name: "Grécia",
    cities: ["Atenas", "Santorini", "Thessaloniki"],
    description: "A Grécia combina história milenar com belezas naturais deslumbrantes. Trabalhe em hostels com vistas incríveis enquanto explora uma das civilizações mais antigas do mundo.",
    images: [
      "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
    ],
    benefits: [
      "Experiência cultural única",
      "Clima mediterrâneo",
      "Gastronomia excepcional",
      "História milenar"
    ],
    opportunities: [
      {
        title: "História",
        description: "Projetos de preservação cultural",
        icon: "landmark"
      },
      {
        title: "Hotelaria",
        description: "Posições em hostels turísticos",
        icon: "hotel"
      },
      {
        title: "Cultura",
        description: "Eventos culturais e tours",
        icon: "graduation-cap"
      }
    ]
  },
  "irlanda": {
    name: "Irlanda",
    cities: ["Dublin", "Galway", "Cork"],
    description: "A Irlanda encanta com sua cultura única, paisagens verdes e povo acolhedor. Trabalhe em pubs históricos e hostels enquanto vive a verdadeira experiência irlandesa.",
    images: [
      "https://images.unsplash.com/photo-1564959130747-897fb406b9af",
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e",
      "https://images.unsplash.com/photo-1515859005217-8a1f08870f59"
    ],
    benefits: [
      "Aperfeiçoe seu inglês",
      "Cultura única e acolhedora",
      "Segurança e qualidade de vida",
      "Experiência europeia"
    ],
    opportunities: [
      {
        title: "Hotelaria",
        description: "Trabalho em hostels e pubs",
        icon: "hotel"
      },
      {
        title: "Eventos",
        description: "Organização de eventos culturais",
        icon: "party-popper"
      },
      {
        title: "Idiomas",
        description: "Imersão em inglês",
        icon: "graduation-cap"
      }
    ]
  },
  "espanha": {
    name: "Espanha",
    cities: ["Barcelona", "Madrid", "Sevilha"],
    description: "A Espanha é um país vibrante com rica cultura, arquitetura impressionante e gastronomia única. Trabalhe em hostels enquanto explora a vida noturna e a cultura catalã.",
    images: [
      "https://images.unsplash.com/photo-1583422409516-2895a77efded",
      "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4",
      "https://images.unsplash.com/photo-1558642084-fd07fae5282e"
    ],
    benefits: [
      "Aprenda espanhol",
      "Cultura vibrante",
      "Gastronomia excepcional",
      "Localização estratégica"
    ],
    opportunities: [
      {
        title: "Hotelaria",
        description: "Posições em hostels turísticos",
        icon: "hotel"
      },
      {
        title: "Turismo",
        description: "Guia turístico e informações",
        icon: "palmtree"
      },
      {
        title: "Gastronomia",
        description: "Trabalho em bares e restaurantes",
        icon: "utensils"
      }
    ]
  },
  "polonia": {
    name: "Polônia",
    cities: ["Cracóvia", "Varsóvia", "Wrocław"],
    description: "A Polônia surpreende com sua rica história, arquitetura preservada e cultura única. Trabalhe em hostels históricos enquanto explora uma das joias da Europa Central.",
    images: [
      "https://images.unsplash.com/photo-1606992894456-799462dacd65",
      "https://images.unsplash.com/photo-1519197924294-4ba991a11128",
      "https://images.unsplash.com/photo-1578504480082-a8e7f0fa8592"
    ],
    benefits: [
      "Custo de vida acessível",
      "Rica história europeia",
      "Localização central na Europa",
      "Cultura preservada"
    ],
    opportunities: [
      {
        title: "História",
        description: "Projetos de preservação",
        icon: "landmark"
      },
      {
        title: "Hotelaria",
        description: "Trabalho em hostels históricos",
        icon: "hotel"
      },
      {
        title: "Eventos",
        description: "Organização de eventos culturais",
        icon: "party-popper"
      }
    ]
  },
  "alemanha": {
    name: "Alemanha",
    cities: ["Berlim", "Munique", "Hamburgo"],
    description: "A Alemanha é um país que combina modernidade com história, arte alternativa com tradição. Trabalhe em hostels modernos enquanto explora uma das cenas culturais mais vibrantes da Europa.",
    images: [
      "https://images.unsplash.com/photo-1560969184-10fe8719e047",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
      "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f"
    ],
    benefits: [
      "Qualidade de vida elevada",
      "Cena cultural vibrante",
      "Oportunidades profissionais",
      "Localização central na Europa"
    ],
    opportunities: [
      {
        title: "Hotelaria",
        description: "Trabalho em hostels modernos",
        icon: "hotel"
      },
      {
        title: "Eventos",
        description: "Produção de eventos culturais",
        icon: "party-popper"
      },
      {
        title: "Arte",
        description: "Projetos artísticos e culturais",
        icon: "heart"
      }
    ]
  }
};