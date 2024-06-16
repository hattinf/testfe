export interface Regs {
  id: number;
  email: string;
  name: string;
  newsletter: boolean;
  surname: string;
}

export interface RegsCreate {
  email: string;
  name: string;
  newsletter: boolean;
  surname: string;
}
