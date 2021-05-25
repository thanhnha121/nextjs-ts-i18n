import { Sequelize } from "sequelize-typescript";

import { Logs } from "./logs";

export const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
    models: [Logs],
    logging: false,
});
