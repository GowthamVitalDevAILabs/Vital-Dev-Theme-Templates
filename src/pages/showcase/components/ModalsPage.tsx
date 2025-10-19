import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/ui/section-header';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, ContextMenuSeparator } from '@/components/ui/context-menu';
import { 
  User, 
  Settings, 
  Copy, 
  Edit, 
  Trash,
  Info,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export default function ModalsPage() {
  return (
    <TooltipProvider>
      <div className="container mx-auto p-6 space-y-8">
        <PageHeader
          title="Modals & Dialogs"
          description="Dialog components, tooltips, context menus, and overlay components for user interactions"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Components', href: '/showcase' },
            { label: 'Modals', current: true },
          ]}
        />

        {/* Dialogs */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Dialogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Confirmation Dialog</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive">Delete Account</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      Confirm Deletion
                    </DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete your
                      account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex gap-2 mt-4">
                    <Button variant="destructive">Delete</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Information Dialog</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">View Details</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-blue-500" />
                      Product Information
                    </DialogTitle>
                    <DialogDescription>
                      Here are the detailed specifications and features of this product.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Specifications</h4>
                      <ul className="text-sm text-muted-foreground mt-2">
                        <li>• Weight: 1.4kg</li>
                        <li>• Dimensions: 30.41 x 21.24 x 1.56 cm</li>
                        <li>• Display: 13.3-inch Retina</li>
                        <li>• Processor: Apple M2</li>
                      </ul>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Success Dialog</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Complete Order</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Order Completed
                    </DialogTitle>
                    <DialogDescription>
                      Your order has been successfully placed and will be processed shortly.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3">
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm"><strong>Order ID:</strong> #ORD-2024-001</p>
                      <p className="text-sm"><strong>Total:</strong> $299.99</p>
                      <p className="text-sm"><strong>Estimated delivery:</strong> 3-5 business days</p>
                    </div>
                    <Button className="w-full">Track Order</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          </div>
        </section>

        {/* Tooltips */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Tooltips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Basic Tooltips</h3>
              <div className="flex gap-4 flex-wrap">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button>Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a helpful tooltip!</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Info</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to view more information</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Icon Tooltips</h3>
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <User className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>User Profile</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Settings & Preferences</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Help & Documentation</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Rich Tooltips</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Product Info</Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <div className="space-y-2">
                    <p className="font-medium">MacBook Pro 13"</p>
                    <p className="text-sm">Apple M2 chip with 8-core CPU and 10-core GPU</p>
                    <p className="text-sm font-medium">$1,299.00</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </Card>
          </div>
        </section>

        {/* Context Menus */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Context Menus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Basic Context Menu</h3>
              <ContextMenu>
                <ContextMenuTrigger asChild>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center cursor-pointer hover:border-muted-foreground/50 transition-colors">
                    <p className="text-muted-foreground">Right click me</p>
                  </div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem className="text-red-600">
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">File Context Menu</h3>
              <ContextMenu>
                <ContextMenuTrigger asChild>
                  <div className="border rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-600">PDF</span>
                      </div>
                      <div>
                        <p className="font-medium">Project Report.pdf</p>
                        <p className="text-sm text-muted-foreground">2.4 MB • Modified 2 hours ago</p>
                      </div>
                    </div>
                  </div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem>Open</ContextMenuItem>
                  <ContextMenuItem>Open with...</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Rename
                  </ContextMenuItem>
                  <ContextMenuItem>Move to...</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Properties</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem className="text-red-600">
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </Card>
          </div>
        </section>

        {/* Code Examples */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Dialog</h3>
              <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                <code>{`import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description goes here.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}</code>
              </pre>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Tooltip</h3>
              <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                <code>{`import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Helpful tooltip text</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}</code>
              </pre>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Context Menu</h3>
              <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                <code>{`import { 
  ContextMenu, 
  ContextMenuContent, 
  ContextMenuItem, 
  ContextMenuTrigger 
} from '@/components/ui/context-menu';

<ContextMenu>
  <ContextMenuTrigger>
    Right click me
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}</code>
              </pre>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Rich Tooltip</h3>
              <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
                <code>{`<Tooltip>
  <TooltipTrigger asChild>
    <Button>Product Info</Button>
  </TooltipTrigger>
  <TooltipContent className="max-w-xs">
    <div className="space-y-2">
      <p className="font-medium">Product Name</p>
      <p className="text-sm">Description here</p>
      <p className="text-sm font-medium">$99.00</p>
    </div>
  </TooltipContent>
</Tooltip>`}</code>
              </pre>
            </Card>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}




