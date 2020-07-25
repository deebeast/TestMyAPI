var base_config_path = "./configurations/"
var configurations = require(`${base_config_path}configurations.json`)
var fs = require('fs');
var file_names = ['num_of_users', 'progressive_load', 'progressive_load_timeout', 'terminal_name'];

file_names.forEach(file_name => {
    fs.unlink(`${base_config_path}${file_name}`, function (err) {
        if (err) console.log(`${file_name} File does not exist!`);;
        console.log(`${file_name} File deleted!`);
    });
    fs.writeFile(`${base_config_path}${file_name}`, configurations[file_name], function (err) {
        if (err) throw err;
        console.log(`${file_name} Saved!`);
    });
});