import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dqfwviwjlqnpedbbccyj.supabase.co";

const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxZnd2aXdqbHFucGVkYmJjY3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3MTU3NDYsImV4cCI6MjAyMDI5MTc0Nn0.4O0uoP5LmSzHU_1KVDUKWnVPVFA4Jb9Eo2kXmh_nbv0";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
