import express from "express";
import postgres from "postgres";
import nodemon from "nodemon";
import cors from "cors";

const sql = postgres("postgres://localhost/salon_service");
const app = express();

//=============Middleware=======================================
app.use(express.json());
app.use(express.static("./client"));
app.use(cors());

// db = salon_service

//============ HairStyles Routes ==============

app.get("/hairstyles", (req, res) => {
    sql`SELECT * FROM hairstyles`.then(results => {
        res.send(results)
    })
    console.log('is working')
});

app.get("/hairstyles/:id", (req, res) => {
    const id = req.params.id;
    sql`SELECT * FROM hairstyles WHERE id = ${id}`.then(results => {
        if (results.length !== 0) {
            res.json(results[0]);
        } else {
            res.status(404);
            res.set("Content-Type", "text/plain");
            res.send("Not Found");
        };
    })
})

app.post("/hairstyles", (req, res) => {
    const { name, price, description, hair_needed } = req.body;
    if(name && price && description && hair_needed){
        sql`INSERT INTO hairstyles (name, price, description, hair_needed) 
        VALUES (${name}, ${price}, ${description}, ${hair_needed});
        RETURNING *`
        .then(result => {
            res.status(201)
            res.send(result);
        })
    } else {
        res.send('Please add all information required')
    }
});  

app.patch("/hairstyles/:id", (req, res) => {
    const id = req.params.id
    const item = req.body; 
    sql`SELECT * FROM hairstyles WHERE id = ${id}`.then(result => {
        if (result.length === 0) {
            res.status(404);
            res.set("Content-Type", "text/plain");
            res.send("Not Found");
        } else {
            for (let each in result[0]) {
                if(item[each]){
                    result[0][each] = item[each]
                    console.log(result[0][each])
                }
            };
            let { name, price, description, hair_needed } = result[0];
            console.log(name, price, description, hair_needed);
            sql`UPDATE hairstyles 
                SET 
                    name = ${name}, price = ${price}, description = ${description}, 
                    hair_needed = ${hair_needed}
                WHERE id = ${id} RETURNING *`
            .then(result => {
                res.status(202)
                res.send(result[0])
            });
        };
    });
});

app.delete("/hairstyles/:id", (req, res) => {
    const id = req.params.id;
    sql`DELETE FROM hairstyles WHERE id = ${id}`.then(() => {
        res.send('Hairstyle has been deleted')
    })
});

//============ appointments Routes ==============

app.get("/appointments", (req, res) => {
    sql`SELECT * FROM appointments`.then(results => {
        res.send(results)
    })
    console.log('is working')
});

app.get("/appointments/:id", (req, res) => {
    const id = req.params.id;
    sql`SELECT * FROM appointments WHERE id = ${id}`.then(result => {
        if (result.length !== 0) {
            res.json(result[0]);
        } else {
            res.status(404);
            res.set("Content-Type", "text/plain");
            res.send("Not Found");
        };
    })
});

app.post("/appointments", (req, res) => {
    const { hairstyles_id, client, notes, phone_number, hair_option } = req.body;
    if(hairstyles_id && client && notes && phone_number && hair_option) {
    sql`INSERT INTO appointments (hairstyles_id, client, notes, phone_number, hair_option) 
    VALUES (${hairstyles_id}, ${client}, ${notes}, ${phone_number}, ${hair_option}) RETURNING *`
    .then(result => {
        res.status(201)
        res.send(result[0]);
    })
    } else {
        res.status(406);
        res.send('Please add all information required');
    }
});

app.patch("/appointments/:id", (req, res) => {
    const id = req.params.id
    const item = req.body;
    sql`SELECT * FROM appointments WHERE id = ${id}`.then(result => {
        if (result.length === 0) {
            res.status(404);
            res.set("Content-Type", "text/plain");
            res.send("Not Found");
        } else {
            for (let each in result[0]) {
                if(item[each]){
                    result[0][each] = item[each]
                }
            };
            let { hairstyles_id, client, notes, phone_number, hair_option } = result[0];
            console.log(hairstyles_id, client, notes, phone_number, hair_option);
            sql`UPDATE appointments 
                SET 
                    hairstyles_id = ${hairstyles_id}, client = ${client}, notes = ${notes}, 
                    phone_number = ${phone_number}, hair_option = ${hair_option}
                WHERE id = ${id} RETURNING *`
            .then(result => {
                res.status(202)
                res.send(result[0])
            });
        };
    });
});

app.delete("/appointments/:id", (req, res) => {
    const id = req.params.id;
    sql`DELETE FROM appointments WHERE id = ${id}`.then(() => {
        res.send('Your appointment has been deleted')
    })
});


//==============ERROR HANDLERS==============================================
app.use((err, req, res, mext) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
})

app.listen(3000, () => {
    console.log("Server is running")
})