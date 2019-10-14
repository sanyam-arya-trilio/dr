import { IUser } from '../interfaces';

export const USER_DATA: IUser = {
  users: [
    {
      password_expires_at: null,
      name: 'myuser',
      links: {
        self: 'http://localhost:5000/v3/users/0a544caebd9a40cd817dafc35a08cb1c'
      },
      domain_id: 'default',
      enabled: true,
      id: '0a544caebd9a40cd817dafc35a08cb1c',
      options: {}
    },
    {
      password_expires_at: null,
      name: 'glance',
      links: {
        self: 'http://localhost:5000/v3/users/142affb4446542e585846ff0f31453a8'
      },
      domain_id: 'default',
      enabled: true,
      id: '142affb4446542e585846ff0f31453a8',
      options: {}
    },
    {
      password_expires_at: null,
      name: 'placement',
      links: {
        self: 'http://localhost:5000/v3/users/1dce95800d2a43b59b9adce462b482b4'
      },
      domain_id: 'default',
      enabled: true,
      id: '1dce95800d2a43b59b9adce462b482b4',
      options: {}
    },
    {
      password_expires_at: null,
      name: 'nova',
      links: {
        self: 'http://localhost:5000/v3/users/602a34128f1646f59da07561dc528eda'
      },
      domain_id: 'default',
      enabled: true,
      id: '602a34128f1646f59da07561dc528eda',
      options: {}
    },
    {
      password_expires_at: null,
      name: 'cinder',
      links: {
        self: 'http://localhost:5000/v3/users/afb193c05ade485ca70a52a2e40a3bd5'
      },
      domain_id: 'default',
      enabled: true,
      id: 'afb193c05ade485ca70a52a2e40a3bd5',
      options: {}
    },
    {
      password_expires_at: null,
      name: 'neutron',
      links: {
        self: 'http://localhost:5000/v3/users/c4cbdbb019fc444ebc0468cd469191e7'
      },
      domain_id: 'default',
      enabled: true,
      id: 'c4cbdbb019fc444ebc0468cd469191e7',
      options: {}
    },
    {
      name: 'triliovault',
      links: {
        self: 'http://localhost:5000/v3/users/e2420a5485904999b419132891c3efcb'
      },
      domain_id: 'default',
      enabled: true,
      options: {},
      default_project_id: '6dd5c01fb2c1497b8d9c332f4e774909',
      id: 'e2420a5485904999b419132891c3efcb',
      email: 'info@trilio.io',
      password_expires_at: null
    },
    {
      password_expires_at: null,
      name: 'admin',
      links: {
        self: 'http://localhost:5000/v3/users/f9b7b7309f444a66ab924bd36844ad1f'
      },
      domain_id: 'default',
      enabled: true,
      id: 'f9b7b7309f444a66ab924bd36844ad1f',
      options: {}
    }
  ],
  links: {
    self: 'http://localhost:5000/v3/users',
    previous: null,
    next: null
  }
};
