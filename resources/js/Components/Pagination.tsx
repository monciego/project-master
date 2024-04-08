import { Link } from "@inertiajs/react";

const Pagination = ({ links }: any) => {
  return (
    <nav className="text-center mt-4">
      {links.map((link: any) => (
        <Link
          preserveScroll
          key={link.label}
          href={link.url || ""}
          className={`inline-block py-2 px-3 rounded-lg text-sm mx-1 ${
            link.active ? "dark:bg-slate-700 bg-slate-400 font-medium" : ""
          } ${
            !link.url
              ? "!text-gray-500 cursor-not-allowed"
              : "hover:bg-slate-400 dark:hover:bg-slate-700"
          }`}
          dangerouslySetInnerHTML={{ __html: link.label }}
        ></Link>
      ))}
    </nav>
  );
};

export default Pagination;
