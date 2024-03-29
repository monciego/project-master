import { PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import Navbar from "@/Components/navbar";

export default function Authenticated({
  user,
  children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950">
      <Navbar user={user} />
      <main>{children}</main>
    </div>
  );
}
