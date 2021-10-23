import axios from 'axios'
import { FC, FormEvent, useRef, useState } from 'react'
import uploadImg from '../assets/icons/upload.png'

interface Props {
  setFiles: ISetFiles
  ip: string
}

export const Form: FC<Props> = ({ setFiles, ip }) => {

  const uploadfile = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [fileInput, setFileInput] = useState('');

  const updateFiles = async () => {
    const response: Object | any = await axios.get('http://localhost:4500/getfiles')
    console.log(response)
    setFiles(response?.data)
  }


  const upload = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData();
    let file = uploadfile.current?.files?.[0]
    formData.set('ip', ip)
    if (file != undefined) {
      formData.append('file', file)
      let response = await axios({
        method: "post",
        url: "http://localhost:4500/uploadFile",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response)
      updateFiles();
      console.log(fileInput)
      formRef.current?.reset();
    }
    else {
      console.log(file)
    }
  }
  return (
    <form className="input-group mt-2" ref={formRef} onSubmit={(event) => upload(event)}>
      <input
        type="file"
        className="form-control round"
        id="inputGroupFile04"
        aria-describedby="inputGroupFileAddon04"
        aria-label="Browser"
        ref={uploadfile}
      />
      <button
        className="btn btn-outline-secondary bg-secondary"
        type="submit"
        id="inputGroupFileAddon04"
      >
        <img
          src={uploadImg}
          alt=""
          className="img-fluid w-50px"
        />
      </button>
    </form>
  )
}


