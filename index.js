var plist = require('simple-plist');
const path = require('path');
const fs = require('fs');

function replaceWithVar(text, varMap) {
    for(let key in varMap) {
        let varKey = '$' + key + '$';
        while(text.indexOf(varKey) != -1) {
            text = text.replace(varKey, varMap[key]);
        }
    }
    return text;
}
class PlistTemplatePlugin {
    constructor(option) {
        this.option = option;
    }
    apply(compiler) {
        const hooks = compiler.hooks;
        if (!this.option || !this.option.output || !this.option.output.path || !this.option.output.filename) {
            throw new Error("the output can not be empty");
        } 
        const self = this;
        let templateFilePath = this.option.template;
        templateFilePath = path.resolve(compiler.context, templateFilePath);
        let output = this.option.output;
        console.log(templateFilePath);
        hooks.emit.tapAsync('plist-plugin', (compilation, callback) => {
            plist.readFile(templateFilePath, function(err, data) {
                if (err) {
                  throw new Error("template file is not exist");
                }
                let str = JSON.stringify(data);
                str = replaceWithVar(str, self.option);
                let prepath = `${output.path}/${output.filename}.plist`;
                let abspath = path.join(compiler.context, prepath);
                fs.mkdirSync(path.dirname(abspath),{recursive:true});
                plist.writeFileSync(abspath, JSON.parse(str));
                callback();
              })
        });
    }
}

module.exports = PlistTemplatePlugin;