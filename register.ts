import { DB } from "https://deno.land/x/sqlite@v3.7.0/mod.ts";
 // Open a database to be held in memory
 

 

 // Todo: Other CRUD operations here...

 // Close database to clean up resources
 
Deno.serve(async (req) => {
    const db = new DB("teste.db"); // or new DB()
 // Use new DB("file.db"); for a file-based database
 db.execute(`
 CREATE TABLE IF NOT EXISTS alunos (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   nome TEXT,
   cpf TEXT,
   email TEXT,
   endereco TEXT,
   fone TEXT
 )`);
    console.log("Method:", req.method);
  
    const url = new URL(req.url);
    // console.log("Path:", url.pathname);
    // console.log("Query parameters:", url.searchParams);
  
    // console.log("Headers:", req.headers);
  
    if (req.body) {
        const body = JSON.parse(await req.text())
        console.log("Body:", body);
        // const a = body.split('&')
        // Insert data within a transaction
        db.transaction(() => {
            db.query(`
                INSERT INTO alunos 
                    (nome, cpf, email, endereco, fone) 
                VALUES 
                    (
                    '${body.nome}', 
                    '${body.cpf}', 
                    '${body.email}', 
                    '${body.endereco}', 
                    '${body.fone}'
                    )
                `);
        });
    }
    db.close()
    return new Response("Hello, world", {
      status: 200,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    });
  });