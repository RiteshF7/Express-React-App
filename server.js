const express = require('express');
const app = express();
const port=5000;

app.get("/api",(req,res)=>{
    const coustumers=[
        {id:1,firstname:"ritesh",lastname:"singh"},
        {id:1,firstname:"rohit",lastname:"singh"},
        {id:1,firstname:"rohan",lastname:"singh"}
    ]

    res.json(coustumers);
})

app.listen( port,()=>console.log(`server running on ${port}`));