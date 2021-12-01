const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const Animal = require("../models/Animal.model");

const animals = [
    {
        name: "aldeano",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3a"],
        img: "https://i.imgur.com/gaSKIfL.png"
    },
    {
        name: "bacalao",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3d"],
        img: "https://i.imgur.com/frlGIbl.gif"
    },
    {
        name: "burro",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3c"],
        img: "https://i.imgur.com/D8oIske.png"
    },
    {
        name: "caballo",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3c"],
        img: "https://i.imgur.com/oY9YTBB.png"
    },
    {
        name: "calamar",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3d"],
        img: "https://i.imgur.com/palz7lq.gif"
    },
    {
        name: "cerdo",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3b", "61a50b7140f2bc53f54d7b3c"],
        img: "https://i.imgur.com/2fpiyWI.png"
    },
    {
        name: "champiñaca",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3b", "61a50b7140f2bc53f54d7b3e"],
        img: "https://i.imgur.com/z7UWZbo.png"
    },
    {
        name: "conejo",
        isBad: false,
        family: [],
        img: "https://i.imgur.com/CrJltFg.png"
    },
    {
        name: "gallina",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3b"],
        img: "https://i.imgur.com/djJm7T3.png"
    },
    {
        name: "gato",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3c"],
        img: "https://i.imgur.com/srLTAyd.png"
    },
    {
        name: "loro",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3c"],
        img: "https://i.imgur.com/DemcRJt.png"
    },
    {
        name: "murciélago",
        isBad: false,
        family: [],
        img: "https://i.imgur.com/kAWCnk4.gif"
    },
    {
        name: "ocelote",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3c"],
        img: "https://i.imgur.com/F7UqhBp.png"
    },
    {
        name: "oveja",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3b"],
        img: "https://i.imgur.com/yFHwRz4.png"
    },
    {
        name: "pez tropical",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3d"],
        img: "https://i.imgur.com/R17cobB.png"
    },
    {
        name: "salmón",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3d"],
        img: "https://i.imgur.com/WnxZ6RQ.gif"
    },
    {
        name: "tortuga",
        isBad: false,
        family: [],
        img: "https://i.imgur.com/MpE8p7s.png"
    },
    {
        name: "vaca",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3b"],
        img: "https://i.imgur.com/gEuM8RW.png"
    },
    {
        name: "vendedor ambulante",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3a"],
        img: "https://i.imgur.com/d7mPEyp.png"
    },
    {
        name: "zorro",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3c"],
        img: "https://i.imgur.com/lJyiQzF.png"
    },
    {
        name: "ajolote",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3d"],
        img: "https://i.imgur.com/fooD58I.png"
    },
    {
        name: "caballo esqueleto",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b40"],
        img: "https://i.imgur.com/MAVCylQ.png"
    },
    {
        name: "calamar brillante",
        isBad: false,
        family: [],
        img: "https://i.imgur.com/gMJfIi9.gif"
    },
    {
        name: "gólem de nieve",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b41"],
        img: "https://i.imgur.com/CoBz0n4.png"
    },
    {
        name: "lavagante",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3e", "61a50b7140f2bc53f54d7b43"],
        img: "https://i.imgur.com/DSY8E5U.gif"
    },
    {
        name: "mula",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3c"],
        img: "https://i.imgur.com/mLcROSi.png"
    },
    {
        name: "oso polar (bebé)",
        isBad: false,
        family: [],
        img: "https://i.imgur.com/m7D7lNt.png"
    },
    {
        name: "piglin (bebé)",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b43"],
        img: "https://i.imgur.com/v3fB2zJ.png"
    },
    {
        name: "abeja",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b42"],
        img: "https://i.imgur.com/E1Wgj5l.gif"
    },
    {
        name: "araña",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b42"],
        img: "https://i.imgur.com/FWmOT4O.png"
    },
    {
        name: "araña de cueva",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b42"],
        img: "https://i.imgur.com/LhmZrDS.png"
    },
    {
        name: "cabra",
        isBad: false,
        family: ["61a3b32ed9663f6a783d203f"],
        img: "https://i.imgur.com/QvkjLtp.png"
    },
    {
        name: "delfín",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3d"],
        img: "https://i.imgur.com/5sGDyfw.gif"
    },
    {
        name: "enderman",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b3e"],
        img: "https://i.imgur.com/1BigOLk.png"
    },
    {
        name: "gólem de hierro",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b41"],
        img: "https://i.imgur.com/MvxUA5g.gif"
    },
    {
        name: "llama",
        isBad: false,
        family: [],
        img: "https://i.imgur.com/An8oMSr.gif"
    },
    {
        name: "lobo",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3c"],
        img: "https://i.imgur.com/xNiCoiP.png"
    },
    {
        name: "oso polar",
        isBad: false,
        family: [],
        img: "https://i.imgur.com/uSJomGM.png"
    },
    {
        name: "panda",
        isBad: false,
        family: [],
        img: "https://i.imgur.com/ya6Uy0W.png"
    },
    {
        name: "pez globo",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b3d"],
        img: "https://i.imgur.com/BTyRxEf.png"
    },
    {
        name: "piglin",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b43"],
        img: "https://i.imgur.com/YM7GLFb.png"
    },
    {
        name: "piglin Zombificado",
        isBad: false,
        family: ["61a50b7140f2bc53f54d7b39", "61a50b7140f2bc53f54d7b43"],
        img: "https://i.imgur.com/54dq9md.png"
    },
    {
        name: "ahogado",
        isBad: true,
        family: ["61a24b9ca499e5843abeb7b7"],
        img: "https://i.imgur.com/WCMoKff.png"
    },
    {
        name: "aldeano zombi",
        isBad: true,
        family: ["61a24b9ca499e5843abeb7b7"],
        img: "https://i.imgur.com/0YDI7WH.png"
    },
    {
        name: "ánima",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b3e"],
        img: "https://i.imgur.com/9acbBxt.gif"
    },
    {
        name: "blaze",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b3e", "61a50b7140f2bc53f54d7b43"],
        img: "https://i.imgur.com/6HhkeaA.gif"
    },
    {
        name: "bruja",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b3a"],
        img: "https://i.imgur.com/w2dcGUy.png"
    },
    {
        name: "creeper",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b3e"],
        img: "https://i.imgur.com/IbFymh5.png"
    },
    {
        name: "cubo de magma",
        isBad: true,
        family: ["61a24b9ca499e5843abeb7b9", "61a50b7140f2bc53f54d7b43"],
        img: "https://i.imgur.com/InUxUkE.png"
    },
    {
        name: "devastador",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b44"],
        img: "https://i.imgur.com/S2i7FcE.png"
    },
    {
        name: "endermite",
        isBad: true,
        family: ["61a24b9ca499e5843abeb7b9"],
        img: "https://i.imgur.com/5L9ysid.gif"
    },
    {
        name: "esqueleto",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b40"],
        img: "https://i.imgur.com/MYiJqNr.png"
    },
    {
        name: "esqueleto glacial",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b40"],
        img: "https://i.imgur.com/adZoK1U.png"
    },
    {
        name: "esqueleto wither",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b40", "61a50b7140f2bc53f54d7b43"],
        img: "https://i.imgur.com/reKegcc.png"
    },
    {
        name: "fantasma",
        isBad: true,
        family: ["61a24b9ca499e5843abeb7b9"],
        img: "https://i.imgur.com/PQSrIo9.gif"
    },
    {
        name: "ghast",
        isBad: true,
        family: ["61a24b9ca499e5843abeb7b9", "61a50b7140f2bc53f54d7b43"],
        img: "https://i.imgur.com/HkH3rgq.gif"
    },
    {
        name: "guardián",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b3d"],
        img: "https://i.imgur.com/gQD80Ww.gif"
    },
    {
        name: "guardián anciano",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b3d"],
        img: "https://i.imgur.com/dKeSv04.gif"
    },
    {
        name: "hoglin",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b3c", "61a50b7140f2bc53f54d7b43"],
        img: "https://i.imgur.com/q5PIzuh.png"
    },
    {
        name: "invocador",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b3a"],
        img: "https://i.imgur.com/v10e0CQ.png"
    },
    {
        name: "jinete avícola",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b39"],
        img: "https://i.imgur.com/ctQIaRa.gif"
    },
    {
        name: "jinete arácnido",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b42"],
        img: "https://i.imgur.com/mzUQFjl.png"
    },
    {
        name: "jinete devastador",
        isBad: true,
        family: ["61a3b32ed9663f6a783d203e", "61a50b7140f2bc53f54d7b44"],
        img: "https://i.imgur.com/8x1PwmJ.png"
    },
    {
        name: "jinete esquelético",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b40"],
        img: "https://i.imgur.com/MGLw7Gx.png"
    },
    {
        name: "lepisma",
        isBad: true,
        family: [],
        img: "https://i.imgur.com/JJjmLjn.gif"
    },
    {
        name: "piglin bruto",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b43"],
        img: "https://i.imgur.com/x7cs3je.png"
    },
    {
        name: "saqueador",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b3a", "61a50b7140f2bc53f54d7b44"],
        img: "https://i.imgur.com/JAWAtxg.png"
    },
    {
        name: "shulker",
        isBad: true,
        family: ["61a24b9ca499e5843abeb7b9"],
        img: "https://i.imgur.com/uRNl1sv.png"
    },
    {
        name: "slime",
        isBad: true,
        family: ["61a24b9ca499e5843abeb7b9"],
        img: "https://i.imgur.com/8ou5tOr.png"
    },
    {
        name: "vindicador",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b3a"],
        img: "https://i.imgur.com/5dqx0Dx.png"
    },
    {
        name: "zoglin",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b39", "61a50b7140f2bc53f54d7b43"],
        img: "https://i.imgur.com/Y2EKA8h.gif"
    },
    {
        name: "zombi",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b39"],
        img: "https://i.imgur.com/AW8L5ar.png"
    },
    {
        name: "zombi desértico",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b39"],
        img: "https://i.imgur.com/FJ332wk.png"
    },
    {
        name: "dragón del End",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b3f"],
        img: "https://i.imgur.com/I6kf34a.gif"
    },
    {
        name: "wither",
        isBad: true,
        family: ["61a50b7140f2bc53f54d7b3f", "61a50b7140f2bc53f54d7b40"],
        img: "https://i.imgur.com/Use59PO.gif"
    },

];

const animalsArr = animals.map((a)=> new Animal(a))
 console.log(animalsArr);

mongoose
  .connect("mongodb+srv://jungle:55555@cluster0.jco2x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(async () => {
    const allAnimals = await Animal.find();

    if (allAnimals.length) {
        await Animal.collection.drop();
        console.log('Drop database')
    }
})
.catch((err) => console.log(`Error deleting data: ${err}`))
.then(async () => {
    await Animal.insertMany(animalsArr);
    console.log('DatabaseCreated')
})
.catch((err) => console.log(`Error creating data: ${err}`))
.finally(() => mongoose.disconnect());
