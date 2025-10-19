import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/ui/section-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Star, 
  Heart, 
  Share2,
  MoreHorizontal,
  Calendar,
  User,
  MapPin
} from 'lucide-react';

export default function CardsPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <PageHeader
        title="Card Components"
        description="Flexible card components for displaying content with different layouts and styles"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/showcase' },
          { label: 'Cards', current: true },
        ]}
      />

      {/* Basic Cards */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Simple Card</h3>
            <p className="text-muted-foreground mb-4">
              This is a basic card with some content and a simple layout.
            </p>
            <Button size="sm">Learn More</Button>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-2">Card with Badge</h3>
            <div className="flex gap-2 mb-3">
              <Badge>New</Badge>
              <Badge variant="secondary">Featured</Badge>
            </div>
            <p className="text-muted-foreground mb-4">
              Card showcasing different badge variants for status indication.
            </p>
            <div className="flex gap-2">
              <Button size="sm">Primary</Button>
              <Button variant="outline" size="sm">Secondary</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Status Card</h3>
              <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-yellow-600" />
                <span className="text-sm">In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <span className="text-sm">Needs Attention</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Profile Cards */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Profile Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Passionate about building great user experiences with modern web technologies.
            </p>
            <div className="flex gap-2">
              <Button size="sm">Follow</Button>
              <Button variant="outline" size="sm">Message</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-center mb-4">
              <Avatar className="mx-auto mb-3 h-16 w-16">
                <AvatarFallback className="text-lg">JS</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold">Jane Smith</h3>
              <p className="text-sm text-muted-foreground">Product Designer</p>
            </div>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>San Francisco</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>Joined 2023</span>
              </div>
            </div>
            <Button className="w-full" size="sm">View Profile</Button>
          </Card>

          <Card className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-sm">Alex Brown</h3>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <Badge variant="outline">Pro</Badge>
            </div>
            <p className="text-sm mb-4">
              Just shipped a new feature! Really excited about the user feedback we're getting.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                  <Heart className="h-4 w-4" />
                  <span>24</span>
                </button>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats Cards */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Stats Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-muted-foreground">Total Users</p>
              <User className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-baseline space-x-2">
              <p className="text-2xl font-bold">2,847</p>
              <p className="text-sm font-medium text-green-600">+12%</p>
            </div>
            <p className="text-xs text-muted-foreground mt-1">from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-muted-foreground">Revenue</p>
              <Star className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-baseline space-x-2">
              <p className="text-2xl font-bold">$45,231</p>
              <p className="text-sm font-medium text-green-600">+8%</p>
            </div>
            <p className="text-xs text-muted-foreground mt-1">from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-muted-foreground">Orders</p>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-baseline space-x-2">
              <p className="text-2xl font-bold">1,234</p>
              <p className="text-sm font-medium text-red-600">-3%</p>
            </div>
            <p className="text-xs text-muted-foreground mt-1">from last month</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-muted-foreground">Active Now</p>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-baseline space-x-2">
              <p className="text-2xl font-bold">573</p>
              <p className="text-sm font-medium text-gray-600">+0%</p>
            </div>
            <p className="text-xs text-muted-foreground mt-1">real-time data</p>
          </Card>
        </div>
      </section>

      {/* Progress Cards */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Progress Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Project Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Design Phase</span>
                  <span>100%</span>
                </div>
                <Progress value={100} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Development</span>
                  <span>65%</span>
                </div>
                <Progress value={65} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Testing</span>
                  <span>30%</span>
                </div>
                <Progress value={30} />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Deployment</span>
                  <span>0%</span>
                </div>
                <Progress value={0} />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Monthly Goals</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Sales Target</p>
                  <p className="text-sm text-muted-foreground">$50,000</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">$42,500</p>
                  <p className="text-sm text-green-600">85%</p>
                </div>
              </div>
              <Progress value={85} />
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Customers</p>
                  <p className="text-sm text-muted-foreground">200 users</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">156</p>
                  <p className="text-sm text-yellow-600">78%</p>
                </div>
              </div>
              <Progress value={78} />
            </div>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Basic Card</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { Card } from '@/components/ui/card';

<Card className="p-6">
  <h3 className="font-semibold mb-2">Card Title</h3>
  <p className="text-muted-foreground">
    Card content goes here.
  </p>
</Card>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Profile Card</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { Avatar, AvatarFallback } from '@/components/ui/avatar';

<Card className="p-6">
  <div className="flex items-center space-x-4">
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <div>
      <h3 className="font-semibold">John Doe</h3>
      <p className="text-sm text-muted-foreground">
        Software Engineer
      </p>
    </div>
  </div>
</Card>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Stats Card</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`<Card className="p-6">
  <div className="flex items-center justify-between mb-2">
    <p className="text-sm font-medium text-muted-foreground">
      Total Users
    </p>
    <User className="h-4 w-4" />
  </div>
  <div className="flex items-baseline space-x-2">
    <p className="text-2xl font-bold">2,847</p>
    <p className="text-sm font-medium text-green-600">
      +12%
    </p>
  </div>
</Card>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Progress Card</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { Progress } from '@/components/ui/progress';

<Card className="p-6">
  <h3 className="font-semibold mb-4">Progress</h3>
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span>Completion</span>
      <span>65%</span>
    </div>
    <Progress value={65} />
  </div>
</Card>`}</code>
            </pre>
          </Card>
        </div>
      </section>
    </div>
  );
}


