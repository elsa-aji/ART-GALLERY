# 🎨 Art Gallery Website

A beautiful, responsive art gallery web application with **user authentication** and dynamic gallery display built with HTML, CSS, and JavaScript.

## 🚀 Live Demo

**[👉 Click here to access the login page](./index.html)**

### Demo Credentials:
```
Username: admin     | Password: password123
Username: user      | Password: user123
Username: artist    | Password: artist123
```

---

## 📋 Project Overview

This project is a complete art gallery web application with:
- **User Authentication** (Login page with form validation)
- **Dashboard Gallery** (Main gallery display after login)
- **5 Individual Artwork Detail Pages**
- **Beautiful animations and transitions**
- **Mobile-friendly responsive design**
- **Remember me functionality**

---

## ✨ Features

### 🎯 Core Features
- ✅ **Modern Login Page** - Beautiful gradient design with form validation
- ✅ **Remember Me** - LocalStorage to save username
- ✅ **Dashboard Gallery** - Display art pieces after successful login
- ✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Beautiful Animations** - Smooth transitions and floating effects
- ✅ **Interactive Elements** - Hover effects and smooth interactions
- ✅ **Form Validation** - Client-side validation for better UX

### 📱 Pages

#### Authentication
- **Login Page** (`index.html`) - Email/username and password with remember me
- **Gallery Dashboard** (`gallery.html`) - Main gallery after successful login

#### Artwork Pages
- **Art Piece 1** (`art-piece-1.html`)
- **Art Piece 2** (`art-piece-2.html`)
- **Art Piece 3** (`art-piece-3.html`)
- **Art Piece 5** (`art-piece-5.html`)

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/elsa-aji/ART-GALLERY.git
```

2. **Navigate to the project directory:**
```bash
cd ART-GALLERY
```

3. **Open in your browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server like Python's `http.server`:
   ```bash
   python -m http.server 8000
   ```
   - Then visit `http://localhost:8000`

### File Structure
```
ART-GALLERY/
├── index.html              # Login page (entry point)
├── gallery.html            # Gallery dashboard after login
├── art-piece-1.html        # Artwork detail page 1
├── art-piece-2.html        # Artwork detail page 2
├── art-piece-3.html        # Artwork detail page 3
├── art-piece-5.html        # Artwork detail page 5
├── css/
│   ├── login.css          # Login page styles
│   └── gallery.css        # Gallery page styles
├── js/
│   └── login.js           # Login form functionality
└── README.md              # This file
```

---

## 🎨 Design & Styling

### Color Scheme
- **Primary Color:** Purple (#667eea)
- **Secondary Color:** Dark Purple (#764ba2)
- **Background:** Gradient (Purple to Dark Purple)
- **Light Elements:** White with opacity

### Features
- Glassmorphism effect on login box
- Floating art animations
- Smooth form transitions
- Hover effects on buttons and links

---

## 💻 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **JavaScript** - Form validation and localStorage
- **No frameworks** - Lightweight and fast

---

## 🔐 Login Functionality

### Features
- Form validation (username and password required)
- Password minimum length check (6 characters)
- Error/success messages
- Remember me checkbox with localStorage
- Automatic redirect to gallery on successful login
- Demo credentials for testing

### How Login Works
```javascript
// Valid credentials (demo)
admin / password123
user / user123
artist / artist123
```

---

## 📸 Page Screenshots

### Login Page
- Centered card with glassmorphism effect
- Purple gradient background
- Smooth slide-in animation
- Floating art emoji animations

### Gallery Dashboard
- Navigation bar with logout button
- Grid layout of art pieces
- Responsive design (adapts to screen size)
- Card hover effects

### Artwork Detail Pages
- Large artwork image
- Complete artwork information
- Related artwork suggestions
- Navigation back to gallery

---

## 🌐 Deployment

### Deploy to GitHub Pages (Already Live!)
Your site is already live at:
```
https://elsa-aji.github.io/ART-GALLERY/
```

### Deploy to Other Platforms
- **Netlify** - Drag and drop deployment
- **Vercel** - Easy Git integration
- **Firebase Hosting** - Free tier available
- **Any static hosting service**

---

## 📱 Responsive Design

- **Desktop:** 1200px and above - Full layout
- **Tablet:** 768px to 1199px - Adjusted grid
- **Mobile:** Below 768px - Optimized for small screens

---

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Form labels for all inputs
- Keyboard navigation support
- Readable color contrast ratios
- Responsive text sizing

---

## 🔧 Customization

### Change Login Credentials
Edit `js/login.js`:
```javascript
const validCredentials = {
    'yourUsername': 'yourPassword',
    'admin': 'newPassword'
};
```

### Modify Colors
Edit `css/login.css` and `css/gallery.css`:
```css
background: linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_COLOR2 100%);
```

### Update Gallery Content
1. Edit `gallery.html` to modify art pieces
2. Update `art-piece-X.html` files with new content
3. Add images by updating image URLs

---

## 🎓 Learning Resources

### CSS Animations
- [MDN Web Docs - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

### Form Validation
- [MDN Web Docs - Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

### LocalStorage
- [MDN Web Docs - LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

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
- Add more artwork pieces
- Create admin dashboard
- Dark mode toggle

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👤 Author

Created by **Elsa Aji**

---

## 🙏 Credits

- Modern UI/UX Design
- CSS Animations
- JavaScript Form Handling
- GitHub Pages Hosting

---

## 📞 Support

For issues, questions, or suggestions:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include screenshots if applicable
4. Describe steps to reproduce the issue

---

**Enjoy exploring the world of art! 🎨**

**Live Demo:** [https://elsa-aji.github.io/ART-GALLERY/](https://elsa-aji.github.io/ART-GALLERY/)

**Repository:** [https://github.com/elsa-aji/ART-GALLERY](https://github.com/elsa-aji/ART-GALLERY)
