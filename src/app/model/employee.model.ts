export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  hireDate: string;
  role: {
    id: number;
    name: string;
  };
  department: {
    id: number;
    name: string;
  };
  urlFoto: string;
  status: boolean;
}
