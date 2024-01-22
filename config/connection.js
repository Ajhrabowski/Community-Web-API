const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/community-webdb';

connect(connectionString)
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))
module.exports = connection;
