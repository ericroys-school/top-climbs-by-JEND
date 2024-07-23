import { Model, DataTypes, UUIDV4 } from "sequelize";
import { dbConnect } from "../config/connection.js";

export class Climb extends Model {}

Climb.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    area_id: {
      type: DataTypes.UUID,
      references: {
        model: "area",
        key: "id",
      },
    },
    difficulty_id: {
      type: DataTypes.UUID,
      references: {
        model: "difficulty_yds",
        key: "id",
      },
    },
    length: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    coordinates: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dbConnect,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "climb",
  }
);
