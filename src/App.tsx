import { Link, Outlet, Route, BrowserRouter, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from '@/components/shared/theme-provider';
import './index.css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { TopNavbar } from '@/components/layout/TopNavbar';
import { AppSidebar } from '@/components/layout/AppSidebar';
import Dashboard from '@/pages/Dashboard';
import ShowcasePageComponent from '@/pages/showcase';
import InputsPage from '@/pages/showcase/components/InputsPage';
import ButtonsPage from '@/pages/showcase/components/ButtonsPage';
import CardsPage from '@/pages/showcase/components/CardsPage';
import TablesPage from '@/pages/showcase/components/TablesPage';
import AlertsPage from '@/pages/showcase/components/AlertsPage';
import NavigationPage from '@/pages/showcase/components/NavigationPage';
import AuthPage from '@/pages/showcase/components/AuthPage';
import ModalsPage from '@/pages/showcase/components/ModalsPage';
import TabsPage from '@/pages/showcase/components/TabsPage';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      className="rounded-md border px-3 py-1 text-sm"
      onClick={() => setTheme(next as any)}
    >
      Toggle {next}
    </button>
  );
}

function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNavbar />
      <div className="mx-auto flex max-w-screen-2xl">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="mb-4 flex justify-end"><ThemeToggle /></div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold">Vital React Template</h1>
      <p className="text-muted-foreground">ShadCN + Float UI starter</p>
    </div>
  );
}


export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="showcase" element={<ShowcasePageComponent />} />
            <Route path="showcase/inputs" element={<InputsPage />} />
            <Route path="showcase/buttons" element={<ButtonsPage />} />
            <Route path="showcase/cards" element={<CardsPage />} />
            <Route path="showcase/tables" element={<TablesPage />} />
            <Route path="showcase/alerts" element={<AlertsPage />} />
            <Route path="showcase/navigation" element={<NavigationPage />} />
            <Route path="showcase/auth" element={<AuthPage />} />
            <Route path="showcase/modals" element={<ModalsPage />} />
            <Route path="showcase/tabs" element={<TabsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}


