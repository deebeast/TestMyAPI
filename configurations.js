var base_config_path = "./configurations/"
var configurations = require("./configurations/configurations.json")
var fs = require('fs');
var file_names = ['num_of_users', 'progressive_load', 'progressive_load_timeout', 'terminal_name'];
var config_value_helper = function (params) {
    return params == "terminal_name" ? configurations[params] : configurations.load_parameters[params];
};
file_names.forEach(file_name => {
    fs.unlink(`${base_config_path}${file_name}`, function (err) {
        if (err) console.log(`${file_name} File does not exist!`);;
        console.log(`${file_name} File deleted!`);
    });
    fs.writeFile(`${base_config_path}${file_name}`, config_value_helper(file_name), function (err) {
        if (err) throw err;
        console.log(`${file_name} Saved!`);
    });
});