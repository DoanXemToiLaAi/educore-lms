import * as React from "react";

import { cn } from "../../lib/utils";

// Custom Context to manage tooltip state
const TooltipContext = React.createContext(null);

// Provider component
const TooltipProvider = ({ children, delayDuration = 700, ...props }) => {
  return <>{children}</>;
};

// Root component with context
const Tooltip = ({
  children,
  open: controlledOpen,
  defaultOpen,
  onOpenChange,
  ...props
}) => {
  const [open, setOpen] = React.useState(defaultOpen || false);

  const handleOpenChange = React.useCallback(
    (newOpen) => {
      setOpen(newOpen);
      onOpenChange?.(newOpen);
    },
    [onOpenChange]
  );

  return (
    <TooltipContext.Provider
      value={{ open: controlledOpen ?? open, onOpenChange: handleOpenChange }}>
      <div className="relative inline-block" {...props}>
        {children}
      </div>
    </TooltipContext.Provider>
  );
};

const TooltipTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { onOpenChange } = React.useContext(TooltipContext);

    return (
      <div
        ref={ref}
        className={cn("inline-block", className)}
        onMouseEnter={() => onOpenChange?.(true)}
        onMouseLeave={() => onOpenChange?.(false)}
        onFocus={() => onOpenChange?.(true)}
        onBlur={() => onOpenChange?.(false)}
        {...props}>
        {children}
      </div>
    );
  }
);
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => {
    const { open } = React.useContext(TooltipContext);

    if (!open) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "absolute z-50 top-full mt-1 left-1/2 -translate-x-1/2 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
          className
        )}
        {...props}
      />
    );
  }
);
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
