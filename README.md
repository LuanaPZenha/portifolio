# meu-portfolio

Portfólio pessoal com estética de terminal, feito para [GitHub Pages](https://pages.github.com/).

## Visualizar localmente

Abra o arquivo `index.html` no navegador ou use um servidor local:

```bash
npx serve .
```

## Personalizar

Edite diretamente o `index.html`:

- Bio e textos em `#about`
- Habilidades em `#skills`
- Cards de projetos em `#projects`
- Contato em `#contact` (inclua seu LinkedIn)

Dados baseados no perfil GitHub [@LuanaPZenha](https://github.com/LuanaPZenha).

## Publicar no GitHub Pages

1. Crie um repositório no GitHub chamado **`meu-portfolio`** (ou renomeie para `SEU-USUARIO.github.io` se quiser o site na raiz).
2. Envie este código:

```bash
git add .
git commit -m "Add terminal portfolio"
git remote add origin https://github.com/SEU-USUARIO/meu-portfolio.git
git branch -M main
git push -u origin main
```

3. No GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/(root)**
4. Aguarde alguns minutos. O site ficará em:
   - `https://SEU-USUARIO.github.io/meu-portfolio/` (repositório com nome customizado)
   - ou `https://SEU-USUARIO.github.io/` (se o repo for `SEU-USUARIO.github.io`)

## Estrutura

```
meu-portfolio/
├── index.html
├── css/style.css
├── js/main.js
└── README.md
```
