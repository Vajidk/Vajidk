# Landing Page with SCSS Compilation System

A modern, responsive landing page with an optimized SCSS compilation system for better performance and development workflow.

## 🚀 Features

- **SCSS Compilation System** - Organized SCSS architecture with automatic compilation
- **Performance Optimized** - Critical CSS inlined, preload attributes, and optimized resource loading
- **Responsive Design** - Mobile-first approach with modern CSS Grid and Flexbox
- **Modern JavaScript** - ES6+ features with Intersection Observer and modern APIs
- **Font Optimization** - Inter font from Google Fonts with preloading
- **Build System** - NPM scripts for development and production builds

## 📁 Project Structure

```
Landing_page/
├── assets/
│   ├── css/           # Compiled CSS files
│   ├── js/            # JavaScript files
│   ├── scss/          # SCSS source files
│   └── images/        # Image assets
├── home.html          # Main HTML file
├── package.json       # NPM configuration
└── README.md         # This file
```

## 🛠️ SCSS Architecture

### Main Files:
- `main.scss` - Main entry point that imports all other SCSS files
- `reset.scss` - CSS reset and base styles
- `font.scss` - Font configuration and variables
- `header.scss` - Header component styles
- `nav.scss` - Navigation component styles
- `banner.scss` - Hero/banner section styles
- `footer.scss` - Footer component styles
- `utilities.scss` - Utility classes and global styles
- `critical.scss` - Critical CSS for above-the-fold content

### SCSS Variables:
- Font weights: `$font-weight-regular`, `$font-weight-medium`, `$font-weight-semibold`, `$font-weight-bold`
- Font sizes: `$font-size-xs` to `$font-size-6xl`
- Font families: `$font-family-primary`, `$font-family-secondary`

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- NPM (v6 or higher)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build for development:**
   ```bash
   npm run build:dev
   ```

3. **Start development server with watch mode:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Build production CSS (compressed) |
| `npm run build:dev` | Build development CSS (expanded with source maps) |
| `npm run watch` | Watch SCSS files and compile on changes (development) |
| `npm run watch:compressed` | Watch SCSS files and compile compressed CSS |
| `npm run clean` | Remove all compiled CSS files |
| `npm run dev` | Build development CSS and start watching |

## 🎨 Performance Optimizations

### Critical CSS
- Above-the-fold styles are inlined in the HTML
- Reduces render-blocking resources
- Improves First Contentful Paint (FCP)

### Resource Preloading
- Google Fonts preloaded with `rel="preload"`
- Main CSS file preloaded
- JavaScript preloaded for faster execution

### Font Loading
- Inter font loaded with `display=swap`
- Fallback fonts for better performance
- Font weights optimized (400, 500, 600, 700)

### CSS Optimization
- SCSS compilation with source maps for development
- Compressed CSS for production
- Organized architecture for maintainability

## 🔧 Development Workflow

1. **Start Development:**
   ```bash
   npm run dev
   ```

2. **Edit SCSS Files:**
   - Modify files in `assets/scss/`
   - Changes automatically compile to `assets/css/main.css`

3. **View Changes:**
   - Open `home.html` in your browser
   - Use Live Server extension for auto-refresh

4. **Production Build:**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

The landing page is built with a mobile-first approach:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Breakpoints:
```scss
@media (max-width: 768px) { /* Mobile styles */ }
@media (max-width: 1024px) { /* Tablet styles */ }
```

## 🎯 CSS Architecture

### BEM Methodology
- Block: `.banner`
- Element: `.banner__title`
- Modifier: `.banner--large`

### Utility Classes
- Grid system: `.grid`, `.grid-2`, `.grid-3`, `.grid-4`
- Flexbox: `.flex`, `.flex-center`, `.flex-between`
- Spacing: `.mt-1`, `.mb-4`, `.p-8`
- Text: `.text-center`, `.text-white`

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

- **sass**: ^1.69.0 - SCSS compiler

## 🚀 Deployment

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - `home.html`
   - `assets/css/main.css`
   - `assets/js/global.js`
   - `assets/images/` (if any)

3. **Optimize further:**
   - Minify HTML
   - Compress images
   - Enable Gzip compression
   - Use CDN for assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues:

1. **SCSS not compiling:**
   - Ensure Node.js and NPM are installed
   - Run `npm install` to install dependencies
   - Check file paths in `main.scss`

2. **Fonts not loading:**
   - Check internet connection
   - Verify Google Fonts URL in `font.scss`
   - Check browser console for errors

3. **Styles not applying:**
   - Ensure CSS file is compiled: `npm run build:dev`
   - Check file paths in HTML
   - Clear browser cache

### Performance Tips:

1. **Optimize images:**
   - Use WebP format when possible
   - Compress images
   - Use appropriate sizes

2. **Minimize HTTP requests:**
   - Combine CSS files
   - Use CSS sprites for icons
   - Inline critical CSS

3. **Enable caching:**
   - Set appropriate cache headers
   - Use versioned file names
   - Implement service workers

---

**Happy coding! 🎉** 