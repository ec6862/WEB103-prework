import { createClient } from '@supabase/supabase-js';

const URL = "https://anblmmdjbdmkodugfnrb.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYmxtbWRqYmRta29kdWdmbnJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyMzcwNzYsImV4cCI6MjAzNTgxMzA3Nn0.nl2pUSEo45gjaB2mLZ30Qy3sV_8EyMSbMGxYSegsuFo";

export const supabase = createClient(URL, API_KEY);
