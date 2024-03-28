export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  created_at: string;
  due_date: string;
  status: string;
  image_path: string;
  createdBy: {
    id: number;
    name: string;
    email: string;
  };
  updatedBy: {
    id: number;
    name: string;
    email: string;
  };
}

interface ProjectResponse {
  data: Project[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = T & {
  auth: {
    user: User;
  };
};
