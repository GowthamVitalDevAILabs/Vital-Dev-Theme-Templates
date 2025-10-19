import React from 'react';
import { Card } from '@/components/ui/card';
import { PageHeader } from '@/components/ui/section-header';
import { LoginForm, RegisterForm, ForgotPasswordForm } from '@/components/ui/auth-forms';

export default function AuthPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <PageHeader
        title="Authentication Components"
        description="Ready-to-use authentication forms with social login options and form validation"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Components', href: '/showcase' },
          { label: 'Authentication', current: true },
        ]}
      />

      {/* Authentication Forms */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Authentication Forms</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <LoginForm 
            onSubmit={(data) => console.log('Login:', data)}
            onForgotPassword={() => console.log('Forgot password')}
            onSignUp={() => console.log('Sign up')}
          />
          <RegisterForm 
            onSubmit={(data) => console.log('Register:', data)}
            onSignIn={() => console.log('Sign in')}
          />
          <ForgotPasswordForm 
            onSubmit={(email) => console.log('Reset password:', email)}
            onBackToLogin={() => console.log('Back to login')}
          />
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Form Validation</h3>
            <p className="text-sm text-muted-foreground">
              Built-in validation with error messages and real-time feedback.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Social Login</h3>
            <p className="text-sm text-muted-foreground">
              Support for Google, GitHub, and other OAuth providers.
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Responsive Design</h3>
            <p className="text-sm text-muted-foreground">
              Mobile-friendly forms that work on all screen sizes.
            </p>
          </Card>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Login Form</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { LoginForm } from '@/components/ui/auth-forms';

<LoginForm 
  onSubmit={(data) => console.log('Login:', data)}
  onForgotPassword={() => console.log('Forgot password')}
  onSignUp={() => console.log('Sign up')}
/>`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Register Form</h3>
            <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
              <code>{`import { RegisterForm } from '@/components/ui/auth-forms';

<RegisterForm 
  onSubmit={(data) => console.log('Register:', data)}
  onSignIn={() => console.log('Sign in')}
/>`}</code>
            </pre>
          </Card>
        </div>
      </section>
    </div>
  );
}




