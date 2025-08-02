// import dotenv from 'dotenv'; //todo: add esto
// dotenv.config();//todo: add esto
// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://zqgdtbocblpyjdvcyqhp.supabase.co'


// const supabaseKey = process.env.SUPABASE_KEY
// export const supabase = createClient(supabaseUrl, supabaseKey)

import dotenv from 'dotenv';//todo:esto debes agregarlo
dotenv.config();//todo:esto debes agregarlo
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uvsmckucvuragveeiyrx.supabase.co' 
const supabaseKey = process.env.SUPABASE_KEY //!🚩👀 Secreto
export const supabase = createClient(supabaseUrl, supabaseKey)