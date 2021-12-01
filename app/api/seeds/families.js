const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Family = require("../models/Family.model");

const families = [
    {
        name: "zombis",
        livingInGroup: true,
        habitat:["61a50b972b189f00e2c0a12a", "61a50b972b189f00e2c0a12b", "61a50b972b189f00e2c0a12c", "61a50b972b189f00e2c0a12d", "61a50b972b189f00e2c0a12e", "61a50b972b189f00e2c0a12f", "61a50b972b189f00e2c0a130", "61a50b972b189f00e2c0a132", "61a50b972b189f00e2c0a134"],
        img: "https://i.imgur.com/EbtaEYP.jpg"
    },
    {
        name: "humanos",
        livingInGroup: true,
        habitat:["61a50b972b189f00e2c0a12b", "61a50b972b189f00e2c0a12d"],
        img: "https://i.imgur.com/EbtaEYP.jpg"
    },
    {
        name: "ganado",
        livingInGroup: true,
        habitat:["61a50b972b189f00e2c0a12d", "61a50b972b189f00e2c0a12e", "61a50b972b189f00e2c0a12f", "61a50b972b189f00e2c0a130", "61a50b972b189f00e2c0a134"],
        img: "https://i.imgur.com/EbtaEYP.jpg"
    },
    {
        name: "domesticables",
        livingInGroup: false,
        habitat:["61a50b972b189f00e2c0a12d", "61a50b972b189f00e2c0a12e", "61a50b972b189f00e2c0a12f", "61a50b972b189f00e2c0a130", "61a50b972b189f00e2c0a134"],
        img: "https://i.imgur.com/EbtaEYP.jpg"
    },
    {
        name: "peces",
        livingInGroup: true,
        habitat:["61a50b972b189f00e2c0a12c"],
        img: "https://i.imgur.com/0pOXZcK.jpg"
    },
    {
        name: "raros",
        livingInGroup: true,
        habitat:["61a50b972b189f00e2c0a12a", "61a50b972b189f00e2c0a12b", "61a50b972b189f00e2c0a12c", "61a50b972b189f00e2c0a12d", "61a50b972b189f00e2c0a12e", "61a50b972b189f00e2c0a12f", "61a50b972b189f00e2c0a130", "61a50b972b189f00e2c0a131", "61a50b972b189f00e2c0a132", "61a50b972b189f00e2c0a133", "61a50b972b189f00e2c0a134"],
        img: "https://i.imgur.com/vnGEKJE.gif"
    },
    {
        name: "jefes",
        livingInGroup: false,
        habitat:["61a50b972b189f00e2c0a131", "61a50b972b189f00e2c0a133"],
        img: "https://i.imgur.com/ZFLoFDx.jpg"
    },
    {
        name: "esqueletos",
        livingInGroup: false,
        habitat:["61a50b972b189f00e2c0a12a", "61a50b972b189f00e2c0a12b", "61a50b972b189f00e2c0a12c", "61a50b972b189f00e2c0a12d", "61a50b972b189f00e2c0a12e", "61a50b972b189f00e2c0a12f", "61a50b972b189f00e2c0a130", "61a50b972b189f00e2c0a132", "61a50b972b189f00e2c0a134"],
        img: "https://i.imgur.com/ZFLoFDx.jpg"
    },
    {
        name: "golems",
        livingInGroup: false,
        habitat:["61a50b972b189f00e2c0a12b", "61a50b972b189f00e2c0a12d"],
        img: "https://i.imgur.com/ZFLoFDx.jpg"
    },
    {
        name: "insectos",
        livingInGroup: true,
        habitat:["61a50b972b189f00e2c0a12a", "61a50b972b189f00e2c0a12b", "61a50b972b189f00e2c0a12c", "61a50b972b189f00e2c0a12d", "61a50b972b189f00e2c0a12e", "61a50b972b189f00e2c0a12f", "61a50b972b189f00e2c0a130", "61a50b972b189f00e2c0a132", "61a50b972b189f00e2c0a134"],
        img: "https://i.imgur.com/ZFLoFDx.jpg"
    },
    {
        name: "infernales",
        livingInGroup: false,
        habitat:["61a50b972b189f00e2c0a133"],
        img: "https://i.imgur.com/ZFLoFDx.jpg"
    },
    {
        name: "saqueadores",
        livingInGroup: false,
        habitat:["61a50b972b189f00e2c0a12d"],
        img: "https://i.imgur.com/ZFLoFDx.jpg"
    },
];

const familiesArr = families.map((f)=> new Family(f))
 console.log(familiesArr);

mongoose
  .connect("mongodb+srv://jungle:55555@cluster0.jco2x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(async () => {
    const allFamilies = await Family.find();

    if (allFamilies.length) {
        await Family.collection.drop();
        console.log('Drop database')
    }
})
.catch((err) => console.log(`Error deleting data: ${err}`))
.then(async () => {
    await Family.insertMany(familiesArr);
    console.log('DatabaseCreated')
})
.catch((err) => console.log(`Error creating data: ${err}`))
.finally(() => mongoose.disconnect());