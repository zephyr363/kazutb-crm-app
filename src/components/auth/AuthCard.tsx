import React from "react";

interface AuthCardProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

export const AuthCard: React.FC<AuthCardProps> = ({
    title,
    subtitle,
    children,
}) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-2xl font-semibold text-blue-900 text-center">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-sm text-gray-500 text-center mt-2">
                        {subtitle}
                    </p>
                )}

                <div className="mt-6 space-y-4">
                    {children}
                </div>
            </div>
        </div>
    );
};


export default AuthCard