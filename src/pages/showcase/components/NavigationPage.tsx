import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/ui/section-header';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Steps } from '@/components/ui/steps';
import { AdvancedPagination, SimplePagination } from '@/components/ui/pagination';
import { 
  Home,
  ChevronRight,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

export default function NavigationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample steps data
  const steps = [
    { id: '1', title: 'Account Setup', description: 'Create your account', status: 'completed' as const },
    { id: '2', title: 'Profile Information', description: 'Add your details', status: 'current' as const },
    { id: '3', title: 'Verification', description: 'Verify your email', status: 'pending' as const },
    { id: '4', title: 'Complete', description: 'Finish setup', status: 'pending' as const },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <PageHeader
        title="Navigation Components"
        description="Navigation components including breadcrumbs, steps, pagination, and accordions"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/showcase' },
          { label: 'Navigation', current: true },
        ]}
      />

      {/* Breadcrumbs */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Breadcrumbs</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Basic Breadcrumb</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Breadcrumb with Icons</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">
                    <Home className="h-4 w-4" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/products/laptops">Laptops</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>MacBook Pro</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Long Breadcrumb</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/users">User Management</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/users/roles">Roles</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Edit Role</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Custom Separator</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Getting Started</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Card>
        </div>
      </section>

      {/* Steps */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Step Indicators</h2>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Horizontal Steps</h3>
            <Steps
              steps={steps}
              currentStep={currentStep}
              orientation="horizontal"
            />
            <div className="flex gap-2 mt-6">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button 
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Vertical Steps</h3>
            <div className="max-w-md">
              <Steps
                steps={steps}
                currentStep={currentStep}
                orientation="vertical"
                variant="default"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Pagination */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Pagination</h2>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Advanced Pagination</h3>
            <AdvancedPagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
              showFirstLast
              showPrevNext
            />
          </Card>
          
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Simple Pagination</h3>
            <SimplePagination
              currentPage={currentPage}
              totalPages={5}
              totalItems={50}
              itemsPerPage={10}
              onPageChange={setCurrentPage}
            />
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Pagination Sizes</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Small</p>
                <AdvancedPagination
                  currentPage={1}
                  totalPages={5}
                  onPageChange={() => {}}
                  size="sm"
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Default</p>
                <AdvancedPagination
                  currentPage={1}
                  totalPages={5}
                  onPageChange={() => {}}
                />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Large</p>
                <AdvancedPagination
                  currentPage={1}
                  totalPages={5}
                  onPageChange={() => {}}
                  size="lg"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Accordions */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Accordions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Single Accordion</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern and is fully accessible with keyboard navigation and screen reader support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components' aesthetic and can be customized with CSS variables.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default with smooth transitions, but you can disable animations if you prefer reduced motion.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Multiple Accordion</h3>
            <Accordion type="multiple">
              <AccordionItem value="faq-1">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers for enterprise customers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>How long is the free trial?</AccordionTrigger>
                <AccordionContent>
                  Our free trial lasts for 14 days with full access to all features. No credit card required to start.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.
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
            <h3 className="font-semibold mb-4">Breadcrumb</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Steps</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { Steps } from '@/components/ui/steps';

const steps = [
  { id: '1', title: 'Step 1', description: 'Description', status: 'completed' },
  { id: '2', title: 'Step 2', description: 'Description', status: 'current' },
  { id: '3', title: 'Step 3', description: 'Description', status: 'pending' },
];

<Steps
  steps={steps}
  currentStep={1}
  orientation="horizontal"
/>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Pagination</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { AdvancedPagination } from '@/components/ui/pagination';

<AdvancedPagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
  showFirstLast
  showPrevNext
/>`}</code>
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
        </div>
      </section>
    </div>
  );
}




