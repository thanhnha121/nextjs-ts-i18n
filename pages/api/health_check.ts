import { NextApiRequest, NextApiResponse } from "next";

const fs = require("fs");

async function readFile(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf8", (err: Error, data: string) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let data: string;
    try {
        data = await readFile(`version.txt`);
        if (data) data = data.trim();
    } catch (e) {
        return res.json({
            great: "Hi!",
            i_am: "Webapp",
            and_now_i_am: e.message,
        });
    }

    return res.json({
        great: "Hi!",
        i_am: "Webapp",
        and_now_i_am: data,
    });
};
