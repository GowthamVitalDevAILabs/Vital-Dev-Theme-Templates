# Vital React Template

> A modern, accessible, and fully customizable React component library built with TypeScript, Tailwind CSS, and Radix UI.

**Vital React Template** is a comprehensive UI component hub designed to help developers quickly integrate beautiful, production-ready components into their applications. With 40+ components across 9 categories, this template serves as your central reference for building scalable and efficient user interfaces.

## ✨ Features

- **40+ Production-Ready Components** - Comprehensive collection covering all common UI needs
- **Full TypeScript Support** - Complete type safety with excellent IntelliSense
- **Accessible by Default** - Built on Radix UI primitives, WCAG 2.1 AA compliant
- **Dark/Light Theme** - Beautiful themes with smooth transitions and system preference detection
- **Fully Customizable** - Components live in your codebase, modify them freely
- **Modern Stack** - React 19, TypeScript 5.9, Vite 7, Tailwind CSS 3.4
- **Live Documentation** - Interactive showcase with real examples for every component
- **Performance Optimized** - Fast builds, code splitting, and minimal bundle size
- **Developer Experience** - Path aliases, hot reload, and intuitive component API

## 🛠️ Tech Stack

### Core
- **React** 19.1.1 - Latest React with concurrent features
- **TypeScript** 5.9.2 - Type-safe development
- **Vite** 7.1.7 - Lightning-fast build tool
- **React Router** 7.9.1 - Client-side routing

### Styling
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **tailwindcss-animate** 1.0.7 - Animation utilities
- **Radix UI** - Unstyled, accessible component primitives
- **class-variance-authority** 0.7.1 - Component variants
- **clsx** + **tailwind-merge** - Conditional className utilities

### Additional Libraries
- **Framer Motion** 12.23.18 - Animation library
- **React Hook Form** 7.63.0 - Form validation
- **Zustand** 5.0.8 - State management
- **Lucide React** 0.544.0 - Icon library
- **Recharts** 3.2.1 - Chart components

## 📦 Component Categories

The library includes 40+ components organized into 9 categories:

| Category | Components | Status | Description |
|----------|------------|--------|-------------|
| **Inputs** | 8 | ✅ Stable | Text inputs, search fields, textareas, checkboxes, radio groups |
| **Buttons** | 6 | ✅ Stable | Interactive buttons with variants, sizes, and loading states |
| **Cards** | 5 | ✅ Stable | Flexible content containers with various layouts |
| **Tables** | 4 | 🔄 Updated | Data tables with sorting, filtering, and pagination |
| **Navigation** | 6 | ✅ Stable | Breadcrumbs, pagination, steps, tabs |
| **Alerts** | 4 | ✅ Stable | Alert messages and notification components |
| **Tabs & Layout** | 3 | ✅ Stable | Tab navigation, accordions, separators |
| **Authentication** | 3 | 🆕 New | Login forms, registration, auth components |
| **Modals & Dialogs** | 5 | ✅ Stable | Dialogs, tooltips, context menus, popovers |

### Available Components

```
accordion       alert          auth-forms      avatar
badge           breadcrumb     button          card
checkbox        context-menu   dialog          input
label           pagination     progress        radio-group
section-header  select         separator       steps
switch          table          tabs            textarea
toggle          tooltip
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone <your-repository-url>

# Navigate to the app directory
cd Vital-React-Template_V-1.0/app

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173` (default Vite port).

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

The production build will be output to the `dist/` directory.

## 📁 Project Structure

```
app/
├── src/
│   ├── components/
│   │   ├── ui/              # 26 core UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── layout/          # Layout components
│   │   │   ├── AppSidebar.tsx
│   │   │   └── TopNavbar.tsx
│   │   ├── showcase/        # Component navigation
│   │   │   └── ComponentNavigation.tsx
│   │   ├── shared/          # Shared utilities
│   │   │   └── theme-provider.tsx
│   │   ├── application/     # App-specific components
│   │   └── marketing/       # Marketing components
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   └── showcase/        # Component showcase pages
│   │       ├── index.tsx
│   │       └── components/
│   │           ├── InputsPage.tsx
│   │           ├── ButtonsPage.tsx
│   │           ├── CardsPage.tsx
│   │           └── ...
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn, etc.)
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and CSS variables
├── components.json          # shadcn/ui configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 💻 Usage Examples

### Basic Component Usage

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function LoginForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  );
}
```

### Using Theme Provider

```tsx
import { ThemeProvider, useTheme } from '@/components/shared/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <YourApp />
    </ThemeProvider>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </Button>
  );
}
```

### Button Variants

```tsx
import { Button } from '@/components/ui/button';

<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

### Form with Validation (React Hook Form)

```tsx
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register('name', { required: true })} />
        {errors.name && <span className="text-sm text-destructive">Required</span>}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

## 🎨 Customization

### Theming with CSS Variables

All colors are defined using CSS variables in `src/index.css`, making it easy to customize:

