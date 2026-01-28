# HOMORA - Premium Home Décor & Furniture Website

## Overview
Homora is a modern, elegant, and user-friendly website for a premium Home Décor and Furniture brand. The website features a sophisticated design with neutral colors, soft textures, and high-quality product visuals that reflect a premium yet warm aesthetic.

## 📁 Project Structure
```
Project Homora/
├── index.html       # Main HTML file with all sections
├── styles.css       # Complete CSS styling and responsive design
├── script.js        # Interactive features and functionality
└── README.md        # Documentation
```

## 🎨 Design Features

### Color Palette
- **Primary Color**: `#8b7355` (Warm Brown)
- **Secondary Color**: `#d4a574` (Soft Gold)
- **Text Dark**: `#2c2c2c` (Charcoal)
- **Text Light**: `#666` (Gray)
- **Background Light**: `#faf9f7` (Cream/Beige)
- **White**: `#ffffff` (Clean White)

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Font Sizes: Responsive and scalable
- Font Weights: 500-700 for hierarchy

## 📱 Website Sections

### 1. **Navigation Bar**
- Sticky navigation with smooth scroll
- Logo (HOMORA)
- Navigation menu with smooth hover effects
- Search, wishlist, and shopping cart icons
- Responsive design for mobile devices

### 2. **Hero Section**
- Large lifestyle image of a stylish living space
- Compelling headline: "Transform Your Living Space"
- Subtitle describing the brand promise
- "Shop Now" call-to-action button
- Responsive grid layout

### 3. **About Us Section**
- Brand story focusing on craftsmanship and quality
- Information about materials and contemporary design
- Mission statement
- Accompanying lifestyle image
- "Learn More" button for engagement

### 4. **Product Categories**
- 8 product categories displayed in a responsive grid:
  - **Furniture**: Sofas, Beds, Tables, Chairs
  - **Home Décor**: Wall Art, Lighting, Rugs, Plants
- Hover effects with image zoom animation
- Category images with descriptive text
- Interactive navigation

### 5. **Featured Products**
- 4 featured products with:
  - High-quality product images
  - Product badges (New/Best Seller)
  - Star ratings with review count
  - Descriptive text
  - Original and discounted pricing
  - Quick View button for modal interaction
- Responsive grid layout

### 6. **Why Choose Us**
- 6 key benefits with icons:
  - Premium Quality
  - Sustainable Materials
  - Custom Designs
  - Doorstep Delivery
  - Easy Returns
  - 24/7 Support
- Card-based layout with hover effects
- Font Awesome icons for visual appeal

### 7. **Customer Reviews**
- 3 customer testimonials with:
  - Star ratings
  - Review text
  - Customer avatar
  - Customer name and location
- Professional testimonial cards
- Hover animation effects

### 8. **Call to Action Section**
- Eye-catching gradient background
- Headline: "Transform Your Space Today"
- Dual action buttons (Shop / Contact)
- Full-width responsive layout

### 9. **Footer**
- 4-column footer layout:
  - Brand information and social links
  - Quick navigation links
  - Support and help links
  - Contact information and newsletter signup
- Newsletter subscription form
- Social media icons with hover effects
- Copyright and legal links
- Responsive grid

### 10. **Quick View Modal**
- Interactive product detail popup
- Product image, title, rating, and description
- Quantity selector
- Add to Cart button
- Customize option
- Close functionality (X button, Escape key, outside click)

## 🎯 Interactive Features

### JavaScript Functionality
1. **Quick View Modal**
   - Opens product details in a modal popup
   - Dynamically populates with product information
   - Closes on Escape key, outside click, or close button

2. **Scroll Animations**
   - Elements fade in and slide up as they come into view
   - IntersectionObserver for performance optimization
   - Smooth scroll behavior for navigation

3. **Active Navigation Indicator**
   - Highlights current section in navigation menu
   - Updates as user scrolls

4. **Form Interactions**
   - Newsletter signup with email validation
   - Add to cart functionality
   - Customization button

5. **Icon Interactions**
   - Search functionality
   - Wishlist toggle
   - Shopping cart

