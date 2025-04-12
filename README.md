<div align="center">

# Base 7

  <img src="public/logos/base7-submark.svg" alt="Base7 Logo" width="120" />
  <p><em>build your next app in 10 days — consulting, design, development, and hosting — all while your competitors are still planning</em></p>

</div>

## who are we

We're the team that turns "it can't be done" into "it's already finished." With 10+ years of experience creating tomorrow's technology, we build digital experiences in days that others take months to create. Based in Singapore but serving clients worldwide, we craft apps that don't just work—they seamlessly become part of how you live, work, and play.

## what we do

- **Expert Consulting** - We turn your ideas into plans that just make sense. Simple, clear, and refreshingly straightforward.
- **Custom Apps** - Apps that feel made just for you. Because they are. Exactly what you need, with nothing getting in the way.
- **Smart Architecture** - We build systems that grow with you—from your first user to your millionth.
- **Beautiful Design** - Interfaces that just work. Thoughtfully designed to feel familiar from the moment you first use them.
- **Seamless Publishing** - From idea to app store without the headaches. Use our accounts to skip the fees and get to market faster.
- **Ongoing Support** - We don't just build and bail. Think of us as your tech team on standby, ready when you need us.

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

## 📞 Let's Chat

Ready to bring your idea to life? Have a project that needs some tech magic? [Drop us a message](https://tally.so/r/wLoJKj) and we'll get back to you within 24 hours.

---

<div align="center">
  <p>© 2025 Base 7 LLP, Singapore.</p>
</div>
