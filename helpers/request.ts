import * as httpConst from "@Constants/http_response";
import { NextApiResponse } from "next";

function missingParameter(res: NextApiResponse) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const rs = JSON.stringify({
        status: httpConst.STATUS.ERROR,
        errorCode: httpConst.ERROR_CODES.MISSING_PARAMETER,
        message: httpConst.MESSAGES.MISSING_PARAMETER,
    });

    res.end(rs);
}

function unauthorize(res: NextApiResponse) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const rs = JSON.stringify({
        status: httpConst.STATUS.ERROR,
        errorCode: httpConst.ERROR_CODES.UNAUTHORIZED,
        message: httpConst.MESSAGES.UNAUTHORIZED,
    });

    res.end(rs);
}

function notFound(res: NextApiResponse) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const rs = JSON.stringify({
        status: httpConst.STATUS.ERROR,
        errorCode: httpConst.ERROR_CODES.NOT_FOUND,
        message: httpConst.MESSAGES.NOT_FOUND,
    });

    res.end(rs);
}

function dataExisted(res: NextApiResponse, data: object | undefined) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const rs = JSON.stringify({
        status: httpConst.STATUS.ERROR,
        errorCode: httpConst.ERROR_CODES.DATA_EXISTED,
        message: httpConst.MESSAGES.DATA_EXISTED,
        data,
    });

    res.end(rs);
}

function invalidCall(res: NextApiResponse, message: string) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const rs = JSON.stringify({
        status: httpConst.STATUS.ERROR,
        errorCode: httpConst.ERROR_CODES.INVALID_CALL,
        message: message || httpConst.MESSAGES.INVALID_CALL,
    });

    res.end(rs);
}

function permissionDenied(res: NextApiResponse) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const rs = JSON.stringify({
        status: httpConst.STATUS.ERROR,
        errorCode: httpConst.ERROR_CODES.PERMISSION_DENIED,
        message: httpConst.MESSAGES.PERMISSION_DENIED,
    });

    res.end(rs);
}

function serverError(res: NextApiResponse, e: Error) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const rs = JSON.stringify({
        status: httpConst.STATUS.ERROR,
        errorCode: httpConst.ERROR_CODES.SERVER_ERROR,
        message: e?.message,
    });

    res.end(rs);
}

function unknownError(res: NextApiResponse, message: string) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const rs = JSON.stringify({
        status: httpConst.STATUS.ERROR,
        errorCode: httpConst.ERROR_CODES.UNKNOWN,
        message: message || httpConst.MESSAGES.UNKNOWN_ERROR,
    });

    res.end(rs);
}

function actionAlreadyTaken(res: NextApiResponse, message: string) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const rs = JSON.stringify({
        status: httpConst.STATUS.ERROR,
        errorCode: httpConst.ERROR_CODES.ACTION_ALREADY_TAKEN,
        message: message || httpConst.MESSAGES.ACTION_ALREADY_TAKEN,
    });

    res.end(rs);
}

function invalidAmount(res: NextApiResponse, message: string) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const rs = JSON.stringify({
        status: httpConst.STATUS.ERROR,
        errorCode: httpConst.ERROR_CODES.INVALID_AMOUNT,
        message: message || httpConst.MESSAGES.INVALID_AMOUNT,
    });

    res.end(rs);
}

function invalidDatetime(res: NextApiResponse, message: string) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const rs = JSON.stringify({
        status: httpConst.STATUS.ERROR,
        errorCode: httpConst.ERROR_CODES.INVALID_DATETIME,
        message: message || httpConst.MESSAGES.INVALID_DATETIME,
    });

    res.end(rs);
}

function success(res: NextApiResponse, data: object | undefined) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    const rs = JSON.stringify({
        status: httpConst.STATUS.SUCCESS,
        message: httpConst.MESSAGES.SUCCESS,
        data,
    });

    res.end(rs);
}

export {
    missingParameter,
    notFound,
    serverError,
    success,
    unauthorize,
    invalidCall,
    dataExisted,
    permissionDenied,
    unknownError,
    actionAlreadyTaken,
    invalidAmount,
    invalidDatetime,
};
