import React from 'react';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/ui/section-header';
import { 
  AlertCircle, 
  CheckCircle, 
  Info, 
  AlertTriangle,
  X,
  Bell
} from 'lucide-react';

export default function AlertsPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <PageHeader
        title="Alerts & Notifications"
        description="Alert components for displaying important messages and notifications to users"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/showcase' },
          { label: 'Alerts', current: true },
        ]}
      />

      {/* Basic Alerts */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Alert Variants</h2>
        <Card className="p-6">
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert message to provide context or additional details.
              </AlertDescription>
            </Alert>

            <Alert variant="success">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your action was completed successfully! The changes have been saved.
              </AlertDescription>
            </Alert>

            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Please review the information before proceeding. Some fields may need attention.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again or contact support if the problem persists.
              </AlertDescription>
            </Alert>
          </div>
        </Card>
      </section>

      {/* Alert Layouts */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Alert Layouts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Simple Alerts</h3>
            <div className="space-y-4">
              <Alert>
                <AlertDescription>
                  Simple alert without icon or title.
                </AlertDescription>
              </Alert>

              <Alert variant="success">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Success alert with icon only.
                </AlertDescription>
              </Alert>

              <Alert variant="warning">
                <AlertTitle>Warning Title</AlertTitle>
                <AlertDescription>
                  Warning alert with title only.
                </AlertDescription>
              </Alert>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Dismissible Alerts</h3>
            <div className="space-y-4">
              <Alert>
                <Bell className="h-4 w-4" />
                <AlertTitle>Notification</AlertTitle>
                <AlertDescription>
                  You have 3 new messages waiting for review.
                </AlertDescription>
                <button className="absolute top-2 right-2 p-1 hover:bg-muted rounded">
                  <X className="h-4 w-4" />
                </button>
              </Alert>

              <Alert variant="success">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Update Available</AlertTitle>
                <AlertDescription>
                  A new version of the application is available for download.
                </AlertDescription>
                <button className="absolute top-2 right-2 p-1 hover:bg-muted rounded">
                  <X className="h-4 w-4" />
                </button>
              </Alert>
            </div>
          </Card>
        </div>
      </section>

      {/* Alert States */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Alert Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Form Validation</h3>
            <div className="space-y-4">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Validation Error</AlertTitle>
                <AlertDescription>
                  Please correct the following errors:
                  <ul className="list-disc list-inside mt-2">
                    <li>Email address is required</li>
                    <li>Password must be at least 8 characters</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">System Status</h3>
            <div className="space-y-4">
              <Alert variant="warning">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Maintenance Mode</AlertTitle>
                <AlertDescription>
                  The system will be under maintenance from 2:00 AM to 4:00 AM UTC.
                </AlertDescription>
              </Alert>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Action Feedback</h3>
            <div className="space-y-4">
              <Alert variant="success">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Profile Updated</AlertTitle>
                <AlertDescription>
                  Your profile information has been successfully updated.
                </AlertDescription>
              </Alert>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Information Display</h3>
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Pro Tip</AlertTitle>
                <AlertDescription>
                  You can use keyboard shortcuts to navigate faster. Press Ctrl+K to open the command palette.
                </AlertDescription>
              </Alert>
            </div>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Basic Alert</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { Alert, AlertDescription } from '@/components/ui/alert';

<Alert>
  <AlertDescription>
    This is a basic alert message.
  </AlertDescription>
</Alert>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Alert with Icon and Title</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { CheckCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

<Alert variant="success">
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Operation completed successfully!
  </AlertDescription>
</Alert>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Alert Variants</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`// Available variants
<Alert variant="default">...</Alert>
<Alert variant="success">...</Alert>
<Alert variant="warning">...</Alert>
<Alert variant="destructive">...</Alert>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Dismissible Alert</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { X } from 'lucide-react';

<Alert>
  <AlertDescription>
    Dismissible alert message
  </AlertDescription>
  <button className="absolute top-2 right-2 p-1 hover:bg-muted rounded">
    <X className="h-4 w-4" />
  </button>
</Alert>`}</code>
            </pre>
          </Card>
        </div>
      </section>
    </div>
  );
}




