import express from "express";
const app = express();
const PORT = 9000;

const hallbooking = [{
    "id":"10",
    "customername":"san",
    "date":"1/10/2021",
    "starttime":"09:00 AM",
    "endtime":"06:00 PM",
    "room-id":"A10"
}];

app.get("/",(request,response)=>{
    response.send("hello world");
});

app.get("/hallbooking",(request,response)=>{
    response.send(hallbooking);
});

app.listen(PORT,()=>console.log("App is started in", PORT));