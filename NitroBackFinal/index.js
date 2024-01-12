import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const { Schema } = mongoose;

const servviceSchema = new Schema({
  icon: String,
  title: String,
  text: String,
});

const servviceModel = mongoose.model('Servvice', servviceSchema);


app.get("/",async (req, res) => {
  const service = await servviceModel.find();
  res.send(service);
});

app.get("/:id",async (req, res) => {
    const {id} =req.params
    const service = await servviceModel.findById(id);
    res.send(service);
  });

app.post("/", async (req, res) => {
    const {icon,title,text} =req.body
    const newService = servviceModel({icon,title,text})
    await newService.save()
  res.send(newService);
});

app.put("/:id",async (req, res) => {
    const {id} =req.params
    const {icon,title,text} =req.body
    const service = await servviceModel.findByIdAndUpdate(id,{icon,title,text});
    res.send(service);
});

app.delete("/:id",async (req, res) => {
    const {id} =req.params
    const service = await servviceModel.findByIdAndDelete(id);
  res.send("Got a DELETE request at /user");
});

mongoose
  .connect("mongodb+srv://anar:anar@cluster0.aeurkzy.mongodb.net/")
  .then(() => console.log("Connected!"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
  