// Generated by https://quicktype.io

export interface IService {
  services: Service[];
  links: IServiceLinks;
}

export interface IServiceLinks {
  self: string;
  previous: null;
  next: null;
}

export interface Service {
  description?: string;
  links: ServiceLinks;
  enabled: boolean;
  type: string;
  id: string;
  name: string;
}

export interface ServiceLinks {
  self: string;
}
