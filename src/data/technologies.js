// `featured` controla apenas o destaque visual; não representa nível de domínio.
export const technologyGroups = [
  {
    title: "Desenvolvimento",
    icon: "bi-code-slash",
    items: [
      { name: "Python", featured: true },
      { name: "JavaScript", featured: true },
      { name: "React", featured: true },
      { name: "Bootstrap", featured: false },
    ],
  },
  {
    title: "Backend & APIs",
    icon: "bi-hdd-network",
    items: [
      { name: "APIs REST", featured: true },
      { name: "Django", featured: false },
      { name: "FastAPI", featured: false },
      { name: "PostgreSQL", featured: false },
      { name: "C# / .NET", featured: false, note: "Em evolução" },
    ],
  },
  {
    title: "Dados & BI",
    icon: "bi-bar-chart",
    items: [
      { name: "SQL", featured: true },
      { name: "Power BI", featured: true },
      { name: "Excel", featured: false },
      { name: "PostgreSQL", featured: false },
      { name: "Supabase", featured: false },
    ],
  },
  {
    title: "Ferramentas & Automação",
    icon: "bi-gear-wide-connected",
    items: [
      { name: "n8n", featured: false },
      { name: "Git", featured: false },
      { name: "GitHub", featured: false },
      { name: "pytest", featured: false },
      { name: "Microsoft Office", featured: false, note: "Excel · PowerPoint" },
    ],
  },
];
