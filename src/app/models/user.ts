export interface User {
  id: number;
  username: string;
  email: string;
  roles: Role[];
}

export interface Role {
  id: number;
  name: string;
}

export interface SaveUser {
  id: number;
  username: string;
  email: string;
  roles: Role[];
  accessToken: string;
  tokenType: string;
}
