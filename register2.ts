// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express@4.18.2";
import cors from "https://raw.githubusercontent.com/nandub/deno-cors/master/mod.ts";

const app = express();
app.use(cors());
app.post("/register", (req, res) => {
    res.status(200).send("Welcome to the Dinosaur API!");
});
 
app.listen(8000);