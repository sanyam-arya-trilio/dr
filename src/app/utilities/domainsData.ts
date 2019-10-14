import { IDomain } from '../interfaces';

export const DOMAIN_DATA: IDomain = {
  domains: [
    {
      description: 'The default domain',
      links: { self: 'http://localhost:5000/v3/domains/default' },
      tags: [],
      enabled: true,
      id: 'default',
      name: 'Default'
    }
  ],
  links: {
    self: 'http://localhost:5000/v3/domains',
    previous: null,
    next: null
  }
};
