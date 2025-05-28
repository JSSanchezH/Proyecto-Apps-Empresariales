export interface Payroll {
  id: number;
  employee: {
    id: number;
    firstname: string;
    lastname: string;
  };
  paymentDate: string; 
  baseSalary: number;
  bonuses: number;
  totalPayment: number;
  paymentMethod: {
    id: number;
    name: string;
  };
}