import express from "express";
import postgres from "postgres";
import nodemon from "nodemon";
import cors from "cors";

const sql = postgres(process.env.DATABASE_URL);

//=============Middleware=======================================
app.use(express.json());
app.use(express.static("./client"));
app.use(cors());

// db = salon_service

//============ Routes ==============

app.get("/hairstyles", (req, res) => {
    sql`SELECT * FROM hairstles`.then(results => {
        res.send(results)
    })
    console.log('is working')
})

//==============ERROR HANDLERS==============================================
app.use((err, req, res, mext) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
})


app.listen(3000, () => {
    console.log("Server is running")
})