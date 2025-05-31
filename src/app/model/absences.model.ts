export interface WorkAbsences {
  id: number;
  employee: {
    id: number;
    firstname: string;
    lastname: string;
  };
  absenceType: {
    id: number;
    name: string;
  };
  startDate: string; 
  endDate: string;
  description: string;
}