import opsMindDashboard from "../assets/images/projects/opsmind-dashboard.png";
import espantaDividaDashboard from "../assets/images/projects/espanta-divida-dashboard.png";
import vagaCertaAiDashboard from "../assets/images/projects/vagacertaai.png";
import rotaDevDashboard from "../assets/images/projects/rotadev.png";

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

export const upcomingProjects = [];

export const secondaryProjects = [
  {
    id: "vagacertaai",
    title: "VagaCertaAI",
    subtitle: "Lia",
    badge: "Análise determinística",
    tagline: "Análise de vagas para entender o que destacar — sem inventar qualificações.",
    description:
      "Demo que compara requisitos de uma vaga com informações reais do perfil, destacando correspondências, lacunas e pontos que podem ganhar mais visibilidade no currículo e LinkedIn.",
    problem:
      "Candidatos frequentemente utilizam o mesmo currículo para vagas diferentes, mesmo quando cada oportunidade prioriza tecnologias, experiências e responsabilidades distintas.",
    solution:
      "A aplicação organiza requisitos da vaga, compara essas informações com o perfil ativo e mostra correspondências, relações parciais e lacunas, além de sugerir pontos que poderiam receber maior destaque.",
    detailLabel: "Decisão técnica",
    detail:
      "A versão atual não utiliza IA generativa. A análise funciona localmente através de regras conhecidas e determinísticas, mantendo cada sugestão vinculada aos fatos existentes no perfil.",
    primaryTechnologies: ["React", "TypeScript", "Vite", "Bootstrap", "Vitest"],
    technologies: ["React", "TypeScript", "Vite", "Bootstrap", "Vitest", "CSS personalizado"],
    links: {
      demo: "https://lia-vagacerta-ai.vercel.app",
      github: "https://github.com/WillianDouglasdev/VagaCertaAI",
    },
    image: vagaCertaAiDashboard,
    imageWidth: 1332,
    imageHeight: 749,
    imageAlt:
      "Resultado da comparação no VagaCertaAI com requisitos de uma vaga, compatibilidade estimada e pontos fortes do perfil.",
  },
  {
    id: "rotadev",
    title: "RotaDev",
    badge: "CSS puro",
    tagline: "Uma trilha prática para dar os primeiros passos no Front-end.",
    description:
      "Plataforma de estudos que organiza a entrada no desenvolvimento Front-end em uma trilha progressiva, combinando teoria, prática e diferentes formas de interação.",
    problem:
      "Quem começa no Front-end encontra uma quantidade enorme de conteúdos, ferramentas e caminhos possíveis, o que pode dificultar saber o que estudar primeiro.",
    solution:
      "O RotaDev organiza esse início em uma trilha simples de acompanhar, combinando explicação, prática e aprofundamento para criar uma progressão mais clara de aprendizado.",
    detailLabel: "Diferencial",
    detail:
      "Em vez de funcionar apenas como uma lista de conteúdos, a proposta utiliza diferentes formas de interação ao longo da trilha para tornar o processo mais leve e ajudar o estudante a visualizar sua evolução.",
    primaryTechnologies: ["React", "JavaScript", "Vite", "CSS"],
    technologies: ["React", "JavaScript", "Vite", "CSS puro"],
    links: {
      demo: "https://rota-dev-alpha.vercel.app",
      github: "https://github.com/WillianDouglasdev/RotaDev",
    },
    image: rotaDevDashboard,
    imageWidth: 1204,
    imageHeight: 867,
    imageAlt:
      "Trilha do RotaDev com etapas de Front-end, conteúdos, leituras, cursos, jogos e desafios.",
  },
];
