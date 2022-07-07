import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/post.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://partik7110:pratik7110@cluster0.4uptp.mongodb.net/test?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

// app.listen(PORT,()=>console.log(`listening on port: ${PORT}`));
app.get("/", (req, res) => {
  res.send("wORKING");
});
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`listening on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify',false)
