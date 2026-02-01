# 🚀 Modern Portfolio - Next.js 16 + React 19

A high-performance freelancer portfolio built with Next.js 16.1, React 19, TypeScript, and Tailwind CSS. Features stunning animations, modular architecture, and a **90% bundle size reduction** compared to traditional HTML/CSS/JS implementations.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black) ![React](https://img.shields.io/badge/React-19.2-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4.1-38bdf8)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional freelancer portfolio design
- ⚡ **High Performance** - ~150KB first load JS (90% reduction from 1.1MB)
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎯 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS** - Utility-first styling with CSS Modules
- 🔄 **React Compiler** - Automatic optimization (React 19)
- 🖼️ **Image Optimization** - Next.js Image component
- 🎪 **Interactive Components** - Custom cursor, particles, lightbox, hamburger menu
- 📊 **Data-Driven** - Easy content customization
- 🌙 **Dark Mode Ready** - Architecture supports theme switching
- 🤖 **AI Integration Ready** - Prepared for chatbot and ML features

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Navbar, Footer, HamburgerMenu
│   └── shared/            # CustomCursor, MarqueeText, ScrollProgress
├── sections/              # Page sections
│   ├── Hero/              # Hero with particles & animations
│   ├── About/             # About section
│   ├── Projects/          # Filterable projects with lightbox
│   ├── Skills/            # Skills & experience
│   ├── Achievements/      # Awards & certifications
│   └── Contact/           # Contact information
├── lib/
│   ├── data/              # Projects, experience, achievements
│   ├── animations/        # Framer Motion variants
│   └── utils.ts           # Utility functions
├── hooks/                 # Custom React hooks
└── styles/                # Global styles & theme
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Surya-Portfolio-next.js

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🎨 Customization

### 1. Personal Information

Update your details in the data files:

```typescript
// lib/data/projects.ts
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project",
    description: "Description",
    image: "/images/projects/your-image.jpg",
    category: "Web Development",
    tags: ["React", "Next.js"],
    demoUrl: "https://...",
    githubUrl: "https://...",
  },
  // Add more projects...
];

// lib/data/experience.ts
// lib/data/achievements.ts
```

### 2. Colors & Theme

```css
/* styles/globals.css */
:root {
  --base-color: #c2001c;  /* Change primary color */
  --dark-gray: #232323;   /* Change dark theme color */
}

/* tailwind.config.ts */
colors: {
  'base-color': '#YOUR_COLOR',
}
```

### 3. Contact Information

```typescript
// sections/Contact/Contact.tsx
const contactInfo = [
  {
    icon: "bi-envelope",
    title: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
  },
  // Update phone, location, etc.
];
```

### 4. Social Links

```typescript
// components/layout/HamburgerMenu.tsx
// components/layout/Footer.tsx
const socialLinks = [
  { icon: "bi-linkedin", name: "LinkedIn", url: "YOUR_URL" },
  { icon: "bi-github", name: "GitHub", url: "YOUR_URL" },
];
```

## 📦 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16.1** | React framework with App Router |
| **React 19.2** | UI library with React Compiler |
| **TypeScript 5** | Type safety |
| **Tailwind CSS 4.1** | Utility-first CSS |
| **Framer Motion** | Animation library |
| **yet-another-react-lightbox** | Image lightbox |
| **Bootstrap Icons** | Icon library |

## 🎯 Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📊 Performance

- ✅ **~150KB** First Load JS (90% reduction)
- ✅ **Lighthouse Score 90+**
- ✅ **60fps** Animations
- ✅ **Optimized Images** via next/image
- ✅ **Code Splitting** Automatic by Next.js

## 🔮 Future Enhancements

See [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) for detailed extension guides:

- 🌙 Dark Mode
- 🤖 AI Chatbot
- 📝 Blog Section
- 📊 Analytics
- 🌐 Multi-language (i18n)
- 📰 Newsletter Integration
- 🎨 CMS Integration
- 📱 PWA Support

## 📖 Documentation

- **[MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)** - Complete migration details, customization options, and extension capabilities
- **[IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)** - Day-by-day implementation breakdown
- **[NEXTJS_MIGRATION_GUIDE.md](./NEXTJS_MIGRATION_GUIDE.md)** - Detailed migration strategies and component architecture

## 🐛 Troubleshooting

### CSS @apply Warnings

If you see "Unknown at rule @apply" warnings:
1. Install Tailwind CSS IntelliSense extension in VS Code
2. Or add to `.vscode/settings.json`:
```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

### Hydration Errors

The layout already includes `suppressHydrationWarning` for browser extensions.

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Your Name**
- GitHub: [@your-github](https://github.com/your-github)
- LinkedIn: [@your-linkedin](https://linkedin.com/in/your-linkedin)
- Portfolio: [your-portfolio.com](https://your-portfolio.com)

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**
