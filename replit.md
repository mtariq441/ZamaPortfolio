# Zama Services - Digital Agency Portfolio

## Overview

Zama Services is a premium React-based portfolio website for a digital agency specializing in web development and graphic design. The application showcases the agency's services, portfolio projects, team members, and provides a contact mechanism for potential clients. Founded by four creative professionals from Pakistan, the site emphasizes bold typography, clean layouts, premium animations, and a modern agency aesthetic inspired by modern creative agencies like Vercel, Linear, and Stripe.

## Recent Changes (Latest Update)

**Premium UI Upgrade (Latest)**:
- Enhanced Hero section with gradient text effects, animated CTAs, and staggered entrance animations
- Added PremiumStats component displaying key metrics (50+ Projects, 100K+ Lines of Code, 30+ Happy Clients)
- Created TrustedBySection with diagonal animated bands showcasing services (WEB DEVELOPMENT, GRAPHIC DESIGN, BRANDING)
- Upgraded Navigation with enhanced hover effects and gradient buttons
- Enhanced Services cards with gradient overlays and icon animations
- Improved FeaturedProjects with sophisticated hover effects and gradient accents
- Comprehensive accessibility support with prefers-reduced-motion detection
- Performance optimizations using requestAnimationFrame for scroll animations

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with `wouter` library (lightweight alternative to React Router). The application uses a simple route-based structure with pages for Home, About, Services, Portfolio, and Contact.

**UI Component System**: Leverages shadcn/ui component library built on Radix UI primitives. Components follow a consistent design system with customizable variants using `class-variance-authority` for type-safe styling.

**Styling Approach**: 
- Tailwind CSS for utility-first styling
- Custom design tokens defined in CSS variables for theme consistency
- Typography system using Inter (primary) and Space Grotesk (accent) fonts from Google Fonts
- Responsive design with mobile-first breakpoints

**State Management**: 
- React Query (@tanstack/react-query) for server state management and data fetching
- React Hook Form with Zod validation for form handling
- Local component state using React hooks

**Design System Principles**:
- Bold, confident typography establishing authority
- Generous whitespace allowing content to breathe
- Strategic visual hierarchy guiding users through services and portfolio
- Consistent spacing primitives (4, 6, 8, 12, 16, 20, 24px units)
- Maximum content width constraints (max-w-7xl) for readability

### Component Organization

**Page Components**: Each route corresponds to a page component (Home, About, Services, Portfolio, Contact, NotFound) that composes smaller, reusable components.

**Reusable Components**: Modular component architecture with distinct components for Navigation, Hero, TrustedBySection, PremiumStats, Services, FeaturedProjects, Testimonials, Footer, etc. Each component is self-contained and can be used independently.

**Premium Animation Components**:
- **TrustedBySection**: Diagonal animated bands with scroll-parallax effect showcasing services
- **PremiumStats**: Animated statistics display with staggered entrance animations
- **Hero**: Enhanced with gradient text effects, animated badges, and smooth entrance transitions
- All animations respect prefers-reduced-motion for accessibility

**UI Primitives**: Comprehensive set of shadcn/ui components in `client/src/components/ui/` providing consistent, accessible building blocks (buttons, cards, forms, dialogs, etc.).

### Static Asset Management

**Images**: Stored in `attached_assets/generated_images/` directory with descriptive filenames. Images are imported directly into components as ES modules for type safety and optimized bundling.

**Path Aliases**: Configured via TypeScript and Vite to support clean imports:
- `@/` maps to `client/src/`
- `@shared/` maps to `shared/`
- `@assets/` maps to `attached_assets/`

### Build Configuration

**Development**: Vite dev server with hot module replacement, Replit-specific plugins for error overlays and development tools.

**Production Build**: 
- Frontend builds to `dist/public/` directory
- Configured for static deployment (outputs SPA with client-side routing)
- All routes rewrite to `/index.html` for proper SPA navigation

**Deployment Target**: Vercel (as indicated by `vercel.json` configuration). The application is configured as a static site with no backend server requirements in production.

### Form Handling Strategy

Contact form uses React Hook Form with Zod schema validation. Currently implements client-side validation only with simulated submission (console logging). Form submission placeholder indicates future backend integration may be needed.

## External Dependencies

### UI & Styling Libraries

- **Radix UI**: Headless, accessible component primitives (@radix-ui/* packages)
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe component variants
- **clsx & tailwind-merge**: Utility for conditional className handling

### Form & Validation

- **React Hook Form**: Performant form state management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integrates Zod with React Hook Form

### Data Fetching

- **@tanstack/react-query**: Async state management and data fetching
- **wouter**: Lightweight client-side routing

### Icon Libraries

- **lucide-react**: Modern icon set
- **react-icons**: Additional icons (specifically using Simple Icons for social media)

### Development Tools

- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety throughout the codebase
- **@replit/vite-plugin-***: Replit-specific development enhancements (runtime error modal, cartographer, dev banner)

### Database (Currently Unused)

The project includes Drizzle ORM and Neon serverless database dependencies in `package.json`, but these are not actively used in the current static implementation. These dependencies suggest the architecture was originally designed to support a full-stack application but has been simplified to a static site for deployment.

**Note**: The presence of unused backend dependencies (Express, Drizzle, PostgreSQL-related packages) indicates potential for future feature expansion to include dynamic content, user authentication, or contact form backend processing.

### Font Integration

Google Fonts integrated via CDN links in `index.html`:
- DM Sans
- Geist Mono  
- Architects Daughter
- Fira Code