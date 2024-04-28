interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=2");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
