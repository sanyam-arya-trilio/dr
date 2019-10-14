import { IProjects } from '../interfaces';

export const PROJECT_DATA: IProjects = {
  links: {
    self: 'http://localhost:5000/v3/projects',
    previous: null,
    next: null
  },
  projects: [
    {
      is_domain: false,
      description: 'Service Project',
      links: {
        self:
          'http://localhost:5000/v3/projects/6dd5c01fb2c1497b8d9c332f4e774909'
      },
      tags: [],
      enabled: true,
      id: '6dd5c01fb2c1497b8d9c332f4e774909',
      parent_id: 'default',
      domain_id: 'default',
      name: 'service'
    },
    {
      is_domain: false,
      description: 'Demo Project',
      links: {
        self:
          'http://localhost:5000/v3/projects/924b9cda07524707bcbb3a3b0adbeec1'
      },
      tags: [],
      enabled: true,
      id: '924b9cda07524707bcbb3a3b0adbeec1',
      parent_id: 'default',
      domain_id: 'default',
      name: 'myproject'
    },
    {
      is_domain: false,
      description: 'Bootstrap project for initializing the cloud.',
      links: {
        self:
          'http://localhost:5000/v3/projects/c33390c6d7d6460b91a972cbf247e4da'
      },
      tags: [],
      enabled: true,
      id: 'c33390c6d7d6460b91a972cbf247e4da',
      parent_id: 'default',
      domain_id: 'default',
      name: 'admin'
    }
  ]
};
