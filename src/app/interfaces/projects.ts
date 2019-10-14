export interface IProjects {
  links: IProjectsLinks;
  projects: Project[];
}

export interface IProjectsLinks {
  next: string;
  previous: string;
  self: string;
}

export interface Project {
  is_domain: boolean;
  parent_id: string;
  description: string;
  domain_id: string;
  enabled: boolean;
  id: string;
  links: ProjectLinks;
  name: string;
  tags: string[];
}

export interface ProjectLinks {
  self: string;
}
