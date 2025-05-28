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
    headquarter: {
      id: number;
      name: string;
      address: string;
      phone: number;
      city: {
        id: number;
        name: string;
        state: {
          id: number;
          name: string;
          country: {
            id: number;
            name: string;
            continent: {
              id: number;
              name: string;
            };
          };
        };
      };
      company: {
        id: number;
        name: string;
        nit: number;
        address: string;
        email: string;
        typeIndustry: string;
        urlLogo: string;
      };
    };
  };
  urlFoto: string;
  status: boolean;
}
