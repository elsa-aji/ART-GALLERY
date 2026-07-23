# 🎨 Art Gallery Website

A beautiful, responsive art gallery web application built with HTML, CSS, and Bootstrap 5. Featuring authentication pages, a curated gallery display, and detailed individual artwork pages with rich information and related artwork recommendations.

## 📋 Project Overview

This project is a complete art gallery web application with:
- User authentication (Login & Sign Up)
- Responsive gallery home page
- 5 detailed individual artwork pages
- Beautiful animations and transitions
- Mobile-friendly responsive design

**Total Pages:** 9 Pages
- 2 Authentication Pages (Login, Sign Up)
- 1 Gallery Home Page
- 5 Individual Art Piece Pages
- 1 Stylesheet (CSS)

## ✨ Features

### 🎯 Core Features
- ✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Bootstrap 5 Framework** - Professional, modern UI components
- ✅ **Beautiful Animations** - Smooth fade-in, slide-up, and zoom effects
- ✅ **Interactive Hover Effects** - Image scaling, card elevation, overlay buttons
- ✅ **No Form Validations** - Forms are ready for backend integration

### 📱 Page Components

#### Authentication Pages
- **Login Page** - Email and password fields with remember me checkbox
- **Sign Up Page** - Full registration form with password confirmation

#### Gallery Section
- **Gallery Home** - Displays 6 famous art pieces in a responsive grid
- **Each Art Piece Shows:**
  - High-quality artwork image
  - Artist name
  - Art category/type
  - Interactive "View Details" button

#### Individual Artwork Pages (5 Pages)
Each page includes:
- Large artwork image
- Artist name
- Year of creation
- Category/Art movement
- Detailed description
- Medium/Technique information
- 2-3 similar artwork recommendations

### 🖼️ Artwork Featured
1. **Starry Night** - Vincent van Gogh (1889) - Post-Impressionism
2. **The Persistence of Memory** - Salvador Dalí (1931) - Surrealism
3. **The Birth of Venus** - Sandro Botticelli (1484) - Renaissance
4. **Girl with a Pearl Earring** - Johannes Vermeer (1665) - Dutch Golden Age
5. **The Scream** - Edvard Munch (1893) - Expressionism

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/elsa-aji/art-gallery.git
```

2. **Navigate to the project directory:**
```bash
cd art-gallery
```

3. **Open in your browser:**
   - Simply open any `.html` file in your web browser
   - Example: Double-click `index.html` to start at the login page

### File Structure
```
art-gallery/
├── index.html              # Login page
├── signup.html             # Sign up page
├── gallery.html            # Gallery home page (main display)
├── art-piece-1.html        # Starry Night details
├── art-piece-2.html        # The Persistence of Memory details
├── art-piece-3.html        # The Birth of Venus details
├── art-piece-4.html        # Girl with a Pearl Earring details
├── art-piece-5.html        # The Scream details
├── css/
│   └── style.css           # Main stylesheet with animations
└── README.md               # This file
```

## 🎨 Design & Styling

### Color Scheme
- **Primary Color:** Purple (#6c5ce7)
- **Secondary Color:** Light Purple (#a29bfe)
- **Background:** Light Gray (#f5f6fa)
- **Dark Elements:** Dark Gray (#2d3436)

### Typography
- **Font Family:** Segoe UI, Tahoma, Geneva, Verdana
- **Font Weights:** 600-700 for headings, 400 for body text

### Animations Included
- **Fade-in:** Smooth opacity transitions
- **Slide-up:** Elements sliding from bottom to top
- **Slide-in:** Elements sliding from left to right
- **Zoom Effects:** Image scaling on hover
- **Card Elevation:** Shadow effects on hover

## 💻 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Bootstrap 5** - Responsive grid system and components
- **Font Awesome Ready** - Icon support (can be added)
- **Unsplash Images** - High-quality artwork images

## 📸 Screenshots

### Login Page
- Clean, centered card design
- Purple gradient background
- Email and password input fields
- Link to sign up page

### Gallery Home Page
- Responsive grid layout (1 col mobile, 2 cols tablet, 3 cols desktop)
- Art cards with hover effects
- Overlay "View Details" buttons
- Navigation bar with logout

### Individual Artwork Pages
- Large artwork display
- Complete artwork information
- Related artwork suggestions (3 pieces)
- Navigation back to gallery
- Responsive layout with side-by-side design on desktop

## 🔧 Customization

### Change Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #6c5ce7;
    --secondary-color: #a29bfe;
    --dark-bg: #2d3436;
    --light-bg: #f5f6fa;
}
```

### Update Images
Replace the image URLs in HTML files:
```html
<img src="YOUR_IMAGE_URL" alt="Description">
```

### Add More Artwork
1. Create a new `art-piece-X.html` file
2. Copy structure from existing art piece pages
3. Update image URL, title, artist, year, description
4. Add to gallery.html grid
5. Link from related sections

### Modify Text Content
All text content is editable in the HTML files. Simply open any file and update:
- Titles
- Descriptions
- Artist names
- Categories
- Button text

## 🌐 Deployment

### Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to repository settings
3. Scroll to "GitHub Pages"
4. Select main branch as source
5. Your site will be live at: `https://yourusername.github.io/art-gallery`

### Other Hosting Options
- **Netlify** - Drag and drop deployment
- **Vercel** - Easy Git integration
- **Firebase Hosting** - Free tier available
- **Any static hosting service**

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above
- **Tablet:** 768px to 1199px
- **Mobile:** Below 768px

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Image alt text for all images
- Keyboard navigation support
- Readable color contrast ratios
- Responsive text sizing

## 🎓 Learning Resources

### Bootstrap Documentation
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/)

### CSS Animations
- [MDN Web Docs - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

### Responsive Design
- [Google's Web Fundamentals](https://developers.google.com/web/fundamentals)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

### Ideas for Enhancement
- Add a contact form
- Implement image gallery lightbox
- Add search/filter functionality
- Create artist profile pages
- Add shopping cart for art sales
- Integrate with backend API
- Add user reviews/ratings
- Implement user authentication
- Add more artwork pieces
- Create admin dashboard

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

Created by **Elsa Aji**

## 🙏 Credits

- **Bootstrap 5** - CSS Framework
- **Unsplash** - Free high-quality images
- **Font Awesome** - Icons (optional integration)
- **Famous Artists** - Original artwork inspiration

## 📞 Support

For issues, questions, or suggestions:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include screenshots if applicable
4. Describe steps to reproduce the issue

## 🎯 Future Enhancements

Planned features for future versions:
- [ ] Dark mode toggle
- [ ] Image lightbox/modal viewer
- [ ] Artist profile pages
- [ ] Search and filter functionality
- [ ] User favorites/wishlist
- [ ] Comment section on artwork pages
- [ ] Social media sharing buttons
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Backend integration for data management

---

**Enjoy exploring the world of art! 🎨**

**Live Repository:** [https://github.com/elsa-aji/art-gallery](https://github.com/elsa-aji/art-gallery)
