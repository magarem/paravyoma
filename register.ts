
import { DB } from "https://deno.land/x/sqlite@v3.7.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import {
  Application,
  Context,
  helpers,
  Router,
} from "https://deno.land/x/oak@v12.4.0/mod.ts";



const { getQuery } = helpers;
const router = new Router();


// Deno.serve(async (req) => {
 


router
  .get("/users", async (ctx: Context) => {
  })
  .get("/users/:id", async (ctx: Context) => {
    const { id } = getQuery(ctx, { mergeParams: true });
  })
  .get("/users/email/:email", async (ctx: Context) => {
    const { email } = getQuery(ctx, { mergeParams: true });
  })
  .get("/users/:id/address", async (ctx: Context) => {
    const { id } = getQuery(ctx, { mergeParams: true });
  })

  .post("/register", async (ctx: Context) => {

    console.log('/register');
    
    const body = ctx.request.body();

    // console.log('--->', await body.value.trim());
    
    const user = await body.value
  
    console.log('user:', user);
    
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
      nascimento TEXT,
      formadepagamento TEXT,
      data TEXT
      )`);
    
    db.transaction(() => {
      db.query(`
          INSERT INTO alunos 
              (nome, cpf, email, endereco, fone) 
          VALUES 
              (
              '${user.nome}', 
              '${user.cpf}', 
              '${user.email}', 
              '${user.endereco}', 
              '${user.fone}'
              '${user.nascimento}'
              '${user.formadepagamento}'
              '${new Date().toLocaleDateString('pt-BR')}'
              )
      `);
    });
      
    db.close()
  
    // return "testando!"
    ctx.response.body = "ok"
  })
 
  .delete("/users/:id", async (ctx: Context) => {
    const { id } = getQuery(ctx, { mergeParams: true });
  });

const app = new Application();
// app.use(oakCors()); 
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
