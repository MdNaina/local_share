const { v4 } = require('uuid');
const { FileModel } = require('../model')
const { unlink } = require('fs');
const { throws } = require('assert');

const getAllFiles = async (req, res) => {
  try {
    let records = await FileModel.findAll({ where: {} })
    if (!records)
      return res.json({ error: "No Records has found" })
    return res.json(records)
  } catch (e) {
    return res.json({ error: e })
  }
}

const deleteFile = async (req, res) => {
  let { id } = req.params
  try {
    let record = await FileModel.findOne({ where: { id } })
    if (!record)
      return res.json({ error: "No Records has found" })

    console.log(record.path)
    const upload_dir = '/home/mdnaina/project/react_project/my-share/backend/public/uploads/'
    unlink(upload_dir + record.path, async (err) => {
      if (err) throw err;
      let deletedFile = record.destroy()
      return res.json({ msg: "record deleted successfully", deletedFile })
    })
  } catch (e) {
    return res.json({ error: e })
  }
}

const uploadFile = async (req, res) => {
  if (!req.files)
    return res.status(500).json({ error: "file is not found" })

  const { ip } = req.body;

  console.log(req)

  let id = v4();
  let { name, mimetype, size, mv } = req.files['file'];
  mv(`/home/mdnaina/project/react_project/my-share/backend/public/uploads/${id}-${name}`, async (err) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: "uploads file failed, Please try again", err })
    }
    try {
      let record = await FileModel.create({ id, user_ip: ip, name: name, mimetype: mimetype, size: size, path: `${id}-${name}` })
      // console.log(record)
      return res.json(record)
    } catch (e) {
      return res.json({ error: "can't add the file to database", err: e })
    }
  });

}

module.exports = {
  getAllFiles,
  uploadFile,
  deleteFile
}
