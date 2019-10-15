export interface INewCloud {
  id:string;
  name: string;
  domain: string;
  url: string;
  user: string;
  password?: string;
  is_responding?: boolean;
}
export interface IDialogData {
  cloud: INewCloud;
  title: string;
}
export interface ICloud {
  is_responding: boolean;
  name: string;
  domains: Domain[];
  projects: Project[];
  services: Service[];
  users: User[];
}

interface Project {
  description: string;
  domain_id: string;
  enabled: boolean;
  id: string;
  name: string;
  tags: string[];
}

interface Domain {
  description: string;
  enabled: boolean;
  id: string;
  name: string;
}

interface Service {
  description?: string;
  enabled: boolean;
  type: string;
  id: string;
  name: string;
}

interface User {
  name: string;
  domain_id: string;
  enabled: boolean;
  id: string;
  default_project_id?: string;
  email?: string;
}
