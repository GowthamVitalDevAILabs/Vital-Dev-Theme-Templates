import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/ui/section-header';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, DataTable } from '@/components/ui/table';
import { MoreHorizontal, ArrowUpDown, Edit, Trash, Eye } from 'lucide-react';

export default function TablesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data for tables
  const tableData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive', lastLogin: '2024-01-10' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Active', lastLogin: '2024-01-14' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', lastLogin: '2024-01-13' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Inactive', lastLogin: '2024-01-08' },
  ];

  const tableColumns = [
    { 
      key: 'name', 
      header: 'Name', 
      sortable: true,
      render: (item: any) => (
        <div className="font-medium">{item.name}</div>
      )
    },
    { 
      key: 'email', 
      header: 'Email', 
      sortable: true,
      render: (item: any) => (
        <div className="text-muted-foreground">{item.email}</div>
      )
    },
    { 
      key: 'role', 
      header: 'Role', 
      sortable: false,
      render: (item: any) => (
        <Badge variant={item.role === 'Admin' ? 'default' : 'secondary'}>
          {item.role}
        </Badge>
      )
    },
    { 
      key: 'status', 
      header: 'Status', 
      sortable: true,
      render: (item: any) => (
        <Badge variant={item.status === 'Active' ? 'default' : 'outline'}>
          {item.status}
        </Badge>
      )
    },
    { 
      key: 'lastLogin', 
      header: 'Last Login', 
      sortable: true,
      render: (item: any) => (
        <div className="text-sm text-muted-foreground">{item.lastLogin}</div>
      )
    },
    {
      key: 'actions',
      header: 'Actions',
      sortable: false,
      render: (item: any) => (
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <Eye className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <Edit className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="h-8 w-8 text-red-600 hover:text-red-700">
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      )
    },
  ];

  const productData = [
    { id: 1, name: 'iPhone 15 Pro', category: 'Electronics', price: '$999', stock: 45, rating: 4.8 },
    { id: 2, name: 'MacBook Air M2', category: 'Computers', price: '$1,199', stock: 23, rating: 4.9 },
    { id: 3, name: 'AirPods Pro', category: 'Audio', price: '$249', stock: 67, rating: 4.7 },
    { id: 4, name: 'iPad Pro', category: 'Tablets', price: '$799', stock: 34, rating: 4.8 },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <PageHeader
        title="Table Components"
        description="Data tables with sorting, filtering, pagination, and interactive features"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/showcase' },
          { label: 'Tables', current: true },
        ]}
      />

      {/* Basic Table */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Basic Table</h2>
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Simple Data Table</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.slice(0, 3).map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-muted-foreground">{item.email}</TableCell>
                  <TableCell>
                    <Badge variant={item.role === 'Admin' ? 'default' : 'secondary'}>
                      {item.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={item.status === 'Active' ? 'default' : 'outline'}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{item.lastLogin}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Interactive Data Table */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Interactive Data Table</h2>
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Data Table with Search and Actions</h3>
          <DataTable
            data={tableData}
            columns={tableColumns}
            searchable
            searchPlaceholder="Search users..."
            onRowClick={(item) => console.log('Clicked:', item)}
          />
        </Card>
      </section>

      {/* Product Table */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Product Table</h2>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Product Inventory</h3>
            <Button size="sm">Add Product</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">
                  <div className="flex items-center gap-2">
                    Product
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productData.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-muted-foreground">ID: {product.id}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{product.category}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{product.price}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${
                        product.stock > 50 ? 'bg-green-500' : 
                        product.stock > 20 ? 'bg-yellow-500' : 'bg-red-500'
                      }`} />
                      {product.stock}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span>{product.rating}</span>
                      <span className="text-yellow-500">★</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Table States */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Table States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Loading State</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3].map((i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="h-4 bg-muted animate-pulse rounded" />
                    </TableCell>
                    <TableCell>
                      <div className="h-4 bg-muted animate-pulse rounded" />
                    </TableCell>
                    <TableCell>
                      <div className="h-4 bg-muted animate-pulse rounded w-16" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Empty State</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-8">
                    <div className="text-muted-foreground">
                      <p className="mb-2">No data available</p>
                      <Button size="sm" variant="outline">Add Item</Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Basic Table</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Data Table</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { DataTable } from '@/components/ui/table';

const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email', sortable: true },
];

<DataTable
  data={data}
  columns={columns}
  searchable
  searchPlaceholder="Search..."
  onRowClick={(item) => console.log(item)}
/>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Table with Custom Cells</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`const columns = [
  {
    key: 'status',
    header: 'Status',
    render: (item) => (
      <Badge variant={item.status === 'Active' ? 'default' : 'outline'}>
        {item.status}
      </Badge>
    )
  }
];`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Empty State</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`<TableBody>
  <TableRow>
    <TableCell colSpan={3} className="text-center py-8">
      <div className="text-muted-foreground">
        <p className="mb-2">No data available</p>
        <Button size="sm" variant="outline">
          Add Item
        </Button>
      </div>
    </TableCell>
  </TableRow>
</TableBody>`}</code>
            </pre>
          </Card>
        </div>
      </section>
    </div>
  );
}


