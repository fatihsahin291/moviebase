import { useQuery } from "@tanstack/react-query";
import { signUp } from "../services/apiAuth";

export default function useSignup() {
	const { data: user, isLoading } = useQuery({
		queryKey: ["user"],
		queryFn: signUp,
	});

	return {
		user,
		isLoading,
		isAuthenticated: user?.aud === "authenticated",
	};
}
