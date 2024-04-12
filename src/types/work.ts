export interface Work {
  id: string;
  cover: string;
  name: string;
  role?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  technologies?: Technologies[];
}

export interface Technologies {
  icon: string;
  name: string;
}
