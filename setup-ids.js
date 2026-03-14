const fs = require('fs');

let fileContent = fs.readFileSync('src/app/core/models/tarot.ts', 'utf8');

// Use regex or string replacement to set ids?
// Better to just map it dynamically in the app when app starts or when array is loaded?
