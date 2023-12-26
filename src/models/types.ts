export type ProjectType = {
  id: number;
  category: string;
  name: string;
  description: string;
  startdate: string;
  enddate: string;
  status: string;
  assignedTo: string;
  priority: string;
  technologyStack: string[];
  client: string;
  bgcolourcode: string;
  txtcolourcode: string;
};

export type StaffType = {
  id: number;
  photo: string;
  name: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  role: string;
  phone: string;
  wage: string;
  workinghours: string;
  statutorywage: string;
  paystatus: string;
  age: string;
  checked: boolean;
  chartcolour: string;
};
