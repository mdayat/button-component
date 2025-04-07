import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import type { TooltipContentProps } from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";

import { cn } from "@libs/shadcn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-500 text-neutral-50 [&_svg]:fill-neutral-50 hover:bg-blue-600 active:bg-blue-600 active:shadow-xs disabled:bg-neutral-400 disabled:text-neutral-100 [&_svg]:disabled:fill-neutral-100",
        secondary:
          "bg-yellow-500 text-neutral-50 [&_svg]:fill-neutral-50 hover:bg-yellow-600 active:bg-yellow-600 active:shadow-xs disabled:bg-neutral-400 disabled:text-neutral-100 [&_svg]:disabled:fill-neutral-100",
        tertiary:
          "bg-neutral-500 text-neutral-100 [&_svg]:fill-neutral-100 hover:bg-neutral-600 active:bg-neutral-600 active:shadow-xs disabled:bg-neutral-400",
        error:
          "bg-red-500 text-neutral-50 [&_svg]:fill-neutral-50 hover:bg-red-600 active:bg-red-600 active:shadow-xs disabled:bg-neutral-400 disabled:text-neutral-100 [&_svg]:disabled:fill-neutral-100",
        success:
          "bg-green-500 text-neutral-50 [&_svg]:fill-neutral-50 hover:bg-green-600 active:bg-green-600 active:shadow-xs disabled:bg-neutral-400 disabled:text-neutral-100 [&_svg]:disabled:fill-neutral-100",
        warning:
          "bg-amber-500 text-neutral-50 [&_svg]:fill-neutral-50 hover:bg-amber-600 active:bg-amber-600 active:shadow-xs disabled:bg-neutral-400 disabled:text-neutral-100 [&_svg]:disabled:fill-neutral-100",
      },
      size: {
        small: "h-8 rounded-md px-4 text-xs",
        medium: "h-9 rounded-md px-4 text-sm",
        large: "h-10 rounded-md px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

interface ButtonCustomProps {
  asChild?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  withTooltip?: boolean;
  tooltipPosition?: TooltipContentProps["side"];
  tooltipContent?: string;
  tooltipDelayDuration?: number;
}

function Button({
  className,
  variant,
  size,
  leftIcon,
  rightIcon,
  children,
  disabled,
  asChild = false,
  withTooltip = false,
  tooltipPosition = "top",
  tooltipContent = "Hello World",
  tooltipDelayDuration = 300,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> &
  ButtonCustomProps) {
  const Comp = asChild ? Slot : "button";

  if (withTooltip && !disabled) {
    return (
      <Tooltip delayDuration={tooltipDelayDuration}>
        <TooltipTrigger>
          <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            disabled={disabled}
            {...props}
          >
            {leftIcon ? leftIcon : <></>}
            {children}
            {rightIcon ? rightIcon : <></>}
          </Comp>
        </TooltipTrigger>
        <TooltipContent side={tooltipPosition}>{tooltipContent}</TooltipContent>
      </Tooltip>
    );
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled}
      {...props}
    >
      {leftIcon ? leftIcon : <></>}
      {children}
      {rightIcon ? rightIcon : <></>}
    </Comp>
  );
}

export { Button, buttonVariants };
