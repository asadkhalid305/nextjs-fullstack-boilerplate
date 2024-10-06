import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className="px-4 lg:max-w-7xl lg:mx-auto">{children}</div>;
}
