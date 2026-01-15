# ASC Conservation Centre Website

A modern, professional portfolio website for ASC Conservation Centre - Fine Arts Restoration & Conservation business.

## 🎨 Features

- **Modern Design**: Clean, elegant design that reflects the professionalism of fine arts conservation
- **Responsive**: Fully responsive design that works on all devices
- **Portfolio Gallery**: Showcase completed restoration projects
- **Current Works**: Display ongoing projects with progress tracking
- **Articles Section**: Share expertise and published articles
- **Contact Form**: Professional contact form for inquiries
- **SEO Optimized**: Built with Next.js for excellent SEO performance
- **Fast Performance**: Optimized for speed and user experience

## 🚀 Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Inter (sans-serif) + Playfair Display (serif)
- **Deployment**: Vercel (recommended)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🌐 Deployment

### Deploy to Vercel (Recommended - FREE)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure everything
6. Click "Deploy"
7. Your site will be live in minutes!

**Benefits of Vercel:**
- ✅ Free hosting for personal/commercial projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Custom domain support
- ✅ Zero configuration needed

### Alternative Deployment Options

- **Netlify**: Similar to Vercel, also free tier available
- **AWS Amplify**: If you prefer AWS ecosystem
- **Traditional Hosting**: Export as static site with `npm run build`

## 📝 Customization

### Adding Images

1. Place images in the `/public` folder
2. Reference them in your code: `/your-image.jpg`
3. Use Next.js Image component for optimization:

```tsx
import Image from 'next/image';

<Image 
  src="/your-image.jpg" 
  alt="Description"
  width={800}
  height={600}
/>
```

### Updating Content

- **Homepage**: Edit `app/page.tsx`
- **Portfolio**: Edit `app/portfolio/page.tsx`
- **Current Works**: Edit `app/current-works/page.tsx`
- **Articles**: Edit `app/articles/page.tsx`
- **Contact**: Edit `app/contact/page.tsx`
- **Navigation**: Edit `components/Navigation.tsx`
- **Footer**: Edit `components/Footer.tsx`

### Contact Form Setup

The contact form currently simulates submission. To make it functional:

1. **Option 1 - Email Service (Recommended)**:
   - Use [Resend](https://resend.com) (free tier available)
   - Or [SendGrid](https://sendgrid.com)
   - Or [Mailgun](https://www.mailgun.com)

2. **Option 2 - Form Service**:
   - Use [Formspree](https://formspree.io) (free tier)
   - Or [Netlify Forms](https://www.netlify.com/products/forms/)

3. **Option 3 - Custom API**:
   - Create API route in `app/api/contact/route.ts`
   - Implement your email sending logic

### Styling

- Colors and design are in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Component-specific styles use Tailwind classes

## 📧 Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

## 🔒 Environment Variables

Create a `.env.local` file for sensitive data:

```env
# Email service API keys (when you set up contact form)
EMAIL_API_KEY=your_api_key_here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📱 Social Media

Update social media links in `components/Footer.tsx`

## 🎯 Next Steps

1. **Add Real Images**: Replace placeholder images with actual project photos
2. **Set Up Contact Form**: Implement email sending functionality
3. **Add Content**: Fill in real portfolio items, articles, and current works
4. **Custom Domain**: Connect your domain (e.g., ascconservation.com)
5. **Analytics**: Add Google Analytics or similar
6. **SEO**: Update metadata in each page's metadata export
7. **Blog/CMS**: Consider adding a CMS like Sanity or Contentful for easier content management

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [React Documentation](https://react.dev)

## 🤝 Support

For questions or support, contact the development team.

## 📄 License

© 2026 ASC Conservation Centre. All rights reserved.
