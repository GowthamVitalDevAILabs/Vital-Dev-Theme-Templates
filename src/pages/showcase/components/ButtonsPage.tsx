import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/ui/section-header';
import { Download, Mail, Plus, Settings, ArrowRight, Loader2 } from 'lucide-react';

export default function ButtonsPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <PageHeader
        title="Button Components"
        description="Button components with various styles, sizes, states, and interactive features"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/showcase' },
          { label: 'Buttons', current: true },
        ]}
      />

      {/* Button Variants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Button Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Primary Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Subtle Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Button Sizes */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Button Sizes</h2>
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Different Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </section>

      {/* Button States */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Button States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Interactive States</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Loading State</h3>
            <div className="flex flex-wrap gap-4">
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading
              </Button>
              <Button variant="outline" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Buttons with Icons */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Buttons with Icons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Icon + Text</h3>
            <div className="flex flex-wrap gap-4">
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
              <Button variant="secondary">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Text + Icon</h3>
            <div className="flex flex-wrap gap-4">
              <Button>
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Icon Only</h3>
            <div className="flex flex-wrap gap-4">
              <Button size="icon">
                <Plus className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Settings className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Button Groups */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Button Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Action Groups</h3>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button>Save</Button>
                <Button variant="outline">Cancel</Button>
              </div>
              <div className="flex gap-2">
                <Button variant="destructive">Delete</Button>
                <Button variant="outline">Keep</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Navigation Groups</h3>
            <div className="space-y-4">
              <div className="flex gap-1">
                <Button variant="outline" size="sm">Previous</Button>
                <Button size="sm">Next</Button>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm">Back</Button>
                <Button size="sm">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
            <h3 className="font-semibold mb-4">Basic Button</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { Button } from '@/components/ui/button';

<Button>Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Button with Icon</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { Download } from 'lucide-react';

<Button>
  <Download className="mr-2 h-4 w-4" />
  Download
</Button>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Loading Button</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { Loader2 } from 'lucide-react';

<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading
</Button>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Button Sizes</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <Plus className="h-4 w-4" />
</Button>`}</code>
            </pre>
          </Card>
        </div>
      </section>
    </div>
  );
}


