# CORTAVIA AI Solutions - Website

A modern, responsive PHP website for CORTAVIA AI Solutions.

## Features

- **Homepage** - Hero section with company introduction and key features
- **Services Page** - Detailed information about all AI services
- **About Page** - Why choose CORTAVIA
- **Contact Page** - Contact form and company information
- **Responsive Design** - Works on all devices (desktop, tablet, mobile)
- **Modern UI** - Clean, professional design using brand colors

## File Structure

```
PHP_Website/
├── config.php          # Site configuration and constants
├── header.php          # Header and navigation (reusable)
├── footer.php          # Footer (reusable)
├── index.php           # Homepage
├── services.php        # Services page
├── about.php           # Why CORTAVIA page
├── contact.php         # Contact page with form
├── styles.css          # All CSS styles
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Setup Instructions

1. **Copy logo files** - Make sure the logo files are accessible:
   - `../public/logo.png` - Plain logo for header
   - `../public/CORTAVIA_LOGO.png` - Full logo for homepage

2. **Web Server** - Place the `PHP_Website` folder in your web server directory:
   - For XAMPP/WAMP: `htdocs/PHP_Website/`
   - For Apache: `/var/www/html/PHP_Website/`
   - Or use PHP's built-in server: `php -S localhost:8000`

3. **Access the website**:
   - Open `http://localhost/PHP_Website/` in your browser
   - Or `http://localhost:8000/` if using PHP's built-in server

## Configuration

Edit `config.php` to update:
- Site name and tagline
- Contact email and phone
- Brand colors (if needed)

## Contact Form

The contact form is currently set up to display a success message. To enable actual email sending:

1. Update `contact.php` to use PHP's `mail()` function or a library like PHPMailer
2. Configure your server's mail settings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

- **Colors**: Edit CSS variables in `styles.css` (`:root` section)
- **Content**: Edit the respective PHP files
- **Layout**: Modify the HTML structure in PHP files and styles in `styles.css`

## Notes

- The website uses the Inter font from Google Fonts
- All images should be in the `../public/` directory relative to PHP_Website
- The design is fully responsive and mobile-friendly

