import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/ui/section-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { 
  Settings, 
  User, 
  Bell, 
  CreditCard,
  Shield,
  Palette
} from 'lucide-react';

export default function TabsPage() {
  const [progress, setProgress] = useState(65);

  return (
    <div className="container mx-auto p-6 space-y-8">
      <PageHeader
        title="Tabs & Layout"
        description="Tab navigation, accordions, and layout organization components"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/showcase' },
          { label: 'Tabs', current: true },
        ]}
      />

      {/* Basic Tabs */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Tabs</h2>
        <Card className="p-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Overview</h3>
                <p className="text-muted-foreground">
                  This is the overview tab content. It provides general information and key metrics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                        <p className="text-2xl font-bold">2,847</p>
                      </div>
                      <User className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                        <p className="text-2xl font-bold">$45,231</p>
                      </div>
                      <CreditCard className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Orders</p>
                        <p className="text-2xl font-bold">1,234</p>
                      </div>
                      <Bell className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Analytics</h3>
                <p className="text-muted-foreground">
                  Detailed analytics and performance metrics for your application.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label>Conversion Rate</Label>
                      <span className="text-sm font-medium">{progress}%</span>
                    </div>
                    <Progress value={progress} />
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => setProgress(Math.min(100, progress + 10))}
                    >
                      +10%
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setProgress(Math.max(0, progress - 10))}
                    >
                      -10%
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reports" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Reports</h3>
                <p className="text-muted-foreground">
                  Generate and view detailed reports for your business insights.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Monthly Report</h4>
                    <p className="text-sm text-muted-foreground mb-3">Last updated: Jan 2024</p>
                    <Button size="sm">Download PDF</Button>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-medium mb-2">Annual Summary</h4>
                    <p className="text-sm text-muted-foreground mb-3">Last updated: Dec 2023</p>
                    <Button size="sm" variant="outline">View Online</Button>
                  </Card>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notifications</h3>
                <p className="text-muted-foreground">
                  Manage your notification preferences and view recent alerts.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Bell className="h-5 w-5 text-blue-500" />
                    <div className="flex-1">
                      <p className="font-medium">New user registered</p>
                      <p className="text-sm text-muted-foreground">2 minutes ago</p>
                    </div>
                    <Badge>New</Badge>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <CreditCard className="h-5 w-5 text-green-500" />
                    <div className="flex-1">
                      <p className="font-medium">Payment received</p>
                      <p className="text-sm text-muted-foreground">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </section>

      {/* Vertical Tabs */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Settings Panel</h2>
        <Card className="p-6">
          <Tabs defaultValue="profile" orientation="vertical" className="flex gap-6">
            <TabsList className="flex-col h-fit">
              <TabsTrigger value="profile" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="account" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Account
              </TabsTrigger>
              <TabsTrigger value="appearance" className="w-full justify-start">
                <Palette className="mr-2 h-4 w-4" />
                Appearance
              </TabsTrigger>
              <TabsTrigger value="security" className="w-full justify-start">
                <Shield className="mr-2 h-4 w-4" />
                Security
              </TabsTrigger>
            </TabsList>
            <div className="flex-1">
              <TabsContent value="profile">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Profile Settings</h3>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">John Doe</h4>
                      <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                      <Button size="sm" variant="outline" className="mt-2">Change Avatar</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="account">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Account Settings</h3>
                  <div className="space-y-3">
                    <div>
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="appearance">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Appearance</h3>
                  <div className="space-y-3">
                    <div>
                      <Label>Theme</Label>
                      <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline">Light</Button>
                        <Button size="sm">Dark</Button>
                        <Button size="sm" variant="outline">System</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="security">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Security</h3>
                  <div className="space-y-3">
                    <div>
                      <Label>Password</Label>
                      <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                      <Button size="sm" variant="outline" className="mt-2">Change Password</Button>
                    </div>
                    <div>
                      <Label>Active Sessions</Label>
                      <p className="text-sm text-muted-foreground">Manage your active sessions</p>
                      <Button size="sm" variant="outline" className="mt-2">View Sessions</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </Card>
      </section>

      {/* Accordions */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Accordions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">FAQ Accordion</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day return policy for all items in their original condition. 
                  Items must be returned with original packaging and receipt.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>How do I track my order?</AccordionTrigger>
                <AccordionContent>
                  Once your order ships, you'll receive a tracking number via email. 
                  You can use this number on our website or the carrier's website to track your package.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
                <AccordionContent>
                  Yes, we ship to most countries worldwide. Shipping costs and delivery times 
                  vary by location. International orders may be subject to customs fees.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Product Features</h3>
            <Accordion type="multiple">
              <AccordionItem value="feature-1">
                <AccordionTrigger>Advanced Analytics</AccordionTrigger>
                <AccordionContent>
                  Get detailed insights into your business performance with our advanced analytics dashboard. 
                  Track key metrics, generate reports, and make data-driven decisions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="feature-2">
                <AccordionTrigger>Team Collaboration</AccordionTrigger>
                <AccordionContent>
                  Work together seamlessly with your team. Share projects, assign tasks, 
                  and communicate in real-time with built-in collaboration tools.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="feature-3">
                <AccordionTrigger>API Integration</AccordionTrigger>
                <AccordionContent>
                  Connect with your favorite tools and services through our comprehensive API. 
                  Build custom integrations and automate your workflow.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Basic Tabs</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Content for tab 1
  </TabsContent>
  <TabsContent value="tab2">
    Content for tab 2
  </TabsContent>
</Tabs>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Vertical Tabs</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`<Tabs defaultValue="tab1" orientation="vertical">
  <TabsList className="flex-col">
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    Vertical tab content
  </TabsContent>
</Tabs>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Accordion</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>
      Answer content here.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Multiple Accordion</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`// Allow multiple items to be open
<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>First Item</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Second Item</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
            </pre>
          </Card>
        </div>
      </section>
    </div>
  );
}




