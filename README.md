# Rajan Kumar — DevOps Engineer Portfolio

A modern, high-performance, dark DevOps/cloud-themed personal portfolio website for **Rajan Kumar**, DevOps Engineer based in Delhi, India. Built with React, Vite, and Tailwind CSS with a clean developer aesthetic, interactive terminal telemetry, system architecture visualizers, and zero fiction or fabricated experience.

---

## 🚀 Live Tech Stack

- **Core Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS (Custom Dark DevOps Theme)
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans & JetBrains Mono (via Google Fonts)
- **Deployment Target:** GitHub Pages (Zero-config relative base paths)

---

## 📁 Repository Structure

```text
my-portfolio/
├── public/
│   ├── favicon.svg          # Custom DevOps terminal SVG favicon
│   └── Rajan_Kumar.pdf      # Downloadable resume as single source of truth
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky header with mobile drawer & section spy
│   │   ├── Hero.jsx         # Status badge, headline, CTA & interactive terminal
│   │   ├── About.jsx        # Domain experience & core DevOps pillars
│   │   ├── Metrics.jsx      # Animated documented production statistics
│   │   ├── Skills.jsx       # Categorized skills matrix with live filter/search
│   │   ├── Experience.jsx   # Vertical timeline for DJT Corp & Reticen8 roles
│   │   ├── Projects.jsx     # CI/CD pipeline & Kubernetes cluster architecture
│   │   ├── Architecture.jsx # "How I Think About Infrastructure" + Observability
│   │   ├── Certifications.jsx # Technical Guftgu & Udemy credentials
│   │   ├── Education.jsx    # B.Tech & Diploma academic backgrounds
│   │   ├── Contact.jsx      # Direct channels, clipboard copy & static mail dispatch
│   │   └── Footer.jsx       # Operational status, back-to-top & copyright
│   ├── data/
│   │   └── portfolioData.js # Single source of truth containing all resume constants
│   ├── App.jsx              # Main page container
│   ├── index.css            # Global Tailwind styling & glassmorphic utilities
│   └── main.jsx             # React DOM root entry
├── index.html               # SEO metadata, Open Graph tags & font links
├── package.json             # NPM dependencies & scripts
├── tailwind.config.js       # Custom color tokens & glow shadows
├── vite.config.js           # Vite configuration with base: './'
└── README.md                # Documentation & GitHub Pages deployment guide
```

---

## 🛠️ Local Development & Scripts

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the terminal-assigned port).

### 3. Production Build
```bash
npm run build
```
Generates an optimized static production bundle in the `dist/` directory with relative asset paths.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 GitHub Pages Deployment Guide

This project is configured with `base: './'` in `vite.config.js` so it can be deployed directly to GitHub Pages without asset path issues.

### Option A: Automated Deployment via GitHub Actions (Recommended)

1. Create a GitHub repository (e.g., `Rajan251/Rajan251.github.io` or `Rajan251/portfolio`).
2. Add the GitHub Actions workflow file `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Static Files
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. In your GitHub repository settings:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
   - Push your code to the `main` branch:
     ```bash
     git add .
     git commit -m "Initial portfolio commit"
     git branch -M main
     git remote add origin https://github.com/Rajan251/portfolio.git
     git push -u origin main
     ```

### Option B: Quick Manual Deploy using `gh-pages`

1. Install `gh-pages` as a development dependency:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deploy scripts to your `package.json`:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Run:
   ```bash
   npm run deploy
   ```

---

## 🔒 Source of Truth & Content Rules

- All data rendered across the portfolio is managed centrally in [src/data/portfolioData.js](src/data/portfolioData.js).
- Resume details, metrics, and dates strictly correspond to `Rajan_Kumar.pdf`.
- No fabricated client logos, fake percentage bars, or exaggerated claims.
