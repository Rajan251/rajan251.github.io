# Rajan Kumar — DevOps Engineer Portfolio

A premium, minimal, recruiter-focused personal portfolio website for **Rajan Kumar**, DevOps Engineer based in Delhi, India. Built with **React 18**, **Vite 6**, and **Tailwind CSS** featuring a clean, confident, technical and understated aesthetic inspired by **Linear**, **Vercel**, and modern developer engineering sites.

Designed so a recruiter or hiring manager understands Rajan's profile, core stack, experience, and documented impact within **20 seconds**.

---

## ⚡ Tech Stack & Design Direction

- **Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS (Custom Dark Minimalist Theme)
- **Typography:** Inter (Primary) & JetBrains Mono (Code/Metadata)
- **Icons:** Lucide React
- **Aesthetic:** Minimal dark developer aesthetic (`#090a0f`), subtle borders (`border-white/[0.08]`), restrained sky-blue accent (`#38bdf8`), lots of whitespace, fast micro-interactions.
- **Source of Truth:** [Rajan_Kumar.pdf](public/Rajan_Kumar.pdf) — zero fabricated companies, claims, or statistics.

---

## 📁 Project Structure

```text
my-portfolio/
├── public/
│   ├── favicon.svg          # Minimal DevOps terminal SVG favicon
│   └── Rajan_Kumar.pdf      # Downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Minimal sticky navbar with resume download
│   │   ├── Hero.jsx         # 2-column layout with subtle pipeline flow
│   │   ├── Impact.jsx       # Clean typographical metrics (2+, 8+, 60%, 99.9%)
│   │   ├── About.jsx        # Concise bio and current role subline
│   │   ├── Experience.jsx   # DJT Corp & Reticen8 Technology roles with tech rows
│   │   ├── Projects.jsx     # CI/CD & Kubernetes cluster horizontal cards
│   │   ├── Skills.jsx       # 5 compact categories + subtle secondary skills
│   │   ├── Architecture.jsx # "How I approach delivery" horizontal pipeline flow
│   │   ├── Education.jsx    # Side-by-side Education & Certifications
│   │   ├── Contact.jsx      # Clean direct CTA & email (no complex form)
│   │   └── Footer.jsx       # Minimal copyright and links
│   ├── data/
│   │   └── portfolioData.js # Structured constants for easy maintenance
│   ├── App.jsx              # Main page container
│   ├── index.css            # Minimal grid utilities and styling tokens
│   └── main.jsx             # React DOM entry
├── index.html               # Clean SEO metadata & Google Fonts
├── package.json
├── tailwind.config.js
├── vite.config.js           # Configured with base: './' for GitHub Pages
└── README.md
```

---

## 🛠️ Local Development & Scripts

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```

### 3. Build Production Bundle
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 GitHub Pages Deployment Guide

This project is configured with `base: './'` in `vite.config.js` and includes an automated GitHub Actions deployment workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Automated Deployment (GitHub Actions)
1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/Rajan251/portfolio.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** → **Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
3. Every push to `main` will automatically build and publish the site.
