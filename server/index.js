import express from 'express';
import bodyParser from "body-parser"
import cors from 'cors';
import pg from "pg";

const app = express();
const port = 5000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "confidential",
  password: "Himanshu",
  port: 5433,
});

db.connect();

app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

let items = [];

app.get("/api", async (req, res) => {
    try {
      const result = await db.query("SELECT * FROM blogdata ORDER BY id;");
      items = result.rows;
      console.log( items);
  
      res.json(items );
    } catch (err) {
      console.log(err)
    }
  });
  
  app.post( "/add", async(req, res) => {
 
 
    const title = req.body.title;
    const category = req.body.category;
    const authorname = req.body.authorname;
    const createdat = req.body.createdat;
    const cover = req.body.imagelink;
    const description = req.body.description;

    try{
      await db.query(
        "INSERT INTO blogdata (title, category, description, authorname, createdat, cover) VALUES ($1, $2, $3, $4, $5, $6)",
        [title, category, description, authorname, createdat, cover]
      );
      res.redirect("/");
    }catch(err)
    {
      console.log(err);
    }
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  

  // Object { title: "aa", category: "aaa", authorname: "aaa", createdat: "aaa", imagelink: "aaa", description: "aaa" }