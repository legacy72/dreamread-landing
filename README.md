# DreamRead Landing Page

Modern landing page for the DreamRead iOS app - an audiobook player that uses Apple Watch to detect when you fall asleep and automatically pauses playback.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- Optimized for Vercel deployment

## Features

- Responsive design (mobile-first)
- Modern gradient background (deep blue to black)
- Smooth animations and transitions
- SEO optimized with metadata
- Automatic sitemap generation
- Privacy Policy and Terms of Service pages
- App Store placeholder button (Coming Soon)

## Project Structure

```
/dreamread-landing
├── /app
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main landing page
│   ├── globals.css             # Global styles and animations
│   ├── icon.tsx                # Favicon generator
│   ├── apple-icon.tsx          # Apple Touch Icon generator
│   ├── sitemap.ts              # Automatic sitemap
│   ├── /privacy
│   │   └── page.tsx            # Privacy Policy page
│   └── /terms
│       └── page.tsx            # Terms of Service page
├── /components
│   ├── AppStoreButton.tsx      # App Store CTA button
│   ├── Hero.tsx                # Hero section
│   ├── Features.tsx            # Features grid
│   ├── HowItWorks.tsx          # How it works section
│   └── Footer.tsx              # Footer with links
├── /public
│   ├── /images                 # Static images
│   └── robots.txt              # SEO robots file
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy
5. Configure your custom domain (dreamread.app)

### Environment Setup on Vercel

No environment variables needed for the basic setup.

## Design System

### Colors

- **Primary**: `#1a1a2e` (deep blue/purple)
- **Primary Dark**: `#0f0f1e` (near black)
- **Secondary**: `#ff8c42` (soft orange)
- **Accent**: `#e8f4f8` (light blue/white)
- **Accent Blue**: `#88c9f2` (sky blue)

### Typography

Uses system font stack for optimal performance:
- -apple-system
- BlinkMacSystemFont
- Segoe UI
- Roboto

## Pages

### Main Landing Page (/)

Sections:
1. Hero section with gradient background
2. Features (3-column grid)
3. How It Works (3 steps)
4. Call to Action
5. Footer

### Privacy Policy (/privacy)

Comprehensive privacy policy covering:
- Health data usage
- User content storage
- Third-party services
- User rights

### Terms of Service (/terms)

Terms of service covering:
- Service usage requirements
- Subscription details
- Content ownership
- Health disclaimer
- Liability limitations

## Customization

### Update App Store Link

When app is released, edit `components/AppStoreButton.tsx`:

```tsx
// Replace placeholder button with real App Store link
<a href="https://apps.apple.com/app/YOUR_APP_ID">
  <img src="/app-store-badge.svg" alt="Download on the App Store" />
</a>
```

### Update Domain in Sitemap

Edit `app/sitemap.ts` to change from `dreamread.app` to your domain.

### Update Contact Email

Current email: `support@dreamread.app`

Search and replace in:
- `components/Footer.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

## Performance

- Static page generation for optimal performance
- Automatic code splitting
- Image optimization with Next.js
- CSS optimized with Tailwind CSS

## SEO

- Meta tags configured in `app/layout.tsx`
- Open Graph tags for social sharing
- Twitter Card support
- Automatic sitemap at `/sitemap.xml`
- robots.txt configured

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Future Enhancements

- Add email signup form for waitlist
- Add beta testing signup
- Add screenshots/mockups of the app
- Add demo video
- Add testimonials section
- Add FAQ section

## License

All rights reserved © 2024 DreamRead

## Support

For questions or issues, contact: support@dreamread.app
