// 5️⃣ En index.js: creación de servidor web con el framework express.js
//? Importar: express y cors, usalos:


import { supabase } from './supabaseClient.js' //todo

import express from "express";
import cors from "cors";

const PORT = 3001;
const app = express();
app.use(express.json())

// app.use(cors({
//   origin:'http://127.0.0.1:5501/index.html'
// }))

const allowedOrigins = [
  'http://127.0.0.1:5501/index.html',
  'http://127.0.0.1:3000/index.html'
]

app.use(cors({
  origin: (origin, callback) => {
    if(!origin || allowedOrigins.includes(origin)) callback(null, true) //*✅Permite acceso
    else callback(new Error('origin no permitido por CORS'), false) //!🚫Denegado acceso
  }

}))








app.get('/', (req, res)=>{
    //? Envía un mensaje de texto simple
    res.send('¡Hola desde mi backend de Node.js!');

    //? O puedes enviar HTML directamente:
    // res.send('<h1>¡Bienvenido a mi página!</h1><p>Este es un párrafo de ejemplo.</p>');
})

// app.get('/usuarios', async (req, res) =>{
//     res.send('Deberia entregarte un JOSN de usuarios, los que estan en la BBDD!');
//     //todo: necesitaremos la instancia "supabase" que representa nuestra data 
//     // esta formada por las key secretas que te dio supa en: 
//     // "Connecting to your new project" esta en 1er icono del menu lateral "Project Overview" scroll down
//     // dice: Interact with your database through the Supabase client libraries with your API keys.
// } )


//! import { supabase } from './supabaseClient.js' //todo
app.get('/usuarios', async (req, res) => { //todo
    const { data: usuarios, error } = await supabase
      .from('usuarios')
      .select('*')  // Selecciona todas las columnas
  
    if (error) {
      console.error('Error al obtener usuarios:', error)
      return res.status(500).send('Error al obtener usuarios')
    }
  
    res.json(usuarios) // Envía los usuarios como JSON
  })



app.listen(PORT, ()=>{     console.log(`Servidor escuchando en http://localhost:${PORT}`);
})