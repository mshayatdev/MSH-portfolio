# Muhammad Saleh Hayat — Portfolio

Premium freelance developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Install & Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## ☁️ Deploy on Vercel (Free)

### Option 1: Vercel CLI (Fastest)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project folder
vercel

# Follow prompts → your site is live in ~60 seconds!
```

### Option 2: GitHub + Vercel Dashboard
1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repo
4. Click **Deploy** — done! ✅

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        ← Root layout + SEO metadata
│   ├── page.tsx          ← Main page (assembles all sections)
│   └── globals.css       ← Global styles + CSS utilities
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    ← Sticky navbar with active link tracking
│   │   └── Footer.tsx    ← Footer with social links
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ServicesSection.tsx
│       ├── ExperienceSection.tsx
│       └── ContactSection.tsx
└── lib/
    ├── data.ts           ← ⭐ All your content here (edit this!)
    └── utils.ts          ← Utility functions
```

---

## ✏️ Customization

### Update Your Info
Edit **`src/lib/data.ts`** to change:
- Personal info (name, bio, email, social links)
- Skills and levels
- Projects (title, description, image, links)
- Services
- Experience timeline

### Add WhatsApp Number
In `src/lib/data.ts`, update:
```ts
whatsapp: '+92-3XX-XXXXXXX',
```

### Add Contact Form Backend
In `ContactSection.tsx`, replace the simulation with:
- [Resend](https://resend.com) (email API)
- [EmailJS](https://emailjs.com) (free tier available)
- [Formspree](https://formspree.io) (no-code option)

---

## 🎨 Tech Stack
- **Next.js 14** — App Router, SSR, Image optimization
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **Lucide React** — Clean icons
- **TypeScript** — Type safety

---

## 📞 Contact
Muhammad Saleh Hayat — salehhayat465@gmail.com
