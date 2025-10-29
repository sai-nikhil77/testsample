# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Design** drawing from modern developer portfolios and professional platforms like Linear, Stripe, and GitHub's portfolio templates. This portfolio emphasizes clean professionalism with strategic visual impact to capture recruiter attention.

## Layout Architecture

**Single-Page Structure with Smooth Navigation**
- Fixed header navigation with smooth scroll anchors
- Sections: Hero → About → Projects → Resume → Contact
- Full-width sections with centered max-w-6xl content containers

**Spacing System**
Use Tailwind spacing units of 4, 6, 8, 12, 16, 20, and 24 consistently:
- Section vertical padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 for grids, space-y-6 for stacked content
- Element margins: mb-4, mb-6, mb-8 for hierarchy

## Typography Hierarchy

**Font Selection**: Use Google Fonts
- Primary: Inter (headings and UI) - weights 400, 600, 700
- Secondary: JetBrains Mono (code snippets, technical details) - weight 400

**Type Scale**:
- H1 (Name): text-5xl md:text-7xl font-bold tracking-tight
- H2 (Section Titles): text-4xl md:text-5xl font-bold mb-12
- H3 (Subsections): text-2xl font-semibold mb-6
- Body: text-lg leading-relaxed
- Small/Meta: text-sm font-medium

## Section Specifications

### Hero Section (80vh minimum)
- Full-width hero image (professional workspace, coding setup, or abstract tech-themed)
- Overlay gradient for text readability
- Centered content: Name, professional title/tagline, brief elevator pitch (1-2 sentences)
- Primary CTA button with blur background: "View My Work" (scroll to projects)
- Secondary CTA: "Download Resume"
- Social icons row (LinkedIn, GitHub, Email) with consistent spacing

### About Me Section
Two-column layout (lg:grid-cols-2):
- Left column: Professional headshot image (rounded-2xl, grayscale hover effect)
- Right column: Biography (2-3 paragraphs), Skills grid below (3-4 columns of skill badges with icons from Heroicons)
- Skills represented as pill-shaped badges with subtle borders

### Projects Showcase
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Each project card includes:
  - Project thumbnail/preview image (aspect-video)
  - Project title (text-xl font-semibold)
  - Description (2-3 lines, text-base)
  - Tech stack tags (smaller pills)
  - Footer with GitHub repo link icon and "View Project" link
- Cards with subtle border, hover lift effect (translate-y transform)

### Resume Section
- Embedded resume viewer: iframe or custom-built sections showing:
  - Experience timeline (vertical line with company logos/icons)
  - Education cards
  - Certifications/Achievements grid
- Prominent "Download PDF Resume" button at top
- Alternative: Direct PDF viewer with download option

### Contact Section
Split layout (lg:grid-cols-2):
- Left: Contact form (Name, Email, Message fields with clean styling)
- Right: Direct contact information card featuring:
  - Large LinkedIn profile button with icon
  - Large GitHub profile button with icon
  - Email address with copy-to-clipboard functionality
  - Optional: Calendly link for scheduling calls
  - Response time expectation ("I typically respond within 24 hours")

## Component Library

**Navigation**
- Fixed header with semi-transparent backdrop blur
- Logo/name on left, nav links on right
- Mobile: Hamburger menu with slide-in drawer

**Buttons**
- Primary: Solid with rounded-lg, px-8 py-3, font-semibold
- Secondary: Border with transparent background
- Icon buttons: p-3 rounded-full for social links
- Blur backgrounds for buttons over images (backdrop-blur-sm bg-white/20)

**Cards**
- Standard padding: p-6
- Border: border border-neutral-200/50
- Rounded corners: rounded-xl
- Hover state: subtle shadow increase and border intensity

**Forms**
- Input fields: px-4 py-3, rounded-lg border
- Labels: text-sm font-medium mb-2
- Focus states: ring-2 offset-2

**Icons**
Use Heroicons throughout:
- Navigation: menu, x-mark
- Social: link, envelope, code-bracket
- UI: arrow-right, download, external-link

## Images

**Hero Image**: Professional workspace or abstract technology theme (coding setup, minimalist desk, or geometric tech patterns). Full-width, 80vh height, with dark gradient overlay from bottom for text contrast.

**About Section**: Professional headshot, square format (400x400px minimum), positioned left column with rounded-2xl corners.

**Project Thumbnails**: Screenshot or mockup for each project, 16:9 aspect ratio, showing key UI or functionality.

## Accessibility Standards
- Semantic HTML with proper heading hierarchy
- Form labels properly associated with inputs
- Alt text for all images
- Focus indicators on all interactive elements
- ARIA labels for icon-only buttons
- Keyboard navigation support

## Animations
Minimal, purposeful animations only:
- Smooth scroll behavior for anchor navigation
- Gentle hover states (0.2s transitions)
- Card lift on hover: transform translate-y-1
- No scroll-triggered animations or parallax effects

This portfolio design balances professional credibility with modern aesthetics, ensuring recruiters immediately see your value while having easy access to resume and professional profiles.