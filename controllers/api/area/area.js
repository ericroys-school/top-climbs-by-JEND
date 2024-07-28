import { Router } from "express";
import { Area } from "../../../models/Area.js";
import { Climb } from "../../../models/Climb.js"
import { Location } from "../../../models/Location.js";
import { responseError} from '../../util.js'

export const areaRouter = Router();

areaRouter.get('/', async (req, res) => {

    try{
        let ar = await Area.findAll({
            include: [Climb]
        })
        let areas = ar.map(i => i.get({plain:true}))
        res.status(200).json(areas)
    }catch(err){
        responseError(res, err)
    }
})