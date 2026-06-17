 eu gostei desse projeto ele ta meio mais ou menos mas eu quero mecher neele e mudá-lo transceder a para, eu quero passar uma pinta de desenvolvedor web pika de auto valor

um cara com grande conhecimento tecnico e muito potencial pra cobrar caro, eu quero mudar  pra seguinte interface 


<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>Graziela Behrens | Desenvolvedora FullStack</title><meta name="description" content="Portfólio de Graziela Behrens - Desenvolvedora FullStack. Criando interfaces acessíveis e responsivas."/><meta name="keywords" content="desenvolvedora, fullstack, frontend, vue.js, javascript, node.js, mysql, portfolio, web developer"/><meta name="author" content="Graziela Behrens"/><meta name="robots" content="index, follow"/><meta property="og:type" content="website"/><meta property="og:url" content="https://grazielabehrens.dev/"/><meta property="og:title" content="Graziela Behrens | Desenvolvedora FullStack"/><meta property="og:description" content="Portfólio de Graziela Behrens - Desenvolvedora FullStack especializada em Vue.js, JavaScript, Node.js e MySQL."/><meta property="og:image" content="/g.png"/><meta property="og:locale" content="pt_BR"/><meta name="theme-color" content="#a855f7"/><meta name="msapplication-TileColor" content="#a855f7"/><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" type="image/png" href="/g.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><meta property="og:image" content="https://grazielabehrens.dev/og-image.png"><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/><link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin/><link rel="preload" href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/><noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css"/></noscript><link rel="preload" href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Onest:wght@100..900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"/><noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Onest:wght@100..900&display=swap"/></noscript><link rel="canonical" href="https://grazielabehrens.dev/"/><meta name="google-site-verification" content="yUsV0NKrLj5MDLWVVHPP6l37KQ3cgaSGOcISD-qnAd8"/><script defer="defer" src="/js/chunk-vendors.2aa22d00.js"></script><script defer="defer" src="/js/app.f52bcabb.js"></script><link href="/css/chunk-vendors.a55451a2.css" rel="stylesheet"><link href="/css/app.ecc2201f.css" rel="stylesheet"></head><body><noscript>Você precisa habilitar o JavaScript para rodar este app.</noscript><div id="app"></div></body></html>

o site é o https://grazielabehrens.dev.br/#banner 

  as cores eu quero manter o preto o azul atual que ta no projeto e o ponto principal quero mudar de um site estatico para uma aplicacao next.js 

INSTRUÇÕES:

inicie um projeto Next.js padrão (npx create-next-app@latest)
"Atue como um Desenvolvedor Fullstack Senior. Quero refatorar meu portfólio atual (que é um site estático em HTML/JS) para uma aplicação Fullstack moderna usando Next.js 14+ (App Router), TypeScript, Tailwind CSS e MongoDB.

Objetivos principais:

Banco de Dados: Configure uma conexão com MongoDB usando Mongoose ou Prisma. Quero um Schema para 'Projects' que contenha: título, descrição, imagemUrl, linkGithub, linkDeploy e uma lista de tecnologias (tags).

Página Principal (Home):

Hero Section: Deve buscar dinamicamente os dados do meu perfil via GitHub API (exibir total de repositórios e seguidores).

Seção de Projetos: Deve renderizar uma lista de cards buscando os dados diretamente do MongoDB.

Painel Administrativo (CMS): Crie uma rota protegida (pode ser simples por enquanto) com um formulário para eu cadastrar novos projetos. No campo de imagem, por enquanto, aceite uma URL de texto, mas deixe o código preparado para integrar um serviço de upload (como Cloudinary) futuramente.

Estilo: Use Tailwind CSS para criar um layout escuro (Dark Mode), moderno e responsivo, focado em alta performance (use o componente next/image para as fotos).

SEO e Performance: Utilize as funções de Metadata do Next.js e garanta que os componentes que buscam dados sejam Server Components.

Por favor, gere a estrutura de pastas seguindo as convenções do Next.js (app/components, app/lib, app/models, etc.) e crie um arquivo .env.example com as variáveis necessárias para o MongoDB e GitHub Token."

🚀 Dicas extras para quando o Cursor gerar o código:
Variáveis de Ambiente: O Cursor vai te dar um código que usa process.env.MONGODB_URI. Você precisará criar um arquivo .env.local na raiz do seu projeto e colar o link de conexão que você pega lá no MongoDB Atlas.

GitHub Token: Para não sofrer bloqueio de limite de requisições da API do GitHub, gere um "Personal Access Token" nas configurações do seu GitHub e coloque no seu .env.

Pasta Public: O Cursor provavelmente vai sugerir colocar imagens de placeholder na pasta /public. Isso ajuda a ver o layout funcionando antes mesmo de você cadastrar o primeiro projeto no banco.


APÓS TERMINAR O PROJETO, DEPOIS DE TESTAR TUDO , FAÇA O PUSH PARA O REPOSITORIO DO GITHUB E FAÇA O DEPLOY NO VERCEL.
EU IREI CONECTAR A BRANCH main com a branch main do repositorio do github. E INTEGRAR O REPOSITORIO A VERCEL PARA MELHORAR O PERFORMANCE E A SEGURANÇA E  VALIDAR  CONEXAO E EVITAR MUITAS REQUISIÇÕES AO GITHUB VOU GERAR UM TOKEN PARA O VERCEL E IREI USAR O TOKEN PARA CONECTAR O REPOSITORIO A VERCEL.

O FATO E QUE VOU USAR O TOKEN PARA CONECTAR O REPOSITORIO A VERCEL E IREI USAR O TOKEN PARA CONECTAR O REPOSITORIO A VERCEL.

