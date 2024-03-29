import { Link, InertiaLinkProps } from "@inertiajs/react";

export default function ResponsiveNavLink({
  active = false,
  className = "",
  children,
  ...props
}: InertiaLinkProps & { active?: boolean }) {
  return (
    <Link
      {...props}
      className={`transition-colors hover:text-foreground ${
        active ? "text-foreground" : "text-muted-foreground"
      } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
    >
      {children}
    </Link>
  );
}
