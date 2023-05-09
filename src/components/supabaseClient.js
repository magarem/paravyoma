import { createClient } from '@supabase/supabase-js'
 
const supabaseUrl = "https://jrppesgzrtbbqriuypku.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpycHBlc2d6cnRiYnFyaXV5cGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwMjYwMDksImV4cCI6MTk5NzYwMjAwOX0.mVBmQ2FuHX5r4vfrsllMAVZJrrIb3Bx-HjJWyz3HNCo"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)