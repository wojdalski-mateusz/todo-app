export interface Task {
  id: number;
  content: string;
  isDone: boolean;
  category: Category;
}

export enum Category {
  Work = "Praca",
  Home = "Dom",
  Hobby = "Hobby",
  Other = "Inne",
}
