import { useQuery } from "@tanstack/react-query";

export function useAuth() {
  const query = useQuery({
    queryKey: ["/api/user"],
    staleTime: Infinity,
  });
  
  return {
    ...query,
    user: query.data?.user,
    isAuthenticated: !!query.data?.user,
  };
} 