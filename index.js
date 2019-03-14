"use strict";
const execFile = require("child_process").execFile;
const path = require("path");

module.exports = function() {

    if (process.platform !== "win32") {
        return Promise.reject(new Error("Only Windows systems are supported"));
    }

    return new Promise(function (resolve, reject) {
        execFile(path.join(__dirname, "temper.exe"), null, null, function (err, res) {
            if (err) {
                reject(err);
                return;
            }
            resolve(res);
        });
    });
};
