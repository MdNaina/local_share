const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const fileUploader = require('express-fileupload')
const fs = require('fs');
const { response } = require('express');

mongoose.connect('mongodb://127.0.0.1:27017/localShare', { useNewUrlParser: true }, () => {
  console.log('successfully connected to database')
})

const app = express()

app.use(express.static('public'));
app.use(express.json())
app.use(cors());
app.use(fileUploader());

const stringValue = {
  type: String,
  required: true
}

const fileSchema = new mongoose.Schema({
  name: String,
  type: String,
  path: String,
})

const FileModel = mongoose.model('files', fileSchema)


app.get('/', (req, res) => {
  let uploads = './public/uploads/';
  let myFiles = []
  fs.readdir(uploads, (err, files) => {
    files.forEach(file => {
      console.log(file);
      myFiles.push({ name: file, path: 'http://192.168.0.1:4500/public/uploads/' + file })
    })
    console.log(myFiles);
    return res.send({ files: myFiles })
  })
})

app.patch('/update/:id', async (req, res) => {
  let { id } = req.params;
  console.log(req.body);
  try {
    let response = await FileModel.findOneAndUpdate(id, req.body, (err, model) => {
      if (err) {
        console.log(err)
        res.status(500).send(err)
      }
      res.send("file has been updated " + model)
    })
    res.send("file has been updated " + response)
  } catch {
    res.status(404).send({ error: "file not found" })
  }
})

app.delete('/delete/:id', async (req, res) => {
  let { id } = req.params;
  console.log(id)
  try {
    let response = await FileModel.findByIdAndDelete(id)
    res.send("file has been deleted " + response)
  } catch {
    res.status(404).send({ error: "file not found" })
  }

})


app.post('/upload', (req, res) => {
  if (!req.files) {
    return res.status(500).send({ msg: "file is not found " })
  }

  const myFile = req.files['file']
  console.log(myFile)

  // return res.send({ 'file': req.files })

  myFile.mv(`${__dirname}/public/uploads/${myFile.name}`, err => {
    if (err) {
      console.log(err)
      return res.status(500).send({ msg: "Error occurs " })
    }

    console.log(myFile.name)

    let fileModel = new FileModel({ name: myFile.name, type: myFile.mimetype, path: `http://192.168.0.1:4500/uploads/${myFile.name}` })
    console.log(fileModel)
    fileModel.save()
      .then(response => {
        console.log(response)
        res.json(response)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  });
});


app.listen(4500, () => {
  console.log('server is running at port 4500');
})
