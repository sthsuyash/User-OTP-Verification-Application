import { ReactNode } from "react";
import clsx from "clsx";

interface IContainer {
    children: ReactNode;
    className?: string
}

export function Container({ children, className }: IContainer) {
    return (
        <div className={clsx("flex justify-center items-center h-screen mx-auto", className)}>
            {children}
        </div>
    );
}
