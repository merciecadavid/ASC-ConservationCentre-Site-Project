# Deployment Guide for ASC Conservation Centre

## 🚀 Quick Deploy to Vercel (Recommended - 5 minutes)

Vercel is the easiest and FREE way to deploy your Next.js website.

### Step 1: Prepare Your Code

```bash
# Make sure everything is committed to git
git add .
git commit -m "Initial ASC Conservation Centre website"
```

### Step 2: Push to GitHub

1. Create a new repository on GitHub: https://github.com/new
2. Name it: `asc-conservation-centre`
3. Push your code:

```bash
git remote add origin https://github.com/YOUR_USERNAME/asc-conservation-centre.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to https://vercel.com/signup
2. Sign up with your GitHub account (it's free!)
3. Click "New Project"
4. Import your `asc-conservation-centre` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Wait 2-3 minutes ⏱️
8. Your site is LIVE! 🎉

You'll get a URL like: `https://asc-conservation-centre.vercel.app`

### Step 4: Add Custom Domain (Optional)

1. Buy a domain (e.g., `ascconservation.com` from Namecheap, GoDaddy, etc.)
2. In Vercel dashboard, go to your project
3. Click "Settings" → "Domains"
4. Add your custom domain
5. Follow the DNS configuration instructions
6. Wait for DNS propagation (5-30 minutes)
7. Your site will be live on your custom domain with FREE HTTPS! 🔒

## 🔄 Automatic Deployments

Once connected to Vercel:
- Every `git push` to main branch = automatic deployment
- Preview deployments for pull requests
- Rollback to previous versions anytime

## 📧 Setting Up Contact Form

### Option 1: Resend (Recommended)

1. Sign up at https://resend.com (free tier: 100 emails/day)
2. Get your API key
3. Install Resend:

```bash
npm install resend
```

4. Create `.env.local`:

```env
RESEND_API_KEY=your_api_key_here
```

5. Create `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    await resend.emails.send({
      from: 'website@ascconservation.com',
      to: 'info@ascconservation.com',
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

6. Update `app/contact/page.tsx` to use the API:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }
};
```

7. Add environment variable to Vercel:
   - Go to Project Settings → Environment Variables
   - Add `RESEND_API_KEY` with your key
   - Redeploy

### Option 2: Formspree (Easiest - No Code)

1. Sign up at https://formspree.io (free tier: 50 submissions/month)
2. Create a new form
3. Get your form endpoint
4. Update form action in `app/contact/page.tsx`:

```typescript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 📊 Adding Analytics

### Google Analytics

1. Create account at https://analytics.google.com
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Install package:

```bash
npm install @next/third-parties
```

4. Add to `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

## 🖼️ Adding Real Images

1. Place images in `/public` folder:
   ```
   /public
     /portfolio
       project-1.jpg
       project-2.jpg
     /articles
       article-1.jpg
   ```

2. Update image paths in your pages
3. Use Next.js Image component for optimization:

```typescript
import Image from 'next/image';

<Image 
  src="/portfolio/project-1.jpg"
  alt="Project description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## 🎨 Content Management

For easier content updates, consider adding a CMS:

### Sanity CMS (Recommended)

1. Free tier available
2. Real-time editing
3. Image optimization
4. Easy to use

Setup guide: https://www.sanity.io/docs/getting-started-with-sanity

### Contentful

Alternative CMS option with good free tier.

## 🔍 SEO Optimization

Already included:
- ✅ Semantic HTML
- ✅ Meta tags
- ✅ Fast loading
- ✅ Mobile responsive
- ✅ Clean URLs

To improve further:
1. Add sitemap: `app/sitemap.ts`
2. Add robots.txt: `app/robots.txt`
3. Submit to Google Search Console
4. Add structured data (Schema.org)

## 📱 Social Media Integration

Update social links in `components/Footer.tsx` with your actual profiles.

## 🔒 Security

- HTTPS is automatic on Vercel
- Environment variables are secure
- No sensitive data in client-side code

## 💰 Costs

- **Vercel Hosting**: FREE (hobby plan)
- **Domain**: ~$10-15/year
- **Email Service**: FREE (Resend/Formspree free tiers)
- **Total**: ~$10-15/year (just domain cost!)

## 🆘 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000
```

### Deployment Failed

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Check for TypeScript errors: `npm run build`

## 📞 Support

Need help? Check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/next.js/discussions)

## ✅ Launch Checklist

Before going live:

- [ ] Add real images to portfolio
- [ ] Update contact information
- [ ] Set up contact form email
- [ ] Add Google Analytics
- [ ] Test on mobile devices
- [ ] Test contact form
- [ ] Add custom domain
- [ ] Submit to Google Search Console
- [ ] Update social media links
- [ ] Add real content to all pages
- [ ] Test all navigation links
- [ ] Check loading speed
- [ ] Proofread all text

## 🎉 You're Ready!

Your professional conservation website is ready to launch. Good luck with ASC Conservation Centre!
