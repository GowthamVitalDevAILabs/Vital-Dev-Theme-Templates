import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', uv: 400, pv: 240 },
  { name: 'Tue', uv: 300, pv: 139 },
  { name: 'Wed', uv: 200, pv: 980 },
  { name: 'Thu', uv: 278, pv: 390 },
  { name: 'Fri', uv: 189, pv: 480 },
  { name: 'Sat', uv: 239, pv: 380 },
  { name: 'Sun', uv: 349, pv: 430 },
];

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231</div>
          <p className="text-xs text-muted-foreground">+12.5% from last week</p>
          <div className="mt-2 flex gap-1">
            <Badge variant="secondary">Revenue</Badge>
            <Badge variant="outline">Analytics</Badge>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Active Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8,214</div>
          <p className="text-xs text-muted-foreground">+2.1% from yesterday</p>
          <div className="mt-2 flex gap-1">
            <Badge variant="default">Users</Badge>
            <Badge variant="secondary">Growth</Badge>
          </div>
        </CardContent>
      </Card>
      <Card className="md:col-span-2 xl:col-span-2">
        <CardHeader>
          <CardTitle>Traffic</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="uv" stroke="hsl(var(--primary))" strokeWidth={2} />
              <Line type="monotone" dataKey="pv" stroke="hsl(var(--info))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}


