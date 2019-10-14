import { IService } from '../interfaces';

export const SERVICE_DATA: IService = {
  services: [
    {
      description: 'Placement API',
      links: {
        self:
          'http://localhost:5000/v3/services/194a64c5c23d484cb858c42f47e88f67'
      },
      enabled: true,
      type: 'placement',
      id: '194a64c5c23d484cb858c42f47e88f67',
      name: 'placement'
    },
    {
      description: 'Trilio Vault Workload Manager Service',
      links: {
        self:
          'http://localhost:5000/v3/services/2502dd9c84204f5da741c861f43bffab'
      },
      enabled: true,
      type: 'workloads',
      id: '2502dd9c84204f5da741c861f43bffab',
      name: 'TrilioVaultWLM'
    },
    {
      description: 'OpenStack Compute',
      links: {
        self:
          'http://localhost:5000/v3/services/2549882db19f4ccabab5eb7792f5bd0a'
      },
      enabled: true,
      type: 'compute',
      id: '2549882db19f4ccabab5eb7792f5bd0a',
      name: 'nova'
    },
    {
      description: 'OpenStack Block Storage',
      links: {
        self:
          'http://localhost:5000/v3/services/5e98ebc0564a4dc8b7e1f97f82fc4a4d'
      },
      enabled: true,
      type: 'volumev2',
      id: '5e98ebc0564a4dc8b7e1f97f82fc4a4d',
      name: 'cinderv2'
    },
    {
      description: 'OpenStack Image',
      links: {
        self:
          'http://localhost:5000/v3/services/63a5c6b294be4459a184d6ea7a95a718'
      },
      enabled: true,
      type: 'image',
      id: '63a5c6b294be4459a184d6ea7a95a718',
      name: 'glance'
    },
    {
      enabled: true,
      type: 'identity',
      name: 'keystone',
      links: {
        self:
          'http://localhost:5000/v3/services/6f5c8ddc10bd4252ba60731568c98eb8'
      },
      id: '6f5c8ddc10bd4252ba60731568c98eb8'
    },
    {
      description: 'OpenStack Networking',
      links: {
        self:
          'http://localhost:5000/v3/services/ba276b126add48908de0dfdee832c0b9'
      },
      enabled: true,
      type: 'network',
      id: 'ba276b126add48908de0dfdee832c0b9',
      name: 'neutron'
    },
    {
      description: 'OpenStack Block Storage',
      links: {
        self:
          'http://localhost:5000/v3/services/e771dbbc75f94ade904f92b5322afa9a'
      },
      enabled: true,
      type: 'volumev3',
      id: 'e771dbbc75f94ade904f92b5322afa9a',
      name: 'cinderv3'
    },
    {
      description: 'Trilio Vault DataMover API Service',
      links: {
        self:
          'http://localhost:5000/v3/services/f4ec3db9f6f14f98af575cdf22786a95'
      },
      enabled: true,
      type: 'datamover',
      id: 'f4ec3db9f6f14f98af575cdf22786a95',
      name: 'dmapi'
    }
  ],
  links: {
    self: 'http://localhost:5000/v3/services',
    previous: null,
    next: null
  }
};
