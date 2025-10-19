import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Type, 
  MousePointer, 
  CreditCard, 
  Table, 
  Navigation,
  Bell,
  Layout,
  Shield,
  MessageSquare,
  Menu,
  ArrowRight
} from 'lucide-react';

interface ComponentCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  count: number;
  status?: 'new' | 'updated' | 'stable';
  href: string;
}

const componentCategories: ComponentCategory[] = [
  {
    id: 'inputs',
    title: 'Inputs',
    description: 'Form inputs, search fields, and text areas with various states and validations',
    icon: <Type className="h-5 w-5" />,
    count: 8,
    status: 'stable',
    href: '/showcase/inputs'
  },
  {
    id: 'buttons',
    title: 'Buttons',
    description: 'Interactive buttons with different variants, sizes, and states',
    icon: <MousePointer className="h-5 w-5" />,
    count: 6,
    status: 'stable',
    href: '/showcase/buttons'
  },
  {
    id: 'cards',
    title: 'Cards',
    description: 'Flexible containers for displaying content with various layouts',
    icon: <CreditCard className="h-5 w-5" />,
    count: 5,
    status: 'stable',
    href: '/showcase/cards'
  },
  {
    id: 'tables',
    title: 'Tables',
    description: 'Data tables with sorting, filtering, pagination, and search',
    icon: <Table className="h-5 w-5" />,
    count: 4,
    status: 'updated',
    href: '/showcase/tables'
  },
  {
    id: 'navigation',
    title: 'Navigation',
    description: 'Breadcrumbs, pagination, steps, and navigation components',
    icon: <Navigation className="h-5 w-5" />,
    count: 6,
    status: 'stable',
    href: '/showcase/navigation'
  },
  {
    id: 'alerts',
    title: 'Alerts & Notifications',
    description: 'Alert messages, toasts, and notification components',
    icon: <Bell className="h-5 w-5" />,
    count: 4,
    status: 'stable',
    href: '/showcase/alerts'
  },
  {
    id: 'tabs',
    title: 'Tabs & Layout',
    description: 'Tab navigation, accordions, and layout organization components',
    icon: <Layout className="h-5 w-5" />,
    count: 3,
    status: 'stable',
    href: '/showcase/tabs'
  },
  {
    id: 'auth',
    title: 'Authentication',
    description: 'Login forms, registration, and authentication components',
    icon: <Shield className="h-5 w-5" />,
    count: 3,
    status: 'new',
    href: '/showcase/auth'
  },
  {
    id: 'modals',
    title: 'Modals & Dialogs',
    description: 'Dialogs, tooltips, context menus, and overlay components',
    icon: <MessageSquare className="h-5 w-5" />,
    count: 5,
    status: 'stable',
    href: '/showcase/modals'
  }
];

interface ComponentNavigationProps {
  currentCategory?: string;
}

export function ComponentNavigation({ currentCategory }: ComponentNavigationProps) {
  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'new':
        return <Badge variant="default" className="ml-auto">New</Badge>;
      case 'updated':
        return <Badge variant="secondary" className="ml-auto">Updated</Badge>;
      case 'stable':
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {componentCategories.map((category) => (
        <Link key={category.id} to={category.href}>
          <Card 
            className={`p-6 hover:shadow-md transition-shadow cursor-pointer ${
              currentCategory === category.id ? 'ring-2 ring-primary' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-md text-primary">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} components</p>
                </div>
              </div>
              {getStatusBadge(category.status)}
            </div>
            
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {category.description}
            </p>
            
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                View Components
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export function ComponentSidebar({ currentCategory }: ComponentNavigationProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-4">
        Components
      </h3>
      {componentCategories.map((category) => (
        <Button
          key={category.id}
          variant={currentCategory === category.id ? "default" : "ghost"}
          className="w-full justify-start gap-3"
          size="sm"
        >
          {category.icon}
          <span>{category.title}</span>
          <span className="ml-auto text-xs text-muted-foreground">
            {category.count}
          </span>
          {getStatusBadge(category.status)}
        </Button>
      ))}
    </div>
  );
}

function getStatusBadge(status?: string) {
  switch (status) {
    case 'new':
      return <Badge variant="default" className="ml-2 text-xs">New</Badge>;
    case 'updated':
      return <Badge variant="secondary" className="ml-2 text-xs">Updated</Badge>;
    default:
      return null;
  }
}
