# Hygiene Experts - Premium Cleaning Services Website

## 🧹 Project Overview

A premium, fully responsive single-page static website for Hygiene Experts, Sydney's leading commercial and residential cleaning service provider.

### Features
- ✨ Premium soft light cleaning theme design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading and optimized performance
- 🎨 Distinctive typography with Cormorant Garamond & Outfit fonts
- 🔍 SEO optimized with semantic HTML and structured data
- ♿ Accessible with ARIA labels and semantic markup
- 🎭 Smooth animations and micro-interactions
- 📧 Contact form with validation

## 📁 File Structure

```
/
├── index.html          # Main HTML file (single page)
├── style.css          # Complete stylesheet
├── script.js          # JavaScript functionality
├── sitemap.xml        # SEO sitemap
├── robots.txt         # Search engine crawler instructions
└── images/            # Optimized images
    ├── carpet_cleaning_service.jpg
    ├── Janitorial_service.jpg
    ├── Upholstery_cleaning_service.jpg
    ├── Window_cleaning_service.jpg
    ├── House_cleaning_service.jpg
    └── Professional_maid_service_competitors.jpg
```

## 🚀 Deployment Instructions

### Option 1: Netlify (Recommended)

1. Create a Netlify account at https://www.netlify.com
2. Drag and drop the entire project folder to Netlify
3. Your site will be live instantly!
4. Custom domain can be configured in Settings

**Netlify Drop Instructions:**
- Go to https://app.netlify.com/drop
- Drag the entire project folder
- Done! Your site is live

### Option 2: GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select branch (main) and root directory
5. Save and your site will be live at `username.github.io/repo-name`

### Option 3: Traditional Web Hosting

1. Connect to your hosting via FTP/SFTP
2. Upload all files to the public_html or www directory
3. Ensure index.html is in the root directory
4. Your site will be accessible at your domain

## 🔧 Customization

### Update Contact Information
Edit `index.html` and search for:
- Phone: `+61 2 XXXX XXXX`
- Email: `info@hygienexperts.com.au`
- Replace with actual contact details

### Update Colors
Edit `style.css` CSS custom properties:
```css
:root {
    --color-accent: #4a9fb5;  /* Change primary color */
    --color-accent-dark: #357a8f;
    /* ... other color variables */
}
```

### Add Google Analytics
Add your tracking code in `script.js` at the bottom analytics section.

## 📊 SEO Features

- ✅ Semantic HTML5 markup
- ✅ Schema.org structured data for local business
- ✅ Optimized meta tags and descriptions
- ✅ Image alt tags with keywords
- ✅ Internal linking to main site
- ✅ XML sitemap
- ✅ robots.txt configuration
- ✅ Open Graph tags for social sharing

### Primary Keywords Targeted:
- Commercial Cleaning Sydney
- Residential Cleaning Sydney
- Office Cleaning Services Sydney
- Carpet Cleaner Sydney
- House Cleaning Sydney
- End of Lease Cleaning Sydney
- Bond Cleaning Sydney

## 🎨 Design Specifications

### Typography
- Display Font: Cormorant Garamond (elegant serif)
- Body Font: Outfit (modern sans-serif)

### Color Palette
- Primary: #e8f4f8 (Soft Blue)
- Accent: #4a9fb5 (Ocean Blue)
- Text: #1a2e35 (Dark Slate)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lazy loading images
- Optimized CSS animations
- Minimal JavaScript
- No external dependencies (except Google Fonts)
- Fast loading times

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Guidelines

All content is:
- SEO optimized (1500+ words)
- Original and unique
- High authority tone
- Conversion focused
- Keyword rich but natural

## 🔗 Internal Linking

All CTAs link to main website: https://hygienexperts.com.au/

## 📧 Contact Form

The contact form currently logs to console. To make it functional:
1. Integrate with Netlify Forms (if using Netlify)
2. Or connect to a backend API
3. Or use a service like Formspree, EmailJS, or Web3Forms

### Netlify Forms Setup:
Add `netlify` attribute to form tag:
```html
<form class="contact-form" id="contactForm" netlify>
```

## 🎯 Call-to-Action Strategy

Multiple CTAs throughout:
- Hero section: Primary CTA
- Service cards: Service-specific CTAs
- Commercial section: Commercial quote CTA
- Residential section: Residential booking CTA
- Contact section: Quote form

## 📞 Support

For questions about this website, contact the development team.

## 📄 License

© 2026 Hygiene Experts. All rights reserved.

---

**Deployment Checklist:**
- [ ] Replace placeholder phone numbers
- [ ] Update email addresses
- [ ] Add Google Analytics code
- [ ] Test contact form
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check loading speed
- [ ] Validate HTML/CSS
- [ ] Submit sitemap to Google Search Console
