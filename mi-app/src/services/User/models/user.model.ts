export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  role: "admin" | "moderator" | "user";
  gender: string;
  phone: string;
  birthDate: string;
  username: string;
}
