import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Search, Eye, EyeOff } from 'lucide-react';

const inputVariants = cva(
  'flex w-full rounded-md border bg-background text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-input',
        error: 'border-destructive focus-visible:ring-destructive',
        success: 'border-green-500 focus-visible:ring-green-500',
        warning: 'border-yellow-500 focus-visible:ring-yellow-500',
      },
      size: {
        default: 'h-9 px-3 py-1',
        sm: 'h-8 px-2 py-1 text-xs',
        lg: 'h-11 px-4 py-2',
        xl: 'h-12 px-4 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  error?: string;
  success?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, icon, iconPosition = 'left', error, success, helperText, ...props }, ref) => {
    const hasIcon = !!icon;
    const hasMessage = !!(error || success || helperText);
    
    return (
      <div className="w-full">
        <div className="relative">
          {hasIcon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({ variant: error ? 'error' : success ? 'success' : variant, size }),
              hasIcon && iconPosition === 'left' && 'pl-10',
              hasIcon && iconPosition === 'right' && 'pr-10',
              className
            )}
            ref={ref}
            {...props}
          />
          {hasIcon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}
        </div>
        {hasMessage && (
          <div className="mt-1 text-xs">
            {error && <span className="text-destructive">{error}</span>}
            {success && <span className="text-green-600">{success}</span>}
            {helperText && !error && !success && (
              <span className="text-muted-foreground">{helperText}</span>
            )}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

// Search Input Component
export interface SearchInputProps extends Omit<InputProps, 'icon' | 'type'> {
  onSearch?: (value: string) => void;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, ...props }, ref) => {
    return (
      <Input
        type="search"
        icon={<Search className="h-4 w-4" />}
        iconPosition="left"
        ref={ref}
        {...props}
      />
    );
  }
);
SearchInput.displayName = 'SearchInput';

// Password Input Component
export interface PasswordInputProps extends Omit<InputProps, 'icon' | 'type'> {}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          icon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="hover:text-foreground focus:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          }
          iconPosition="right"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';
