// const fs = require("fs");
// const util = require("util");

// const readdir = util.promisify(fs.readdir);
// const readFile = util.promisify(fs.readFile);

// let commandsAll = {};

// async function xyz() {
//   let path = "./commands/public/";
//   let filenames = await readdir(path);
//   filenames.forEach((file) => {
//     if (file.endsWith(".js")) {
//       let { command } = require(path + file);
//       let cmdinfo = command();
//       // console.log(cmdinfo.cmd);
//       commandsAll[cmdinfo.cmd] = cmdinfo.handler;
//     }
//   });

//   path = "./commands/group/members/";
//   filenames = await readdir(path);
//   filenames.forEach((file) => {
//     if (file.endsWith(".js")) {
//       let { command } = require(path + file);
//       let cmdinfo = command();
//       // console.log(cmdinfo.cmd);
//       commandsAll[cmdinfo.cmd] = cmdinfo.handler;
//     }
//   });

//   path = "./commands/group/admins/";
//   filenames = await readdir(path);
//   filenames.forEach((file) => {
//     if (file.endsWith(".js")) {
//       let { command } = require(path + file);
//       let cmdinfo = command();
//       // console.log(cmdinfo.cmd);
//       commandsAll[cmdinfo.cmd] = cmdinfo.handler;
//     }
//   });
//   console.log(commandsAll);
//   // commandsAll["help"]();
// }
// xyz();

require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.uri;

// console.log(uri);

const mdClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
mdClient.connect();

let collection2 = mdClient.db("bot").collection("auth");
//(chatid,{})
// let x = collection2.updateOne(
//   { _id: 1 },
//   { $set: { sessionAuth: "sessionDataAuth" } }
// );

// console.log(x);
// x.then((res) => {
//   console.log(res);
//   if (res.matchedCount) {
//     console.log("UPDATED");
//   } else {
//     collection2.insertOne({ _id: 1, sessionAuth: "sessionDataAuth" });
//     console.log("INSERTED");
//   }
// });

//delete auth
let x = collection2.deleteOne({ _id: 1 });

console.log(x);
x.then((res) => {
  console.log(res);
});
