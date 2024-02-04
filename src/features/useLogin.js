import { useQuery } from "@tanstack/react-query";
import { login } from "../services/apiAuth";

export default function useLogin() {
	const { data: user, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: login,
	});

	return {
		user,
		isLoading,
		isAuthenticated: user?.aud === "authenticated",
	};
}
