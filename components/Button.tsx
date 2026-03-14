import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  islast?: boolean;
};

export default function Button({
  children,
  className = "",
  disabled,
  loading,
  islast,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={`flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full px-8 py-3.5 text-sm font-bold transition-all 3xl:text-[20px]! ${
        islast ? "bg-[#B6CDC1] text-black" : "bg-brand-gradient text-white"
      } ${className}`}
      {...props}
    >
      {loading && (
        <svg
          className="h-5 w-5 animate-spin text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}