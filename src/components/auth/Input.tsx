import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className, ...rest }, ref) => {
        return (
            <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>

                <input
                    ref={ref}
                    {...rest}
                    className={`
            w-full px-4 py-2 rounded-lg border
            focus:outline-none focus:ring-2
            ${error
                            ? "border-red-500 focus:ring-red-200"
                            : "border-gray-300 focus:ring-blue-200"
                        }
            ${className ?? ""}
          `}
                />

                {error && (
                    <p className="mt-1 text-xs text-red-600">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
