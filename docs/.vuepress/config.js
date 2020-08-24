theme = require("./theme.js");
module.exports = {
    themeConfig: theme,
    evergreen:true,
    extraWatchFiles: [
        '.vuepress/theme.js'
    ],
    dest: "./public"
}