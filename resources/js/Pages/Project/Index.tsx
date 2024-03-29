import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps, ProjectResponse } from "@/types";
import Pagination from "@/Components/Pagination";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
  StatusClassMap,
  StatusTextMap,
} from "@/constants";

export default function Project({
  auth,
  projects,
}: PageProps & { projects: ProjectResponse }) {
  console.log(projects);
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Project" />

      <div className="py-12">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Create Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Created By
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.data.map((project) => (
                <tr
                  key={project.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{project.id}</td>
                  <td className="px-6 py-4">
                    <img className="h-10" src={project.image_path} alt="" />
                  </td>
                  <td className="px-6 py-4">{project.name}</td>
                  <td className="px-6 py-4">
                    <span
                      className={
                        "px-2 py-1 rounded text-white " +
                        PROJECT_STATUS_CLASS_MAP[
                          project.status as keyof StatusClassMap
                        ]
                      }
                    >
                      {
                        PROJECT_STATUS_TEXT_MAP[
                          project.status as keyof StatusTextMap
                        ]
                      }
                    </span>
                  </td>
                  <td className="px-6 py-4">{project.created_at}</td>
                  <td className="px-6 py-4">{project.due_date}</td>
                  <td className="px-6 py-4">{project.createdBy.name}</td>
                  <td className="px-6 py-4 space-x-4">
                    <Link
                      href={route("project.edit", project.id)}
                      className="text-indigo-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <Link
                      href={route("project.destroy", project.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination links={projects.meta.links} />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
