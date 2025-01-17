import { Router } from "express";
import { Climb } from "../../../models/Climb.js";
import { Difficulty_YDS } from '../../../models/Difficulty_YDS.js'
import { Climb_Comment } from '../../../models/Climb_Comment.js'
import { responseError } from "../../util.js";
export const climbRouter = Router();

climbRouter.get("/:id", async (req, res) => {
    try {
        let u = await Climb.findByPk(req.params.id, {include: [Climb_Comment, Difficulty_YDS]});
        u ? res.status(200).json(u.get({plain: true})) : responseNotFound(res, req.params.id);
      } catch (err) {
        responseError(res, err);
      }
})

climbRouter.get("/", async (req, res) => {
  try {
      let u = await Climb.findAll({include: [Climb_Comment, Difficulty_YDS]});
      let r = u.map(i => i.get({plain:true}))
      res.status(200).json(r);
    } catch (err) {
      responseError(res, err);
    }
})