import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;



app.use(express.json());

const hallbooking = [{
    "id":"10",
    "customername":"san",
    "date":"1/10/2021",
    "starttime":"09:00 AM",
    "endtime":"06:00 PM",
    "room-id":"A10"
},{
    "id":"11",
    "customername":"ray",
    "date":"2/10/2021",
    "starttime":"09:00 AM",
    "endtime":"05:00 PM",
    "room-id":"A11"
},{
    "id":"12",
    "customername":"yan",
    "date":"1/10/2021",
    "starttime":"10:00 AM",
    "endtime":"03:00 PM",
    "room-id":"A12"
},{
    "id":"13",
    "customername":"bee",
    "date":"3/10/2021",
    "starttime":"09:00 AM",
    "endtime":"04:00 PM",
    "room-id":"A13"
},{
    "id":"14",
    "customername":"rishi",
    "date":"4/10/2021",
    "starttime":"11:00 AM",
    "endtime":"05:00 PM",
    "room-id":"A14"
},{
    "id":"15",
    "customername":"kirsh",
    "date":"5/10/2021",
    "starttime":"10:00 AM",
    "endtime":"05:00 PM",
    "room-id":"A15"
},
{
    "id":"16",
    "customername":"kirth",
    "date":"6/10/2021",
    "starttime":"09:00 AM",
    "endtime":"05:00 PM",
    "room-id":"A16"
},
{
    "id":"17",
    "customername":"murg",
    "date":"1/10/2021",
    "starttime":"10:00 AM",
    "endtime":"05:00 PM",
    "room-id":"A12"
},
{
    "id":"18",
    "customername":"deep",
    "date":"4/10/2021",
    "starttime":"09:00 AM",
    "endtime":"05:00 PM",
    "room-id":"A15"
}];


app.get("/",(request,response)=>{
    response.send("for hall booking details api ( /hallbooking )");
});

app.get("/hallbooking",(request,response)=>{
    response.send(hallbooking);
});

app.listen(PORT,()=>console.log("App is started in", PORT));