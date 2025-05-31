export interface Headquarter {
  name: string;
  address: string;
  phone: string;
  city: {
    id: number;
    name: string;
  };
  company: {
    id: number;
    name: string;
  };
}
