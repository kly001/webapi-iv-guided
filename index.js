require("dotenv").config()
const server = require('./api/server.js');

// console.log(process.env)

const PORT = process.env.PORT || 4000


server.listen(PORT, () => {
  console.log(`\n*** Server Running on Port ${PORT} ***\n`);
});


//When running locally, the IP is taken care of by localhost
//and we can hardcode any port (over 3000).

//When deploying with heroku,
// * it will assign an IP address
// * we can't hardcode a port