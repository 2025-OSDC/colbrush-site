import type React from "react";

export default function Description({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-sm font-normal text-gray-100 sm:text-base lg:text-[18px] ${className}`}
    >
      {children}
    </p>
  );
}
