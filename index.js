"use strict";
const execFile = require("child_process").execFile;
const path = require("path");

module.exports = function () {
    return new Promise((resolve, reject) => {
            if (process.platform !== "win32") {
                reject(new Error("Only Windows systems are supported"));
            } else {
                execFile(path.join(__dirname, "temper.exe"), null, null, (err, res) => err ? reject(err) : resolve(JSON.parse(res)));
            }
        }
    );
};
