import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit";
}

export const Button: React.FC<ButtonProps> = ({
    children,
    type = "button",
}) => {
    return (
        <button
            type={type}
            className="
        w-full bg-blue-900 text-white py-2 rounded-lg
        font-medium tracking-wide
        hover:bg-blue-800 transition
        focus:outline-none focus:ring-2 focus:ring-blue-300
      "
        >
            {children}
        </button>
    );
};


export default Button;