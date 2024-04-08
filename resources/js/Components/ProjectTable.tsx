import { MoreHorizontal } from "lucide-react";
import PropTypes from "prop-types";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ProjectResponse } from "@/types";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
  StatusClassMap,
  StatusTextMap,
} from "@/constants";
import PaginationComponent from "./Pagination";
import { Link } from "@inertiajs/react";

export default function ProjectTable({
  projects,
}: {
  projects: ProjectResponse;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
        <CardDescription>Manage your projects.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead className="hidden md:table-cell">Created by</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.data.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="hidden sm:table-cell">
                  <img
                    alt={`${project.name} image`}
                    className="aspect-square bg-slate-700 rounded-md object-cover"
                    height="64"
                    src={project.image_path}
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>
                  <Badge
                    className={`
                      text-white py-2
                      ${
                        PROJECT_STATUS_CLASS_MAP[
                          project.status as keyof StatusClassMap
                        ]
                      }`}
                    variant="outline"
                  >
                    {
                      PROJECT_STATUS_TEXT_MAP[
                        project.status as keyof StatusTextMap
                      ]
                    }
                  </Badge>
                </TableCell>
                <TableCell>{project.due_date}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {project.createdBy.name}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {project.created_at}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <Link href={route("project.edit", project.id)}>
                        <DropdownMenuItem className="cursor-pointer">
                          Edit
                        </DropdownMenuItem>
                      </Link>
                      <Link href={route("project.destroy", project.id)}>
                        <DropdownMenuItem className="cursor-pointer">
                          Delete
                        </DropdownMenuItem>
                      </Link>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <PaginationComponent links={projects.meta.links} />
        <div className="text-sm text-muted-foreground">
          Showing{" "}
          <strong>
            {projects.meta.current_page}-{projects.meta.per_page}
          </strong>{" "}
          of <strong>{projects.meta.total}</strong> projects
        </div>
      </CardFooter>
    </Card>
  );
}
