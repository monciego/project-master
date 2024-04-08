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
import ProjectTable from "@/Components/ProjectTable";

export default function Project({
  auth,
  projects,
}: PageProps & { projects: ProjectResponse }) {
  console.log(projects);
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Project" />
      <ProjectTable projects={projects} />
    </AuthenticatedLayout>
  );
}
