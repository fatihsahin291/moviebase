import supabase, { supabaseUrl } from "./supabase";

export async function login({ email, password }) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) throw new Error(error.message);

	console.log(data);
	console.log("user", data.user);
	console.log("session", data.session);

	return { user: data.user, session: data.session };
}

export async function logout() {
	const { error } = await supabase.auth.signOut();

	if (error) throw new Error(error.message);
}

export async function signUp({ email, password }) {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
	});

	if (error) throw new Error(error.message);

	return data;
}

export async function getCurrentUser() {
	const { data: session } = await supabase.auth.getSession();

	if (!session) return null;

	const { data, error } = await supabase.auth.getUser();

	if (error) throw new Error(error.message);

	return data?.user;
}
