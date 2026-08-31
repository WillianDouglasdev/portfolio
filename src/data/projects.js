import opsMindDashboard from "../assets/images/projects/opsmind-dashboard.png";
import espantaDividaDashboard from "../assets/images/projects/espanta-divida-dashboard.png";

// Para publicar outro projeto, adicione os dados e a imagem no array correspondente.
export const featuredProjects = [
  {
    id: "opsmind",
    title: "OpsMind",
    tagline:
      "Inteligência operacional para transformar dados em evidências, alertas e planos de ação.",
    problem:
      "Indicadores operacionais dispersos dificultam a identificação de riscos, prioridades e mudanças no desempenho de uma operação.",
    solution:
      "Desenvolvi uma plataforma que consolida indicadores de faturamento, entregas, estoque, chamados e desempenho por filial. O sistema identifica alertas, organiza evidências e permite transformar recomendações em ações acompanháveis.",
    differential:
      "Os cálculos, alertas e recomendações são produzidos por regras determinísticas no backend. A Inteligência Artificial atua somente como camada explicativa sobre evidências previamente calculadas.",
    highlight: "IA para explicar. Regras de negócio para decidir.",
    primaryTechnologies: ["Python", "Django", "React", "PostgreSQL", "IA"],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "Bootstrap",
      "PostgreSQL",
      "Chart.js",
      "pytest",
    ],
    quality:
      "API organizada com Django REST Framework e testes automatizados com pytest para validar regras e comportamentos centrais.",
    links: {
      demo: "https://opsmind-peach.vercel.app/",
      github: "https://github.com/WillianDouglasdev/opsmind",
    },

    image: opsMindDashboard,
    imageAlt:
      "Dashboard do OpsMind com saúde operacional, indicadores, gráfico de desempenho e alertas.",
    mediaPosition: "end",
  },
  {
    id: "espanta-divida",
    title: "Espanta Dívida",
    tagline:
      "Diagnóstico financeiro para transformar registros em entendimento e próximos passos.",
    problem:
      "Registrar receitas, despesas e dívidas não é suficiente quando ainda não existe clareza sobre a situação financeira ou sobre o que priorizar.",
    solution:
      "Desenvolvi uma aplicação que organiza movimentações, dívidas e objetivos para gerar métricas, diagnóstico, alertas e projeções. O dashboard apresenta a situação atual e ajuda a visualizar etapas possíveis de recuperação financeira.",
    differential:
      "As métricas, classificações, alertas e projeções são calculados por regras de negócio no backend. A IA é opcional e apenas transforma resultados já calculados em explicações mais acessíveis.",
    highlight: "Os dados calculam a situação. A explicação ajuda a compreendê-la.",
    primaryTechnologies: ["Python", "FastAPI", "PostgreSQL", "Supabase", "JavaScript"],
    technologies: [
      "Python",
      "FastAPI",
      "Pydantic",
      "PostgreSQL",
      "Supabase",
      "JavaScript",
      "Bootstrap",
      "Chart.js",
      "pytest",
    ],
    quality:
      "Validação de dados com Pydantic, persistência em PostgreSQL e testes automatizados com pytest para proteger os cálculos financeiros.",
    links: {
      demo: "https://espanta-divida.vercel.app/app",
      github: "https://github.com/WillianDouglasdev/espanta-divida",
    },
    image: espantaDividaDashboard,
    imageAlt:
      "Dashboard do Espanta Dívida com diagnóstico financeiro, riscos, margem disponível e próximos passos.",
    mediaPosition: "start",
  },
];

// Permanecem vazios até existirem informações reais e publicáveis.
export const upcomingProjects = [];
export const secondaryProjects = [];
