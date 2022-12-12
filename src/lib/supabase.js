import { createClient } from  '@supabase/supabase-js'

const  SUPABSE_URL = 'https://rejnxrkfxgajssbppzso.supabase.co/'
const  SUPABASE_PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlam54cmtmeGdhanNzYnBwenNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA3NzM3NjcsImV4cCI6MTk4NjM0OTc2N30.heB2GC4m2Yfj8dsbvtpLTw9cZ20AxGJsCI9s4R7FD30'

const supabase = createClient(SUPABSE_URL, SUPABASE_PUBLIC_KEY)

export default supabase