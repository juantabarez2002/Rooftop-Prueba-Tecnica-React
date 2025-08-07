import React from "react";

interface Props {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export default function Spinner({ size = "md", text = "Cargando..." }: Props) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-8">
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

        <div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-gray-800 animate-spin"
          style={{ animationDuration: "1s" }}
        ></div>

        <div
          className="absolute inset-2 rounded-full border-2 border-gray-100 border-t-gray-600 animate-spin"
          style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
        ></div>
      </div>

      <div
        className={`${textSizeClasses[size]} text-gray-700 font-medium tracking-wide`}
      >
        {text}
      </div>

      <div className="flex space-x-2">
        <div
          className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"
          style={{ animationDelay: "0ms", animationDuration: "1.4s" }}
        ></div>
        <div
          className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"
          style={{ animationDelay: "200ms", animationDuration: "1.4s" }}
        ></div>
        <div
          className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"
          style={{ animationDelay: "400ms", animationDuration: "1.4s" }}
        ></div>
      </div>
    </div>
  );
}
