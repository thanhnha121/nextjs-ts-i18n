const STATUS = {
    SUCCESS: 1,
    ERROR: 0,
};

const ERROR_CODES = {
    UNAUTHORIZED: 0,
    MISSING_PARAMETER: 1,
    NOT_FOUND: 2,
    SERVER_ERROR: 3,
    DATA_EXISTED: 4,
    INVALID_CALL: 5,
    PERMISSION_DENIED: 6,
    UNKNOWN: 7,
    INVALID_ACCOUNT: 8,
    ACTION_ALREADY_TAKEN: 9,
    INVALID_AMOUNT: 10,
    INVALID_DATETIME: 11,
    VOUCHER_EXPIRED: 12,
};

const MESSAGES = {
    UNAUTHORIZED: "Unauthorized!",
    MISSING_PARAMETER: "Missing parameter!",
    NOT_FOUND: "Not found!",
    SERVER_ERROR: "Server error!",
    DATA_EXISTED: "Data exists!",
    SUCCESS: "Success!",
    INVALID_CALL: "Invalid call!",
    PERMISSION_DENIED: "Permission denied!",
    UNKNOWN_ERROR: "Unknown error!",
    INVALID_ACCOUNT: "Invalid account!",
    ACTION_ALREADY_TAKEN: "Action already taken!",
    INVALID_AMOUNT: "Invalid amount!",
    INVALID_DATETIME: "Invalid datetime!",
    VOUCHER_EXPIRED: "Voucher expired!",
};

export { STATUS, ERROR_CODES, MESSAGES };