Aqui estão os pontos-chave para você estruturar essa nova versão:

1. Arquitetura de Dados com MongoDB
Ao usar o MongoDB para gerenciar seus projetos, você ganha agilidade. Em vez de abrir o código e criar novos componentes toda vez, você pode:

Criar um Dashboard Administrativo: Uma rota protegida (ex: /admin) onde você preenche um formulário com o título, descrição, imagem e links.

API Routes: O Next.js permite criar funções de backend no mesmo projeto. Você terá uma rota como GET /api/projects que busca os dados no MongoDB e entrega para o seu componente de vitrine.

2. Integração com a API do GitHub
Exibir métricas em tempo real no seu "Hero" ou "Sobre" passa muita credibilidade. Você pode consumir a API do GitHub para buscar:

Estatísticas Totais: Total de repositórios, estrelas recebidas e contribuições.

Status Dinâmico: Você pode mostrar as linguagens que mais usou recentemente (ex: TypeScript, React, Node.js).

Dica Técnica: No Next.js, utilize ISR (Incremental Static Regeneration) para essas estatísticas. Assim, o site não precisa fazer uma requisição ao GitHub toda vez que alguém acessar (o que poderia causar lentidão ou bloqueio por limite de requisições), mas se atualiza automaticamente a cada poucas horas.

3. Evolução Tecnológica
Sair de um site estático no GitHub Pages para uma aplicação Fullstack com Next.js demonstra que você domina:

Server-Side Rendering (SSR): Essencial para SEO.

Gerenciamento de Estado e Banco de Dados: Conexão com MongoDB.

Consumo de APIs Externas: Integração com o ecossistema do GitHub.

4. Onde Hospedar?
Como você usará Next.js e MongoDB, o caminho mais eficiente é:

Front/Back: Vercel. É a casa do Next.js, gratuita para projetos pessoais e faz o deploy automático do seu backend e frontend.

Banco de Dados: MongoDB Atlas. Eles possuem um "Free Tier" (M0) que é perfeito para portfólios, oferecendo estabilidade e segurança sem custo.

O Desafio das Imagens
Bancos de dados como o MongoDB não foram feitos para guardar arquivos pesados como fotos. O ideal é salvar apenas o link (URL) da imagem no banco. É aí que entram essas ferramentas:

Cloudinary / UploadThing: São serviços de "hospedagem de mídia". Você faz o upload da foto para eles, e eles te devolvem um link ([https://cloudinary.com/suafoto.jpg](https://cloudinary.com/suafoto.jpg)). É esse link que você vai salvar no seu documento de projeto no MongoDB.

Dica para começar: No início, você nem precisa deles. Pode hospedar as imagens dos projetos em uma pasta /public dentro do seu próprio projeto Next.js ou usar o link de imagens que você já subiu no GitHub. Quando se sentir confortável, aí você pula para o Cloudinary.

Um toque de mestre para o  Hero do portfólio
Já que você quer integrar a API do GitHub, uma ideia legal para o card de informações:

Componente de Status Real-Time:
Além dos commits, você pode usar uma biblioteca chamada react-activity-calendar para mostrar aquele gráfico de "quadradinhos verdes" do GitHub direto no portfólio. Para um desenvolvedor que trabalha sozinho em sistemas complexos (como você faz hoje), isso prova consistência.

utilizaremos tailwind css para o estilo do portfólio.

Exatamente! No começo, para manter as coisas simples e funcionais, o seu painel administrativo será um formulário onde você cola o link da imagem que o Cloudinary te der.

Aqui está o fluxo de como isso vai funcionar na prática:

O Fluxo de Trabalho no Painel Admin
Hospedagem da Imagem: Você acessa o dashboard do Cloudinary (ou usa o botão de upload que o Cursor pode implementar), sobe a imagem .webp do seu projeto e copia a URL gerada (ex: [https://res.cloudinary.com/antonio/image/upload/projeto.webp](https://res.cloudinary.com/antonio/image/upload/projeto.webp)).

Preenchimento do Form: No seu novo painel /admin, você terá campos como:

Título: "ERP Financeiro S3E"

Descrição: "Módulo de fluxo de caixa com DRE automático..."

URL da Imagem: (Aqui você cola o link do Cloudinary)

Tecnologias: "React, Node.js, PostgreSQL"

Salvamento: Ao clicar em "Salvar", o Next.js dispara uma rota de API (POST /api/projects) que grava essas informações no MongoDB.

Com o Painel Admin:Você pode estar no celular, terminar um projeto, abrir o seu próprio site, entrar no /admin, preencher os dados e pronto. O projeto aparece na hora na sua página principal sem que você tenha encostado em uma única linha de código.Estrutura Visual do FormulárioO Cursor provavelmente vai criar algo assim para você usando Tailwind:CampoTipo de InputFinalidadeNome do ProjetoTextoO título principal do Card.Descrição CurtaÁrea de TextoO resumo do que o projeto faz.Thumbnail URLTexto (Link)O link da imagem hospedada no Cloudinary.GitHub LinkTexto (URL)Link do repositório.TagsTexto ou SelectAs badges (React, Next, etc).

Como o seu portfólio será público, você não quer que qualquer pessoa acesse o /admin e apague seus projetos. Peça ao Cursor para:

"Adicione uma proteção simples de rota no /admin usando uma variável de ambiente ADMIN_PASSWORD. Se a senha não bater, não mostre o formulário."

Isso é o básico de um CMS (Content Management System) próprio. É um projeto que, por si só, já conta muitos pontos em uma entrevista técnica, pois mostra que você entende o ciclo completo de uma aplicação (CRUD).