## 📐 Responsive Design

### Breakpoints
- **Desktop**: Full layout with all features
- **Tablet (768px)**: Optimized grid columns, adjusted font sizes
- **Mobile (480px)**: Single column layouts, hidden navigation, full-width buttons

### Mobile Features
- Hamburger menu ready (toggle function included)
- Touch-friendly button sizes
- Optimized image sizes
- Vertical stacking of content

## 🚀 Features & Highlights

✅ **Modern Aesthetic**: Clean, elegant design with premium feel
✅ **Responsive**: Fully responsive on desktop, tablet, and mobile
✅ **Performance**: Optimized images, smooth animations, lazy loading ready
✅ **Accessibility**: Semantic HTML, proper color contrast, keyboard navigation
✅ **User Experience**: Smooth transitions, intuitive interactions, clear CTAs
✅ **SEO Friendly**: Proper meta tags, semantic structure
✅ **Product Focus**: High-quality product visuals and detailed information
✅ **Social Proof**: Customer reviews and ratings
✅ **Newsletter Integration**: Email subscription ready
✅ **Mobile Optimized**: Touch-friendly, fast loading

## 🎬 How to Use

1. **Open the Website**
   - Open `index.html` in a modern web browser
   - All files should be in the same directory

2. **Navigation**
   - Click navigation links to scroll to sections
   - Use search, wishlist, and cart icons

3. **Product Interaction**
   - Click "Quick View" on any featured product
   - View product details in the modal
   - Adjust quantity and add to cart

4. **Newsletter Signup**
   - Enter email in footer newsletter form
   - Click Subscribe

5. **Responsive Testing**
   - Resize browser window to see responsive design
   - Test on mobile devices

## 🛠️ Customization Guide

### Change Brand Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #8b7355;      /* Change this */
    --secondary-color: #d4a574;    /* Change this */
    --text-dark: #2c2c2c;
    --text-light: #666;
    --bg-light: #faf9f7;
    --bg-white: #ffffff;
}
```

### Update Product Images
Replace image URLs in `index.html`:
```html
<img src="your-image-url.jpg" alt="Product">
```

### Add More Products
Copy a product card and update:
- Image URL
- Product title
- Rating
- Description
- Pricing
- Badge

### Modify Content
Edit text directly in `index.html`:
- Brand name
- Section titles
- Descriptions
- Testimonials
- Contact information

### Add Custom Fonts
Add Google Fonts link in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font" rel="stylesheet">
```

## 🔗 External Resources Used

- **Font Awesome Icons**: CDN for beautiful icons
- **Images**: Unsplash API for high-quality lifestyle images
- **Avatars**: Pravatar for customer avatars

## 📋 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ⚠️ Limited support (CSS Grid, Flexbox)

## 📊 Performance Optimization

- Lightweight CSS (no heavy frameworks)
- Vanilla JavaScript (no dependencies)
- Optimized images with proper sizing
- Lazy loading ready
- Smooth animations using CSS transforms
- Efficient event listeners

## 🔒 Security Notes

- Form submissions are handled client-side (ready for backend integration)
- No sensitive data is stored
- CSP ready (add headers on server)
- HTTPS recommended for production

## 📝 Future Enhancements

- Backend integration for product database
- Payment gateway integration
- User authentication
- Shopping cart persistence
- Wishlist functionality
- Product filters and search
- Blog/News section
- Customer account management
- Live chat support
- Analytics integration

## 👨‍💻 Developer Notes

- Clean, semantic HTML structure
- Well-organized CSS with comments
- Modular JavaScript functions
- Mobile-first approach
- Progressive enhancement
- Ready for CSS preprocessors (SASS/LESS)
- Ready for JavaScript bundlers

## 📞 Support & Contact

For questions or customization needs:
- Email: hello@homora.com
- Phone: +1 (555) 123-4567
- Address: 123 Design Street, New York, NY 10001

---

**Version**: 1.0
**Last Updated**: January 2026
**Status**: Production Ready

Enjoy your beautiful Homora website! 🏡✨
