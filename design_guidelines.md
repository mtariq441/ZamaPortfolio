# Zama Services - Premium Agency Portfolio Design Guidelines

## Design Approach

**Selected Framework:** Reference-Based Approach drawing inspiration from modern creative agencies (Vercel, Linear, Stripe) with bold typography and clean layouts that showcase work effectively.

**Core Principles:**
- Bold, confident typography that establishes authority
- Generous whitespace to let work breathe
- Strategic visual hierarchy guiding users through services and portfolio
- Professional polish that demonstrates design expertise

---

## Typography System

**Primary Font:** Inter (Google Fonts) - Clean, modern, professional
**Accent Font:** Space Grotesk (Google Fonts) - Bold, geometric for headlines

**Hierarchy:**
- Hero Headlines: text-6xl md:text-7xl lg:text-8xl, font-bold, tracking-tight
- Section Headlines: text-4xl md:text-5xl lg:text-6xl, font-bold
- Subsection Titles: text-2xl md:text-3xl, font-semibold
- Card/Component Headers: text-xl md:text-2xl, font-semibold
- Body Copy: text-base md:text-lg, font-normal, leading-relaxed
- Captions/Meta: text-sm, font-medium, tracking-wide, uppercase

---

## Layout & Spacing System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component internal spacing: p-6, p-8
- Section vertical padding: py-16 md:py-24 lg:py-32
- Section horizontal padding: px-6 md:px-12 lg:px-16
- Grid gaps: gap-6, gap-8, gap-12
- Element margins: mb-4, mb-6, mb-8, mb-12

**Container Strategy:**
- Max-width constraint: max-w-7xl mx-auto for content sections
- Full-width sections with inner constraints
- Consistent edge spacing across all viewports

**Grid Patterns:**
- Services: 2-column grid (md:grid-cols-2) with generous gap-12
- Projects: 3-column masonry (sm:grid-cols-2 lg:grid-cols-3, gap-8)
- Team members: 4-column grid (sm:grid-cols-2 lg:grid-cols-4, gap-6)
- Benefits/Features: 3-column (md:grid-cols-3, gap-8)

---

## Page-Specific Layouts

### Home Page Structure (8 Sections)

**1. Hero Section (80vh minimum)**
- Large background image showcasing agency work or creative workspace
- Overlay with subtle gradient for text contrast
- Centered content with headline + subtext + dual CTAs
- Buttons with backdrop-blur-md background treatment over image

**2. About Mini Section**
- Single column, centered, max-w-3xl
- Large body text (text-lg md:text-xl)

**3. Services Showcase**
- 2-column grid layout
- Each service card: icon (Heroicons), title, 5-6 bullet points
- Hover state with subtle elevation

**4. Featured Projects**
- Masonry-style grid (3 columns desktop)
- Filter buttons above grid (All | Web Dev | Design)
- Project cards with image, title, brief description, tools badges
- "View Case Study" link per card

**5. Why Choose Zama**
- 4-column grid (responsive to 2-col, then 1-col)
- Icon + headline + short description per card
- Equal height cards with subtle border treatment

**6. Testimonials**
- 3-column grid layout
- Each testimonial: quote, client name, company, optional photo
- Quotation mark design element

**7. CTA Section**
- Full-width section with centered content
- Large headline + supporting text
- Single prominent button

**8. Footer**
- 4-column layout (responsive collapse)
- Logo + quick links + services + contact info
- Social links row
- Copyright bar

### About Page Structure (3 Sections)

**1. Story + Mission Section**
- 2-column layout: Story on left, Mission/Vision on right
- Large opening paragraph

**2. Team Grid**
- 4-column responsive grid
- Each member: Photo (square aspect-ratio), name, role, brief bio
- Consistent card styling with hover states

**3. Values/Process** (Additional enrichment)
- 3-column grid showing work process or core values

### Services Page Structure (4 Sections)

**1. Services Hero**
- Large headline introducing offerings
- Brief value proposition

**2. Web Development Service Block**
- Left-aligned content with 2-column feature grid
- Service description + 6-8 key features with icons
- Related project thumbnails

**3. Graphic Design Service Block**
- Mirror layout of Web Dev (right-aligned variation for visual interest)
- Service description + features + thumbnails

**4. CTA Section**
- Centered "Request Quote" with supporting text

### Portfolio Page Structure

**1. Portfolio Header**
- Headline + filter buttons (All | Web Dev | Design)
- Count indicator showing number of projects

