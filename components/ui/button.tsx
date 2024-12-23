// @/components/ui/button.js
import * as React from "react";
import clsx from "clsx";

export function button({
  children,
  variant = "default",
  size = "medium",
  className,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition";
  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
  };
  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
    icon: "p-2",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
