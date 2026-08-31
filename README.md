# Portfólio — Willian Douglas

Portfólio profissional desenvolvido com React, Vite e Bootstrap. O conteúdo apresenta projetos, tecnologias, experiências e formações na interseção entre desenvolvimento, dados, automação e Inteligência Artificial.

## Tecnologias

- React
- JavaScript
- Vite
- Bootstrap
- CSS

## Execução local

```powershell
npm install
npm run dev
```

## Validação

```powershell
npm run lint
npm run build
```

## Publicação

O projeto utiliza GitHub Pages e possui `base: "/Portifolio/"` em `vite.config.js`. O workflow em `.github/workflows/deploy.yml` gera a build e publica a pasta `dist`.

## Atualização de conteúdo

As informações editáveis ficam em `src/data`. Artigos, projetos futuros, projetos secundários e currículo são renderizados somente quando possuem dados reais.
