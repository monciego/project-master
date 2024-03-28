import { Link } from "@inertiajs/react";

const Pagination = ({ links }: any) => {
  return (
    <nav className="text-center mt-4">
      {links.map((link: any) => (
        <Link
          preserveScroll
          key={link.label}
          href={link.url || ""}
          className={
            "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs " +
            (link.active ? "bg-gray-950 " : "") +
            (!link.url
              ? "!text-gray-500 cursor-not-allowed "
              : "hover:bg-gray-950")
          }
          dangerouslySetInnerHTML={{ __html: link.label }}
        ></Link>
      ))}
    </nav>
  );
};

export default Pagination;