**2. Projects Grid**
- 3-column masonry layout
- Each card: Large image, overlay on hover with title + description + tools
- "View Case Study" CTA on hover

**3. Load More** (if many projects)
- Centered button to reveal additional projects

### Case Study Page Structure (6 Sections)

**1. Project Hero**
- Full-width featured image
- Project title + client + year + role overlaid

**2. Overview**
- 2-column: Challenge description | Solution approach
- Key metrics in highlighted cards

**3. Process**
- Timeline or step-by-step layout
- Mix of text + supporting images
- Design/development phases clearly separated

**4. Visual Showcase**
- Large images showing final deliverables
- Multiple images in grid or slider format
- Screenshots, mockups, branding materials

**5. Results & Tools**
- 2-column: Results/metrics on left | Tools/tech stack on right
- Badge-style tool icons

**6. Client Feedback**
- Centered testimonial with large quote
- Next project navigation

### Contact Page Structure (2 Main Sections)

**1. Contact Form Section**
- 2-column layout: Form on left (60%) | Info on right (40%)
- Form fields: Name, Email, Project Type (dropdown: Web Dev | Design | Both | Other), Message
- Submit button prominent
- Right side: Contact details, social links, office hours placeholder

**2. Additional Contact Methods**
- 3-column grid: WhatsApp | Email | Social
- Each with icon + CTA button

---

## Component Library

### Navigation
- Fixed header with backdrop-blur on scroll
- Logo left, menu center/right
- Mobile: Hamburger menu with slide-in drawer
- Smooth scroll behavior to anchors

### Buttons
**Primary CTA:** Rounded-full, px-8 py-4, font-semibold, text-lg
**Secondary CTA:** Rounded-full, px-8 py-4, font-semibold, outline style
**Text Links:** Underline on hover, font-medium

### Cards
**Project Cards:** Rounded-2xl, overflow-hidden, aspect-ratio-[4/3] image
**Service Cards:** Rounded-xl, p-8, border treatment
**Team Cards:** Rounded-xl, overflow-hidden, aspect-ratio-square image

### Forms
- Input fields: Rounded-lg, px-4 py-3, border treatment
- Focus states with ring treatment
- Consistent spacing between fields (space-y-6)
- Labels: text-sm, font-medium, mb-2

### Badges/Tags
- Rounded-full, px-3 py-1, text-xs, font-medium
- Used for tools, categories, filters

---

## Images

### Hero Image (Home Page)
- **Description:** Wide-angle shot of creative workspace with team collaborating, or abstract digital artwork showcasing design work. Should feel modern, energetic, professional.
- **Placement:** Full-width background for hero section, 80vh minimum height
- **Treatment:** Subtle gradient overlay (dark to transparent) for text readability

### Project Images (Portfolio)
- **Description:** High-quality screenshots of websites, mockups of designs, branding work
- **Placement:** Featured in project grid cards, case study showcases
- **Format:** 4:3 aspect ratio for consistency in grid

### Team Photos (About Page)
- **Description:** Professional headshots with consistent lighting/background
- **Placement:** Team member grid, square aspect ratio
- **Treatment:** Subtle grayscale with color on hover, or consistent filter

### Additional Images
- Service section: Decorative graphics or simplified website/design screenshots
- Case study: Multiple process images, final deliverables, before/after comparisons
- Testimonials: Optional client logos or small profile photos

---

## Animations & Interactions

**Scroll Animations (Minimal):**
- Fade-in on scroll for section headlines only
- Stagger animation for project grid items (subtle, fast)

**Hover States:**
- Cards: Subtle elevation (shadow increase)
- Images: Slight scale (scale-105)
- Buttons: Background intensity change
- Links: Underline slide-in animation

**Page Transitions:**
- Smooth scroll behavior for anchor navigation
- Fast, simple fade transitions between pages

---

## Accessibility

- Minimum touch target: 44x44px for all interactive elements
- Focus visible states for keyboard navigation (ring-2)
- Alt text for all images
- Proper heading hierarchy (h1 → h6)
- Form labels explicitly associated with inputs
- Sufficient contrast ratios maintained throughout

---

## Mobile Responsiveness

**Breakpoint Strategy:**
- Mobile-first approach
- Key breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Single column layouts for mobile, expand to multi-column at md/lg
- Hamburger navigation below lg breakpoint
- Touch-friendly spacing and button sizes
- Hero text sizes scale down appropriately (text-4xl → text-6xl)