import React from 'react';
import { Card } from '@/components/ui/card';
import { Input, SearchInput, PasswordInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PageHeader } from '@/components/ui/section-header';
import { Mail, User, Search } from 'lucide-react';

export default function InputsPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <PageHeader
        title="Input Components"
        description="Various input components with different states, variants, and functionality"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/showcase' },
          { label: 'Inputs', current: true },
        ]}
      />

      {/* Basic Inputs */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Default Sizes</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="input-sm">Small Input</Label>
                <Input id="input-sm" placeholder="Small input" size="sm" />
              </div>
              <div>
                <Label htmlFor="input-default">Default Input</Label>
                <Input id="input-default" placeholder="Default input" />
              </div>
              <div>
                <Label htmlFor="input-lg">Large Input</Label>
                <Input id="input-lg" placeholder="Large input" size="lg" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Input States</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="input-success">Success State</Label>
                <Input 
                  id="input-success"
                  placeholder="Success state" 
                  success="Looks good!" 
                />
              </div>
              <div>
                <Label htmlFor="input-error">Error State</Label>
                <Input 
                  id="input-error"
                  placeholder="Error state" 
                  error="This field is required" 
                />
              </div>
              <div>
                <Label htmlFor="input-helper">With Helper Text</Label>
                <Input 
                  id="input-helper"
                  placeholder="With helper text" 
                  helperText="Enter your email address" 
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Disabled & Read-only</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="input-disabled">Disabled Input</Label>
                <Input 
                  id="input-disabled"
                  placeholder="Disabled input" 
                  disabled 
                />
              </div>
              <div>
                <Label htmlFor="input-readonly">Read-only Input</Label>
                <Input 
                  id="input-readonly"
                  value="Read-only value"
                  readOnly 
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Special Input Types */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Special Input Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Search Input</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="search-basic">Basic Search</Label>
                <SearchInput 
                  id="search-basic"
                  placeholder="Search..." 
                />
              </div>
              <div>
                <Label htmlFor="search-large">Large Search</Label>
                <SearchInput 
                  id="search-large"
                  placeholder="Search products..." 
                  size="lg"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Password Input</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="password-basic">Basic Password</Label>
                <PasswordInput 
                  id="password-basic"
                  placeholder="Enter password" 
                />
              </div>
              <div>
                <Label htmlFor="password-confirm">Confirm Password</Label>
                <PasswordInput 
                  id="password-confirm"
                  placeholder="Confirm password" 
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Input with Icons</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="input-email">Email Input</Label>
                <Input 
                  id="input-email"
                  placeholder="Enter email" 
                  icon={<Mail className="h-4 w-4" />}
                />
              </div>
              <div>
                <Label htmlFor="input-user">User Input</Label>
                <Input 
                  id="input-user"
                  placeholder="Enter username" 
                  icon={<User className="h-4 w-4" />}
                />
              </div>
              <div>
                <Label htmlFor="input-search-icon">Search with Icon</Label>
                <Input 
                  id="input-search-icon"
                  placeholder="Search with icon" 
                  icon={<Search className="h-4 w-4" />}
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Basic Input</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { Input } from '@/components/ui/input';

<Input 
  placeholder="Enter text" 
  size="default"
/>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Input with States</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`<Input 
  placeholder="Success state" 
  success="Looks good!" 
/>

<Input 
  placeholder="Error state" 
  error="This field is required" 
/>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Special Inputs</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { SearchInput, PasswordInput } from '@/components/ui/input';

<SearchInput placeholder="Search..." />
<PasswordInput placeholder="Password" />`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Input with Icon</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { Mail } from 'lucide-react';

<Input 
  placeholder="Email" 
  icon={<Mail className="h-4 w-4" />}
/>`}</code>
            </pre>
          </Card>
        </div>
      </section>
    </div>
  );
}


