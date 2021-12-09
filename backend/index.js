const express = require('express');
const cors = require('cors');
const fileUploader = require('express-fileupload')
const { db } = require('./config/database.config')
const router = require('./router')

db.sync().then(() => {
  console.log('database is successfully connected')
})
console.log("root path", __dirname)

const app = express()

const corsOptions = {
  origin: '*',
  credentials: false,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}

app.use(express.json())
app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(fileUploader());
app.use('/', router)


app.listen(4500, () => {
  console.log('server is running at port 4500');
})
