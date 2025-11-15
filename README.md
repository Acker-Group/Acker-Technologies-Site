# Acker Technologies Website

Official website for Acker Technologies, the tech sub-holding of Acker Group SA. Built with Next.js 14, featuring a modern blue-silver theme and showcasing our innovative subsidiaries and tech solutions across Africa.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, React 18, TypeScript, and Tailwind CSS
- **Static Export**: Fully static site optimized for GitHub Pages deployment
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Responsive Design**: Mobile-first approach with seamless tablet and desktop experiences
- **SEO Optimized**: Comprehensive metadata and semantic HTML
- **Performance**: Optimized images and lazy loading for fast page loads

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page with Hero & subsidiaries
│   ├── about/              # Company overview & team
│   ├── subsidiaries/       # Full subsidiary listings
│   ├── blog/               # Tech insights & articles
│   └── contact/            # Contact form with validation
├── components/
│   ├── Navbar.tsx          # Navigation with dark mode toggle
│   ├── Footer.tsx          # Footer with social links
│   ├── Hero.tsx            # Animated hero section
│   └── Card.tsx            # Reusable card component
└── public/                 # Static assets

```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Acker-Group/Acker-Technologies-Site.git
cd Acker-Technologies-Site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

### Deploy to GitHub Pages

1. **Configure base path** (if needed): Update `next.config.js` with your repository name:
   ```javascript
   basePath: '/Acker-Technologies-Site',
   assetPrefix: '/Acker-Technologies-Site',
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy the `out/` directory**:
   ```bash
   # Option 1: Use gh-pages package
   npx gh-pages -d out

   # Option 2: Manual deployment
   git checkout --orphan gh-pages
   git --work-tree out add --all
   git --work-tree out commit -m 'Deploy to GitHub Pages'
   git push origin gh-pages --force
   git checkout main
   ```

4. **Enable GitHub Pages**: Go to repository Settings → Pages → Set source to `gh-pages` branch.

The `.nojekyll` file is already included to bypass Jekyll processing.

## 🎨 Customization

### Colors
Modify `tailwind.config.ts` to change the primary (blue) and silver color palettes.

### Content
All content is hardcoded in components for static export compatibility:
- **Subsidiaries**: `app/subsidiaries/page.tsx`
- **Blog Posts**: `app/blog/page.tsx`
- **Team Members**: `app/about/page.tsx`

### Dark Mode
Theme preference is stored in `localStorage` and respects system preferences by default.

## 🧪 Technologies

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Deployment**: GitHub Pages (static export)

## 📄 License

© 2024 Acker Technologies. All rights reserved.

## 🤝 Contributing

This is a private corporate website. For questions or partnership inquiries, contact us at hello@ackertechnologies.com.

## 🔗 Links

- **Website**: [ackertechnologies.com](https://ackertechnologies.com)
- **X (Twitter)**: [@ackertechnologies](https://twitter.com/ackertechnologies)
- **LinkedIn**: [Acker Technologies](https://linkedin.com/company/ackertechnologies)
