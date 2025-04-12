# Base 7

<div align="center">
  <img src="public/logos/base7-submark.svg" alt="Base7 Logo" width="120" />
  <p><em>Build your next app in 10 days</em></p>
</div>

## 🚀 About Base7

Base7 is a Singapore-based software company specializing in consulting, design, development, and deployment of innovative software solutions. We are innovators, creators, and enablers of tomorrow's technology, crafting scalable, impactful, and beautifully designed software solutions that transform ideas into reality.

## 🛠️ Our Services

- **Consulting** - Need professional advice? We're here to help.
- **Development** - We build software that works for you.
- **Architecture** - We design software that scales.
- **Design** - We love software that looks good and we know you do too.
- **Deployment** - We bring your software to life.
- **Software as a Service** - We build our own software too.

## 🖥️ Tech Stack

This landing page is built with:

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Embla Carousel](https://www.embla-carousel.com/) - Carousel component
- [Radix UI](https://www.radix-ui.com/) - Headless UI components
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- [Motion](https://motion.dev/) - Animation library

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [pnpm](https://pnpm.io/) (v9.15.0 or newer)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/base7-landing.git
   cd base7-landing
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Start the development server

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Project Structure

```
base7-landing/
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── core/             # Core components like InView
│   ├── motion-primitives/# Animation components
│   ├── ui/               # UI components from shadcn/ui
│   └── ...               # Other components
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── images/           # Images
│   └── logos/            # Logo assets
└── ...                   # Config files
```

## 🎨 Features

- **Modern Design** - Clean, minimalist design with beautiful animations
- **Responsive** - Fully responsive design that works on all devices
- **Animations** - Smooth animations with InView components
- **Projects Showcase** - Interactive carousel with morphing dialog
- **Performance** - Optimized for performance with Next.js

### Animation Components

The site uses custom InView animation components that create beautiful fade-in effects when elements come into view during scrolling:

```jsx
<InViewWrapper
  variants={{
    hidden: { opacity: 0, filter: "blur(4px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  }}
  viewOptions={{ once: true }}
>
  <YourComponent />
</InViewWrapper>
```

## 📞 Contact

Want to build with us? [Get in touch](https://tally.so/r/wLoJKj)

---

<div align="center">
  <p>© 2025 Base 7 LLP, Singapore.</p>
</div>
