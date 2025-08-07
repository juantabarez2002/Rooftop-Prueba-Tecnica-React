import { UserResponse } from "./models/userResponse.model";

const BASE_URL = "https://dummyjson.com/users";

export async function fetchUsers(skip = 0, limit = 10): Promise<UserResponse> {
  const response = await fetch(`${BASE_URL}?skip=${skip}&limit=${limit}`);
  if (!response.ok) {
    throw new Error("Error al obtener usuarios");
  }
  return response.json();
}

export async function searchUsers(query: string): Promise<UserResponse> {
  const response = await fetch(
    `${BASE_URL}/search?q=${encodeURIComponent(query)}`
  );
  if (!response.ok) {
    throw new Error("Error al buscar usuarios");
  }
  return response.json();
}
