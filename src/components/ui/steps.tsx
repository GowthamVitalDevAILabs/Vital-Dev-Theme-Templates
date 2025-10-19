import * as React from 'react';
import { cn } from '@/lib/utils';
import { Check, Circle } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'current' | 'completed';
}

interface StepsProps {
  steps: Step[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'simple' | 'bullets';
  className?: string;
}

export const Steps: React.FC<StepsProps> = ({
  steps,
  currentStep,
  orientation = 'horizontal',
  variant = 'default',
  className,
}) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div className={cn('w-full', className)}>
      <nav aria-label="Progress">
        <ol
          role="list"
          className={cn(
            'flex',
            isHorizontal ? 'space-x-8' : 'flex-col space-y-6',
            variant === 'simple' && isHorizontal && 'justify-between'
          )}
        >
          {steps.map((step, stepIndex) => {
            const isCompleted = stepIndex < currentStep;
            const isCurrent = stepIndex === currentStep;
            const isPending = stepIndex > currentStep;

            return (
              <li
                key={step.id}
                className={cn(
                  'relative',
                  !isHorizontal && 'flex items-start',
                  variant === 'simple' && isHorizontal && 'flex-1'
                )}
              >
                {/* Connector Line */}
                {stepIndex !== steps.length - 1 && (
                  <div
                    className={cn(
                      'absolute',
                      isHorizontal
                        ? 'left-8 top-4 h-0.5 w-full bg-gray-200'
                        : 'left-4 top-8 h-full w-0.5 bg-gray-200',
                      isCompleted && 'bg-primary'
                    )}
                    aria-hidden="true"
                  />
                )}

                <div className={cn('group flex items-center', !isHorizontal && 'w-full')}>
                  {/* Step Icon */}
                  <div className="flex items-center">
                    <span
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium',
                        isCompleted && 'border-primary bg-primary text-primary-foreground',
                        isCurrent && 'border-primary bg-background text-primary',
                        isPending && 'border-gray-300 bg-background text-gray-500'
                      )}
                    >
                      {variant === 'bullets' ? (
                        <Circle
                          className={cn(
                            'h-2.5 w-2.5',
                            isCompleted && 'fill-current',
                            isCurrent && 'fill-current',
                            isPending && 'fill-gray-300'
                          )}
                        />
                      ) : isCompleted ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        stepIndex + 1
                      )}
                    </span>
                  </div>

                  {/* Step Content */}
                  {variant !== 'simple' && (
                    <div className={cn('ml-4 min-w-0', isHorizontal && 'text-center')}>
                      <span
                        className={cn(
                          'text-sm font-medium',
                          isCompleted && 'text-primary',
                          isCurrent && 'text-primary',
                          isPending && 'text-gray-500'
                        )}
                      >
                        {step.title}
                      </span>
                      {step.description && (
                        <p className="text-sm text-gray-500 mt-1">{step.description}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Simple variant labels */}
                {variant === 'simple' && isHorizontal && (
                  <div className="mt-2 text-center">
                    <span
                      className={cn(
                        'text-sm font-medium',
                        isCompleted && 'text-primary',
                        isCurrent && 'text-primary',
                        isPending && 'text-gray-500'
                      )}
                    >
                      {step.title}
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

// Clickable Steps Component
interface ClickableStepsProps extends Omit<StepsProps, 'currentStep'> {
  activeStep: number;
  onStepClick: (stepIndex: number) => void;
  allowClickOnCompleted?: boolean;
}

export const ClickableSteps: React.FC<ClickableStepsProps> = ({
  steps,
  activeStep,
  onStepClick,
  allowClickOnCompleted = true,
  orientation = 'horizontal',
  variant = 'default',
  className,
}) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div className={cn('w-full', className)}>
      <nav aria-label="Progress">
        <ol
          role="list"
          className={cn(
            'flex',
            isHorizontal ? 'space-x-8' : 'flex-col space-y-6',
            variant === 'simple' && isHorizontal && 'justify-between'
          )}
        >
          {steps.map((step, stepIndex) => {
            const isCompleted = stepIndex < activeStep;
            const isCurrent = stepIndex === activeStep;
            const isPending = stepIndex > activeStep;
            const isClickable = isCompleted && allowClickOnCompleted;

            return (
              <li
                key={step.id}
                className={cn(
                  'relative',
                  !isHorizontal && 'flex items-start',
                  variant === 'simple' && isHorizontal && 'flex-1'
                )}
              >
                {/* Connector Line */}
                {stepIndex !== steps.length - 1 && (
                  <div
                    className={cn(
                      'absolute',
                      isHorizontal
                        ? 'left-8 top-4 h-0.5 w-full bg-gray-200'
                        : 'left-4 top-8 h-full w-0.5 bg-gray-200',
                      isCompleted && 'bg-primary'
                    )}
                    aria-hidden="true"
                  />
                )}

                <button
                  onClick={() => isClickable && onStepClick(stepIndex)}
                  disabled={!isClickable}
                  className={cn(
                    'group flex items-center',
                    !isHorizontal && 'w-full',
                    isClickable && 'cursor-pointer hover:opacity-80',
                    !isClickable && 'cursor-default'
                  )}
                >
                  {/* Step Icon */}
                  <div className="flex items-center">
                    <span
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors',
                        isCompleted && 'border-primary bg-primary text-primary-foreground',
                        isCurrent && 'border-primary bg-background text-primary',
                        isPending && 'border-gray-300 bg-background text-gray-500'
                      )}
                    >
                      {variant === 'bullets' ? (
                        <Circle
                          className={cn(
                            'h-2.5 w-2.5',
                            isCompleted && 'fill-current',
                            isCurrent && 'fill-current',
                            isPending && 'fill-gray-300'
                          )}
                        />
                      ) : isCompleted ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        stepIndex + 1
                      )}
                    </span>
                  </div>

                  {/* Step Content */}
                  {variant !== 'simple' && (
                    <div className={cn('ml-4 min-w-0 text-left', isHorizontal && 'text-center')}>
                      <span
                        className={cn(
                          'text-sm font-medium',
                          isCompleted && 'text-primary',
                          isCurrent && 'text-primary',
                          isPending && 'text-gray-500'
                        )}
                      >
                        {step.title}
                      </span>
                      {step.description && (
                        <p className="text-sm text-gray-500 mt-1">{step.description}</p>
                      )}
                    </div>
                  )}
                </button>

                {/* Simple variant labels */}
                {variant === 'simple' && isHorizontal && (
                  <div className="mt-2 text-center">
                    <span
                      className={cn(
                        'text-sm font-medium',
                        isCompleted && 'text-primary',
                        isCurrent && 'text-primary',
                        isPending && 'text-gray-500'
                      )}
                    >
                      {step.title}
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

