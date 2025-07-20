import React from "react";
import { cn } from "@/lib/utils";
import Logo from "./logo";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean;
  ref?: React.Ref<HTMLElement>;
}

export const Header = ({
  className,
  fixed,
  children,
  ...props
}: HeaderProps) => {
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop);
    };

    // Add scroll listener to the body
    document.addEventListener("scroll", onScroll, { passive: true });

    // Clean up the event listener on unmount
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 backdrop-blur-md fixed w-full z-50",
        fixed && "header-fixed peer/header fixed z-50 w-[inherit]",
        offset > 10 && fixed ? "shadow-sm" : "shadow-none",
        className
      )}
      {...props}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        {children}
      </div>
    </header>
  );
};

Header.displayName = "Header";
