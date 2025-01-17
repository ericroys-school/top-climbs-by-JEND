import { Model, DataTypes, UUIDV4 } from "sequelize";
import { dbConnect } from "../config/connection.js";

export class Activity_Comment extends Model {}

Activity_Comment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    climb_id: {
      type: DataTypes.UUID,
      references: {
        model: "climb",
        key: "id",
      },
    },

    activity_id: {
      type: DataTypes.UUID,
      references: {
        model: "climb_activity",
        key: "id",
      },
    },
  },
  {
    sequelize: dbConnect,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "activity_comment",
  }
);
