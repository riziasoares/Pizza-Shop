import { api } from "@/lib/axios";

interface getProfileResponse {
  email: string;
  id: string;
  name: string;
  phone: string | null;
  role: "manager" | "customer";
  createdAt: Date | null;
  updatedAt: Date | null;
}

export async function getProfile() {
  const response = await api.get<getProfileResponse>("/me");

  return response.data;
}
