var childProcess = require("child_process");
childProcess.execSync("start cmd.exe /K node post_jwt.js");
process.exit(0)
