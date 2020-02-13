require('dotenv').config(); // added for Thursday's project
// code away!
const server = require('./server.js');

// added for Thurday's project
const port = process.env.PORT || 5500; 
server.listen(port, () => {
    console.log(`\n *** Server is running on port ${port}! *** \n`);
})

// ORIGINAL
// server.listen(5500, () => {
//     console.log(`\n* Today's server is running on port 5500! *\n`);
// });