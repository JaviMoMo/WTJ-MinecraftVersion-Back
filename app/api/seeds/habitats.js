const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Habitat = require("../models/Habitat.model");

const habitats = [
    {
        name: "jungla",
        location: {
            x: -63.5185396,
            y: -4.479925
        },
        img: "https://i.imgur.com/k0uAkgd.png"
    },
    {
        name: "desierto",
        location: {
            x: 6.8154402,
            y: 21.2702745
        },
        img: "https://i.imgur.com/9Rrb7jM.png"
    },
    {
        name: "oceano",
        location: {
            x: -157.221931,
            y: 0.853184
        },
        img: "https://i.imgur.com/kRoVE6D.png"
    },
    {
        name: "pradera",
        location: {
            x: -103.973546,
            y: 42.588401
        },
        img: "https://i.imgur.com/33SCgER.png"
    },
    {
        name: "nieve",
        location: {
            x: 99.99915242195726,
            y: 59.99993948260337
        },
        img: "https://i.imgur.com/Q8xCZ7C.png"
    },
    {
        name: "montañas",
        location: {
            x: 86.925017,
            y: 27.9882393
        },
        img: "https://i.imgur.com/AbdWoGZ.png"
    },
    {
        name: "bosque",
        location: {
            x: -7.795333,
            y: 42.79166
        },
        img: "https://i.imgur.com/fsFPiTD.png"
    },
    {
        name: "end",
        location: {
            x: 0,
            y: 0
        },
        img: "https://i.imgur.com/S4M8UNQ.png"
    },
    {
        name: "cuevas",
        location: {
            x: 110.2669522,
            y: 25.3121259
        },
        img: "https://i.imgur.com/cEnspTn.jpg"
    },
    {
        name: "nether",
        location: {
            x: 6.66,
            y: 6.66
        },
        img: "https://i.imgur.com/VTiv0wK.png"
    },
    {
        name: "pantano",
        location: {
            x: -89.919736,
            y: 29.833035
        },
        img: "https://i.imgur.com/BH1VFJc.png"
    },
];

const habitatsArr = habitats.map(h => new Habitat(h))

mongoose
    .connect("mongodb+srv://jungle:55555@cluster0.jco2x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {

        const allHabitats = await Habitat.find();

        if (allHabitats.length) {
            await Habitat.collection.drop();
            console.log('Drop database')
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        await Habitat.insertMany(habitatsArr);
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))

    .finally(() => mongoose.disconnect());