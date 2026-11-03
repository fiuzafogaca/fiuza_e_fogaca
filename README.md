# Fiuza & Fogaça Advogados

Site institucional do escritório, feito com **React + Vite** e CSS seguindo a metodologia **BEM**.
O visual vem do design criado no Google Stitch.

## Como rodar

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a pasta dist/
npm run preview  # testa o build localmente
```

## Estrutura

```
src/
├── App.jsx                  # monta a página
├── main.jsx                 # entrada do React
├── data/site.js             # TODO o conteúdo (textos, sócios, contatos, logo)
├── styles/
│   ├── tokens.css           # cores, fontes, espaçamentos (variáveis CSS)
│   └── base.css             # reset e estilos globais
└── components/
    ├── Header/              # menu fixo
    ├── FlyingLogo/          # logo que sai do Hero e "voa" até o menu no scroll
    ├── Hero/
    ├── About/               # "Sobre nós"
    ├── PracticeAreas/       # cards expansíveis das áreas de atuação
    ├── Partners/            # sócios
    ├── Differentials/       # cards expansíveis dos diferenciais
    ├── Contact/             # informações e formulário
    ├── Footer/
    ├── Button/              # componente reutilizável
    ├── Icon/                # Material Symbols
    └── SectionHeader/       # título de seção reutilizável
```

Cada componente tem o seu `.jsx` e o seu `.css` na mesma pasta.

## BEM neste projeto

`bloco__elemento--modificador`

- **Bloco:** componente independente (`area-card`, `partner-card`, `button`)
- **Elemento:** parte do bloco (`area-card__title`, `area-card__toggle`)
- **Modificador:** variação ou estado (`area-card--expanded`, `button--ghost`)

Regras seguidas: um bloco por componente, seletores só com classe (sem aninhamento
pesado) e estados controlados por modificadores no React em vez de manipular o DOM.

## Para editar o conteúdo

Textos, sócios, contatos e links do menu ficam todos em `src/data/site.js`.
Cores e espaçamentos ficam em `src/styles/tokens.css`.

## Pendências do design original

- Trocar `OAB/SP 000.000` pelos números reais.
- Baixar a logo e as fotos dos sócios do Stitch e salvar em `public/images/`
  (os links do Stitch podem expirar) e atualizar as URLs em `src/data/site.js`.
- O formulário de contato ainda não envia nada (só mostra um aviso).
- O menu não tem versão mobile (some abaixo de 1024px, igual ao design original).
- As opções de "Área de Interesse" do formulário não batem com as áreas de atuação.
