import { DOMAIN_DATA } from './domainsData';
import { PROJECT_DATA } from './projectsData';
import { SERVICE_DATA } from './servicesData';
import { USER_DATA } from './usersData';
import { ICloud } from '../interfaces';
export function getData(name: string, is_responding: boolean) {
  const PROJECT = PROJECT_DATA.projects.map(project => {
    delete project.tags;
    delete project.links;
    delete project.is_domain;
    return project;
  });

  const SERVICE = SERVICE_DATA.services.map(service => {
    delete service.links;
    return service;
  });

  const USER = USER_DATA.users.map(user => {
    delete user.links;
    delete user.options;
    delete user.password_expires_at;
    return user;
  });

  const DOMAIN = DOMAIN_DATA.domains.map(domain => {
    delete domain.links;
    return domain;
  });

  const CLOUD: ICloud = {
    name,
    is_responding,
    domains: DOMAIN,
    projects: PROJECT,
    services: SERVICE,
    users: USER
  };
  return CLOUD;
}
