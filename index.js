import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=twopart");
        const data = response.data;
        console.log(data);
        res.render("index.ejs", { setup: data.setup,
            delivery : data.delivery,
            cat: data.category
         });
      } catch (error) {
        res.status(404).send(error.message);
      }
  });

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
  
