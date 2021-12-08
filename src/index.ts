import express from "express";
const app = express();
import { Diagnose} from "../controller/types";
import { notSensitiveData } from "../controller/functions";
import  diagnoses from "./data/diagnoses.json";
import  patients from "./data/patients.json";
const port = 3000;

app.get("/api/diagnoses", (_req, res)=>{
    const data:Diagnose[] = diagnoses;
    res.json(data);
});

app.get("/api/patients", (_req,res)=>{

    res.json(notSensitiveData(patients))
})


app.listen(port, ()=>{
    console.log("listening to port " + port);
    
});
