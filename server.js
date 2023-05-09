import app from "./src/index.js";
import "dotenv/config";

app.listen(3333, () => {
  console.log(`Server started on port ${process.env.PORT} `);
});
