import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function TopNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-navbar text-navbar-foreground">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/" className="font-semibold">Vital</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/showcase">Showcase</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">Log in</Button>
          <Button size="sm">Sign up</Button>
        </div>
      </div>
    </header>
  );
}


