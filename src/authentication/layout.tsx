import { ReactNode } from "react";

// Prop type
type LayoutProps = {
    children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className="min-h-screen p-5 bg-slate-100">{children}</div>;
};
