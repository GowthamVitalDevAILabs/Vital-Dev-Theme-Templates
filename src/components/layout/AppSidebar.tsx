import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
  LayoutDashboard,
  Palette,
  Type, 
  MousePointer, 
  CreditCard, 
  Table, 
  Navigation,
  Bell,
  Layout,
  Shield,
  MessageSquare,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const mainItems = [
  { to: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-4 w-4" /> },
  { to: '/showcase', label: 'Components Overview', icon: <Palette className="h-4 w-4" /> },
];

const componentItems = [
  { to: '/showcase/inputs', label: 'Inputs', icon: <Type className="h-4 w-4" />, count: 8 },
  { to: '/showcase/buttons', label: 'Buttons', icon: <MousePointer className="h-4 w-4" />, count: 6 },
  { to: '/showcase/cards', label: 'Cards', icon: <CreditCard className="h-4 w-4" />, count: 5 },
  { to: '/showcase/tables', label: 'Tables', icon: <Table className="h-4 w-4" />, count: 4, badge: 'Updated' },
  { to: '/showcase/navigation', label: 'Navigation', icon: <Navigation className="h-4 w-4" />, count: 6 },
  { to: '/showcase/alerts', label: 'Alerts', icon: <Bell className="h-4 w-4" />, count: 4 },
  { to: '/showcase/tabs', label: 'Tabs & Layout', icon: <Layout className="h-4 w-4" />, count: 3 },
  { to: '/showcase/auth', label: 'Authentication', icon: <Shield className="h-4 w-4" />, count: 3, badge: 'New' },
  { to: '/showcase/modals', label: 'Modals & Dialogs', icon: <MessageSquare className="h-4 w-4" />, count: 5 },
];

export function AppSidebar() {
  const { pathname } = useLocation();
  const [componentsExpanded, setComponentsExpanded] = useState(pathname.startsWith('/showcase'));

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'New': return 'default';
      case 'Updated': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-sidebar text-sidebar-foreground md:block">
      <div className="p-4 text-sm font-semibold text-sidebar-primary">Float UI</div>
      <nav className="flex flex-col gap-1 p-2">
        {/* Main Navigation */}
        {mainItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent transition-colors',
              pathname === item.to && 'bg-sidebar-accent'
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}

        {/* Components Section */}
        <div className="mt-4">
          <button
            onClick={() => setComponentsExpanded(!componentsExpanded)}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent transition-colors w-full',
              pathname.startsWith('/showcase') && pathname !== '/showcase' && 'bg-sidebar-accent/50'
            )}
          >
            {componentsExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
            <Palette className="h-4 w-4" />
            Components
            <Badge variant="outline" className="ml-auto text-xs">
              {componentItems.length}
            </Badge>
          </button>

          {/* Component Pages */}
          {componentsExpanded && (
            <div className="ml-6 mt-1 space-y-1">
              {componentItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent transition-colors group',
                    pathname === item.to && 'bg-sidebar-accent'
                  )}
                >
                  {item.icon}
                  <span className="flex-1">{item.label}</span>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <Badge variant={getBadgeVariant(item.badge)} className="text-xs">
                        {item.badge}
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {item.count}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}


