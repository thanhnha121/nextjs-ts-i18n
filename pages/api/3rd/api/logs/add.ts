import { NextApiRequest, NextApiResponse } from "next";
import * as _res from "@Helpers/request";
import { sequelize } from "@Database/models";
import { Logs } from "@Database/models/logs";

const logs = sequelize.getRepository(Logs);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req;

    if (
        !body.source ||
        !body.device_id ||
        !body.user_id ||
        !body.os_version ||
        !body.data ||
        !body.type ||
        !body.device_model
    ) {
        return _res.missingParameter(res);
    }

    let strData = "";
    try {
        if (typeof body.data !== "string") strData = JSON.stringify(body.data);
        else strData = body.data;
    } catch (e) {
        // pass
    }

    const tmp = await logs.create({
        source: body.source,
        device_id: body.device_id,
        user_id: body.user_id,
        os_version: body.os_version,
        device_model: body.device_model,
        type: body.type,
        created_at: new Date(),
        data: strData,
    });

    await tmp.save();
    return _res.success(res, tmp);
};
