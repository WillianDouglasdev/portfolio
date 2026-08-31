# Portfólio — Willian Douglas

Portfólio profissional desenvolvido com React e Vite para apresentar minha formação, focos de atuação, tecnologias, projetos e recomendações.

## Tecnologias

- React e JavaScript
- Vite
- Bootstrap e Bootstrap Icons
- CSS responsivo

## Executar localmente

```bash
git clone https://github.com/WillianDouglasdev/portfolio.git
cd portfolio
npm install
npm run dev
```

Validação antes de publicar:

```bash
npm run lint
npm run build
npm audit
```

## Organização

- `src/components`: componentes reutilizáveis.
- `src/sections`: seções exibidas na página.
- `src/data`: textos, links e dados editáveis do portfólio.
- `src/styles`: identidade visual, componentes e responsividade.
- `public`: favicon, imagem social e arquivos entregues diretamente pelo site.

## Publicação e segurança

O projeto não precisa de chaves ou variáveis de ambiente para funcionar. Dependências, builds, arquivos `.env`, configurações locais de editor, dados da Vercel, logs, chaves e certificados estão fora do Git pelo `.gitignore`.

O código-fonte e os recursos usados pela página precisam permanecer públicos, incluindo imagens dos projetos, foto de perfil, logotipo e carta de recomendação. A carta foi incluída intencionalmente como evidência profissional e não contém endereço, contato ou número de documento.

Os cabeçalhos definidos em `vercel.json` restringem scripts, fontes, enquadramento da página, permissões do navegador e envio de informações de referência.

Quando o domínio definitivo estiver publicado, basta preencher `canonical` e `og:url` no `index.html` e gerar novamente o sitemap.

## Inspirações

As referências serviram como base criativa para estudar hierarquia visual, composição, responsividade e apresentação de projetos. A estrutura, os componentes, o conteúdo e o código deste portfólio foram desenvolvidos especificamente para este projeto, sem copiar a estrutura das referências.

- [Portfólio de Lucas Gomes](https://github.com/lucasggasp/meuportifolio)
- Projetos e conteúdos de portfólio da [Alura](https://www.alura.com.br/)
- Projetos e conteúdos de portfólio da [DIO](https://www.dio.me/)

Ferramentas de Inteligência Artificial também apoiaram brainstorming, revisão de textos e análise de UI/UX, com decisões e validações realizadas durante meu processo de desenvolvimento.

## Próxima versão

- Adicionar uma seção de artigos integrada ao meu futuro perfil no Medium.
- Disponibilizar o currículo atualizado para download diretamente no Hero e na seção de contato.

Os pontos de integração já estão preparados em `src/data/articles.js` e `src/data/profile.js` e só serão exibidos quando receberem URLs reais.
