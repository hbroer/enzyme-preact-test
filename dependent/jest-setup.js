const enzyme = require("enzyme");
const adapter = require("enzyme-adapter-preact-pure");

enzyme.configure({adapter: new adapter.default});
