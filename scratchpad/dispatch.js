var platform = process.platform;
var childProcess = require("child_process");
var configurations = require("../configurations/configurations.json");
if (platform == "win32") {
    childProcess.execSync(`start ${configurations.terminal_name} /K run_n.bat`);
} else {
    console.log(process.platform);
}
process.exit(0);
