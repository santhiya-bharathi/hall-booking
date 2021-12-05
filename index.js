import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;



app.use(express.json());

const hallbookeddetails = [{
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

const hallbooking = [{"number of seats available" : "100" ,"Prize for 1 hour": "₹5000",
 "amenities in room":[{"Toiletries" :"Toiletries-(e.g. Shampoo, lotion, etc.)",
"Personal care" :"Personal care-(combs, shaving cream, razor, shower cap, hair dryer)",
"Coffee Kit":"Coffee Kit (maker, coffee and creamer)",
"Room Amenities": "In-Room Tablets",
"Room Amenities":" Enthusiast & Hobbyist Tech",
"Cocktail Station":"In-Room Cocktail Station"}]
 }]

 const hallbookingstatus = [{
    "id":"10",
    "customername":"san",
    "date":"1/10/2021",
    "starttime":"09:00 AM",
    "endtime":"06:00 PM",
    "room-id":"A10",
    "bookedstatus":"booked"
},{
    "id":"11",
    "customername":"ray",
    "date":"2/10/2021",
    "starttime":"09:00 AM",
    "endtime":"05:00 PM",
    "room-id":"A11",
    "bookedstatus":"booked"
},{
    "id":"12",
    "customername":"yan",
    "date":"1/10/2021",
    "starttime":"10:00 AM",
    "endtime":"03:00 PM",
    "room-id":"A12",
    "bookedstatus":"booked"
},{
    "id":"13",
    "customername":"bee",
    "date":"3/10/2021",
    "starttime":"09:00 AM",
    "endtime":"04:00 PM",
    "room-id":"A13",
    "bookedstatus":"booked"
},{
    "id":"14",
    "customername":"rishi",
    "date":"4/10/2021",
    "starttime":"11:00 AM",
    "endtime":"05:00 PM",
    "room-id":"A14",
    "bookedstatus":"booked"
},{
    "id":"15",
    "customername":"kirsh",
    "date":"5/10/2021",
    "starttime":"10:00 AM",
    "endtime":"05:00 PM",
    "room-id":"A15",
    "bookedstatus":"booked"
},
{
    "id":"16",
    "customername":"kirth",
    "date":"6/10/2021",
    "starttime":"09:00 AM",
    "endtime":"05:00 PM",
    "room-id":"A16",
    "bookedstatus":"booked"
},
{
    "id":"17",
    "customername":"murg",
    "date":"1/10/2021",
    "starttime":"10:00 AM",
    "endtime":"05:00 PM",
    "room-id":"A12",
    "bookedstatus":"booked"
},
{
    "id":"18",
    "customername":"deep",
    "date":"4/10/2021",
    "starttime":"09:00 AM",
    "endtime":"05:00 PM",
    "room-id":"A15",
    "bookedstatus":"booked"
},
{
    "id":"19",
    "room-id":"A19",
    "bookedstatus":"not-booked"
},
{
    "id":"20",
    "room-id":"A20",
    "bookedstatus":"not-booked"
},
{
    "id":"21",
    "room-id":"A21",
    "bookedstatus":"not-booked"
},
{
    "id":"22",
    "room-id":"A22",
    "bookedstatus":"not-booked"
},
{
    "id":"23",
    "room-id":"A23",
    "bookedstatus":"not-booked"
},
{
    "id":"24",
    "room-id":"A24",
    "bookedstatus":"not-booked"
}];

const details = `for hall booking details api ( /hallbooking ) 
for hall booked details api (/hallbookeddetails ) 
for hallbookingstatus api (/hallbookingstatus )`

app.get("/",(request,response)=>{
    response.send(details);
});

app.get("/hallbooking",(request,response)=>{
    response.send(hallbooking);
});

app.get("/hallbookeddetails",(request,response)=>{
    response.send(hallbookeddetails);
});

app.get("/hallbookingstatus",(request,response)=>{
    response.send(hallbookingstatus);
});

app.listen(PORT,()=>console.log("App is started in", PORT));