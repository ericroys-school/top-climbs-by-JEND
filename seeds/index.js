import { dbConnect } from "../config/connection.js";
import { Area } from "../models/Area.js";
import { Difficulty_YDS } from "../models/Difficulty_YDS.js";
import { Location } from "../models/Location.js";
import { readFile } from "node:fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

//force sync of the data model
await dbConnect.sync({ force: true });

//populate demo data in the tables

Location.bulkCreate(JSON.parse(await readFile(__dirname + "/location.json")));
Difficulty_YDS.bulkCreate(
  JSON.parse(await readFile(__dirname + "/difficulty_yds.json"))
);
Area.bulkCreate(JSON.parse(await readFile(__dirname + "/area.json")));
