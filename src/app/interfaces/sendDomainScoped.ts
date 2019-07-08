export interface IDomainScoped {
  auth: Auth;
}

export interface Auth {
  identity: Identity;
  scope: Scope;
}

export interface Identity {
  methods: string[];
  password: Password;
}

export interface Password {
  user: User;
}

export interface User {
  name: string;
  domain: Domain;
  password: string;
}

export interface Domain {
  id: string;
}

export interface Scope {
  domain: Domain;
}
