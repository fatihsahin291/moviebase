import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useUser } from "../features/useUser";
import LoadingIndicator from "../components/LoadingIndicator";

function ProtectedRoute({ children }) {
	const navigate = useNavigate();

	const { isLoading, isAuthenticated } = useUser();

	useEffect(() => {
		if (!isAuthenticated && !isLoading) {
			navigate("/login");
		}
	}, [isAuthenticated, isLoading, navigate]);

	if (isLoading) {
		return <LoadingIndicator />;
	}

	if (isAuthenticated) return children;
}

export default ProtectedRoute;
