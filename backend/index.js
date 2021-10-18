const express = require('express');
const cors = require('cors');
const fileUploader = require('express-fileupload')
const { db } = require('./config/database.config')
const router = require('./router')

db.sync().then(() => {
  console.log('database is successfully connected')
})

const app = express()

app.use(express.static('public'));
app.use(express.json())
app.use(cors());
app.use(fileUploader());
app.use('/', router)


app.listen(4500, () => {
  console.log('server is running at port 4500');
})
