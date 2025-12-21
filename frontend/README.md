# Frontend - React + Vite

Modern React application with TypeScript and Tailwind CSS.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router

## Structure

```
src/
├── api/          # API client (http.ts)
├── components/   # Reusable components
├── hooks/        # Custom React hooks
├── layouts/      # Layout components
├── pages/        # Page components
└── styles/       # Global styles
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create `.env` file:
```
VITE_API_BASE_URL=http://localhost:8000
```

## Adding New Pages

1. Create component in `src/pages/`
2. Add route in `src/App.tsx`

Example:
```tsx
// src/pages/About.tsx
const About = () => {
  return <div>About Page</div>;
};
export default About;

// src/App.tsx
import About from './pages/About';
<Route path="/about" element={<About />} />
```

## Styling

- Tailwind CSS for utility classes
- Global styles in `src/styles/index.css`
- Component-specific styles can use Tailwind or CSS modules