```css
:root {
  --background: 246 248 250;
  --foreground: 224 33% 9%;
  --primary: 291 64% 42%;      /* Purple theme */
  --primary-foreground: 0 0% 100%;
  --secondary: 210 40% 96%;
  --muted: 210 40% 96%;
  --accent: 210 40% 96%;
  --destructive: 4 71% 62%;
  --border: 214 32% 91%;
  --ring: 291 64% 42%;
  /* ... */
}

.dark {
  --background: 224 33% 9%;
  --foreground: 210 40% 98%;
  /* ... dark theme colors */
}
```

To change the primary color, simply update the HSL values:

```css
:root {
  --primary: 220 70% 50%;  /* Change to blue */
}
```

### Tailwind Configuration

Extend the theme in `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... your brand colors
        }
      }
    }
  }
}
```

### Modifying Components

Components are in your codebase (`src/components/ui/`), so you can:

1. **Edit directly** - Modify any component file to fit your needs
2. **Add variants** - Use `class-variance-authority` to add new variants
3. **Extend functionality** - Add props, hooks, or custom logic

Example - Adding a new button variant:

```tsx
// src/components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // Add your custom variant
        gradient: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
      }
    }
  }
)
```

### Utility Functions

The `cn()` utility (from `@/lib/utils`) combines `clsx` and `tailwind-merge`:

```tsx
import { cn } from '@/lib/utils';

// Conditionally apply classes and merge Tailwind classes
<div className={cn(
  "text-base",
  isActive && "font-bold",
  "text-lg"  // This overrides text-base
)} />
```

## 📚 Component Documentation

### Interactive Showcase

Run the development server and navigate to `/showcase` to see:

- Live examples of all components
- Different variants and states
- Copy-paste ready code examples
- Component categories and navigation

```bash
npm run dev
# Open http://localhost:5173/showcase
```

### Component Pages

Each category has a dedicated showcase page:

- `/showcase/inputs` - Form inputs, search, textarea
- `/showcase/buttons` - All button variants and states
- `/showcase/cards` - Card layouts and examples
- `/showcase/tables` - Data tables with features
- `/showcase/navigation` - Breadcrumbs, pagination, steps
- `/showcase/alerts` - Alert messages and notifications
- `/showcase/tabs` - Tabs and accordion components
- `/showcase/auth` - Authentication forms
- `/showcase/modals` - Dialogs, tooltips, context menus

## ⚙️ Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Vite HMR) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

### Path Aliases

The project uses path aliases configured in `vite.config.ts`:

```tsx
import { Button } from '@/components/ui/button';  // ✅ Clean imports
import { cn } from '@/lib/utils';
import Dashboard from '@/pages/Dashboard';

// Instead of:
import { Button } from '../../../components/ui/button';  // ❌ Relative paths
```

Available aliases:
- `@/` → `src/`
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/pages` → `src/pages`

### Component Architecture

Components follow the **shadcn/ui** philosophy:

1. **Copy, not install** - Components are copied into your project
2. **Own your code** - Full control and customization
3. **No npm package** - No dependency on external component library
4. **Radix UI primitives** - Built on accessible, unstyled components
5. **Tailwind styled** - Utility classes for styling

## 🎯 Key Features in Detail

### Accessibility

- **Radix UI Foundation** - All interactive components use Radix UI primitives
- **Keyboard Navigation** - Full keyboard support for all components
- **Screen Reader Support** - Proper ARIA labels and roles
- **Focus Management** - Visible focus indicators and logical tab order
- **WCAG 2.1 AA Compliant** - Meets accessibility standards

### Type Safety

- **100% TypeScript** - All components are written in TypeScript
- **Type-Safe Props** - Full IntelliSense for component props
- **Generic Support** - Components support generic types where appropriate
- **Strict Mode** - TypeScript strict mode enabled

### Performance

- **Vite Build System** - Lightning-fast HMR and optimized builds
- **Code Splitting** - Route-based code splitting with React Router
- **Tree Shaking** - Unused code is automatically removed
- **Minimal Bundle Size** - Optimized component exports
- **CSS Variables** - Dynamic theming without JS overhead

## 🤝 Contributing

Contributions are welcome! This template is designed to be a starting point for your projects. Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-component`)
3. Commit your changes (`git commit -m 'Add amazing component'`)
4. Push to the branch (`git push origin feature/amazing-component`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and patterns
- Ensure TypeScript types are properly defined
- Test components in both light and dark themes
- Verify accessibility with keyboard navigation
- Update documentation for new components

## 📄 License

This project is licensed under the ISC License. See the LICENSE file for details.

## 🙏 Acknowledgments

This project builds upon the excellent work of the open-source community:

- **[shadcn/ui](https://ui.shadcn.com/)** - For the innovative component architecture and design system
- **[Radix UI](https://www.radix-ui.com/)** - For accessible, unstyled component primitives
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - For the blazing-fast build tool
- **[Lucide](https://lucide.dev/)** - For the beautiful icon library
- **React Team** - For React and the amazing ecosystem

## 🔗 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)

---

**Built with ❤️ for the developer community**

*Helping developers build beautiful, accessible, and performant user interfaces with ease.*

