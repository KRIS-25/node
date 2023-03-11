const path = require("path");

// Returns your platform specific separator
console.log(path.sep);

// join method -> which joins a sequence of path segments using the platform specific separator as the limiter
// second thing it does, it returns a normalized resulting path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// To return a absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
