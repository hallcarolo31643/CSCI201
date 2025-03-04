const ts = require('ts');

const code = ts.compile(`
class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
`);

return code;
