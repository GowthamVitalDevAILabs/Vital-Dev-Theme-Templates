import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHeader, StatsHeader } from '@/components/ui/section-header';
import { ComponentNavigation } from '@/components/showcase/ComponentNavigation';
import { Code, Palette, Zap, Globe } from 'lucide-react';

export default function ShowcasePage() {
  return (
    <div className="container mx-auto p-6 space-y-12">
      {/* Page Header */}
      <PageHeader
        title="Float UI Components"
        description="A comprehensive collection of modern, responsive UI components built with React and Tailwind CSS"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Components', current: true },
        ]}
        actions={
          <div className="flex gap-2">
            <Button variant="outline">View on GitHub</Button>
            <Button>Get Started</Button>
          </div>
        }
      />

      {/* Stats Header */}
      <StatsHeader
        title="Component Library Overview"
        description="Powerful, accessible, and customizable components for modern web applications"
        stats={[
          { label: 'Total Components', value: '40+', change: '+8', trend: 'up' },
          { label: 'Categories', value: '9', change: '0', trend: 'neutral' },
          { label: 'TypeScript', value: '100%', change: '0%', trend: 'up' },
          { label: 'Accessibility', value: 'WCAG 2.1', change: 'AA', trend: 'up' },
        ]}
      />

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Why Choose Float UI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Developer Experience</h3>
            <p className="text-sm text-muted-foreground">
              Built with TypeScript, fully typed components with excellent IntelliSense support
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Customizable Design</h3>
            <p className="text-sm text-muted-foreground">
              Tailwind CSS powered with CSS variables for easy theming and customization
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Performance First</h3>
            <p className="text-sm text-muted-foreground">
              Optimized components with minimal bundle size and excellent runtime performance
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Accessibility Ready</h3>
            <p className="text-sm text-muted-foreground">
              WCAG 2.1 compliant components with keyboard navigation and screen reader support
            </p>
          </Card>
        </div>
      </section>

      {/* Component Categories */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Component Categories</h2>
            <p className="text-muted-foreground">
              Explore our comprehensive collection of UI components organized by category
            </p>
          </div>
        </div>
        <ComponentNavigation />
      </section>

      {/* Getting Started */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Installation</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Install the package:</p>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  <code>npm install @float-ui/react</code>
                </pre>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Import components:</p>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  <code>{`import { Button, Card } from '@float-ui/react';`}</code>
                </pre>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Quick Example</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Basic usage:</p>
                <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                  <code>{`function App() {
  return (
    <Card className="p-6">
      <h2>Welcome to Float UI</h2>
      <Button>Get Started</Button>
    </Card>
  );
}`}</code>
                </pre>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
