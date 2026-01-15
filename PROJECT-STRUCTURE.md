# ASC Conservation Centre - Project Structure

## 📁 Directory Structure

```
asc-conservation-centre/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with navigation & footer
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── portfolio/
│   │   └── page.tsx            # Portfolio gallery page
│   ├── current-works/
│   │   └── page.tsx            # Current projects page
│   ├── articles/
│   │   └── page.tsx            # Articles listing page
│   └── contact/
│       └── page.tsx            # Contact form page
│
├── components/                   # Reusable React components
│   ├── Navigation.tsx           # Main navigation bar
│   └── Footer.tsx               # Site footer
│
├── public/                       # Static assets
│   ├── portfolio/               # Portfolio images (add your images here)
│   ├── articles/                # Article images (add your images here)
│   └── ...                      # Other static files
│
├── node_modules/                 # Dependencies (auto-generated)
├── .next/                        # Build output (auto-generated)
│
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── next.config.ts                # Next.js configuration
├── .gitignore                    # Git ignore rules
│
├── README.md                     # Project documentation
├── DEPLOYMENT.md                 # Deployment instructions
└── PROJECT-STRUCTURE.md          # This file
```

## 🎯 Key Files Explained

### App Router (`/app`)

**`layout.tsx`** - Root Layout
- Wraps all pages
- Contains Navigation and Footer
- Sets up fonts (Inter + Playfair Display)
- Defines metadata for SEO

**`page.tsx`** - Homepage
- Hero section with business introduction
- Services overview (3 cards)
- Featured work preview
- Call-to-action sections

**`portfolio/page.tsx`** - Portfolio
- Gallery grid of completed projects
- Category filters
- Project cards with hover effects
- Links to individual project pages (to be implemented)

**`current-works/page.tsx`** - Current Works
- Ongoing projects display
- Progress bars
- Recent updates timeline
- Project status indicators

**`articles/page.tsx`** - Articles
- Featured article section
- Articles grid
- Category filters
- Newsletter signup

**`contact/page.tsx`** - Contact
- Contact form with validation
- Contact information display
- Business hours
- Social media links

### Components (`/components`)

**`Navigation.tsx`**
- Fixed top navigation bar
- Mobile responsive menu
- Active page highlighting
- Smooth transitions

**`Footer.tsx`**
- Site-wide footer
- Quick links
- Contact information
- Copyright notice

### Styling

**`globals.css`**
- Tailwind CSS imports
- Custom CSS variables
- Font definitions
- Scrollbar styling

**`tailwind.config.ts`**
- Tailwind configuration
- Custom colors (if needed)
- Font family setup

## 🎨 Design System

### Colors
- **Primary**: Slate (900, 800, 700, 600, 500, 400, 300, 200, 100, 50)
- **Accent**: White
- **Text**: Slate-900 (headings), Slate-600 (body)
- **Backgrounds**: White, Slate-50, Slate-900

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Sizes**: Responsive with Tailwind classes

### Spacing
- Consistent padding/margins using Tailwind spacing scale
- Section padding: py-16 or py-24
- Container max-width: 7xl (1280px)

## 📄 Page Sections

### Homepage
1. Hero Section - Full-screen introduction
2. Services Section - 3-column grid
3. Featured Work - 3-column preview
4. CTA Section - Contact prompt

### Portfolio
1. Header - Title and description
2. Filters - Category selection
3. Gallery Grid - 3-column responsive
4. CTA - Contact section

### Current Works
1. Header - Title and description
2. Projects List - Detailed cards with progress
3. CTA - Project inquiry

### Articles
1. Header - Title and description
2. Filters - Category selection
3. Featured Article - Large card
4. Articles Grid - 3-column layout
5. Newsletter - Subscription form

### Contact
1. Header - Title and description
2. Two-column layout:
   - Contact form (left)
   - Contact info (right)

## 🔧 Customization Guide

### Adding New Pages

1. Create folder in `/app`: `app/new-page/`
2. Add `page.tsx` file
3. Export default component
4. Add to navigation in `components/Navigation.tsx`

Example:
```typescript
// app/about/page.tsx
export default function About() {
  return (
    <main className="min-h-screen pt-20">
      <h1>About Us</h1>
      {/* Your content */}
    </main>
  );
}
```

### Adding Portfolio Items

Edit `app/portfolio/page.tsx`:
```typescript
const portfolioItems = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'Painting',
    year: '2024',
    description: 'Project description...',
    image: '/portfolio/your-image.jpg',
  },
  // Add more items...
];
```

### Adding Articles

Edit `app/articles/page.tsx`:
```typescript
const articles = [
  {
    id: 1,
    title: 'Your Article Title',
    excerpt: 'Brief description...',
    author: 'Author Name',
    date: '2024-01-15',
    category: 'Category',
    readTime: '5 min read',
    image: '/articles/your-image.jpg',
  },
  // Add more articles...
];
```

### Updating Contact Info

1. **Footer**: Edit `components/Footer.tsx`
2. **Contact Page**: Edit `app/contact/page.tsx`

### Changing Colors

Edit `tailwind.config.ts` to add custom colors:
```typescript
theme: {
  extend: {
    colors: {
      'brand': {
        50: '#...',
        // ... more shades
      }
    }
  }
}
```

## 🚀 Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes**: Edit files in `/app` or `/components`
3. **See changes**: Auto-refresh at http://localhost:3000
4. **Build for production**: `npm run build`
5. **Test production**: `npm start`

## 📦 Adding Features

### Image Gallery
Consider adding:
- [react-photo-view](https://www.npmjs.com/package/react-photo-view)
- [yet-another-react-lightbox](https://www.npmjs.com/package/yet-another-react-lightbox)

### CMS Integration
- Sanity.io
- Contentful
- Strapi

### Analytics
- Google Analytics
- Plausible
- Vercel Analytics (built-in)

### Email Service
- Resend
- SendGrid
- Mailgun

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org/learn
- **React**: https://react.dev/learn
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

## 📝 Notes

- All pages are server-rendered by default (good for SEO)
- Client components use `'use client'` directive
- Images should be optimized before uploading
- Use Next.js Image component for automatic optimization
- Mobile-first responsive design approach

## ✨ Future Enhancements

Potential features to add:
- [ ] Individual portfolio project pages
- [ ] Individual article pages
- [ ] Blog functionality
- [ ] Search functionality
- [ ] Multi-language support
- [ ] Admin dashboard for content management
- [ ] Image lightbox/gallery viewer
- [ ] Testimonials section
- [ ] Team members page
- [ ] FAQ section
- [ ] Before/After image sliders
- [ ] Video integration
- [ ] Social media feed integration

---

**Last Updated**: January 2026
**Version**: 1.0.0
**Framework**: Next.js 15
