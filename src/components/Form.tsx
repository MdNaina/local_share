import axios from 'axios'
import { FC, FormEvent, useRef, useState } from 'react'
import uploadImg from '../assets/icons/upload.png'
import { backend_addr } from '../config'

interface Props {
  setFiles: ISetFiles
  ip: string
}

export const Form: FC<Props> = ({ setFiles, ip }) => {

  const uploadfile = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [fileInput, setFileInput] = useState('');
  const [progressed, setProgressed] = useState('0')

  const updateFiles = async () => {
    const response: Object | any = await axios.get(backend_addr + 'getfiles')
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
        url: backend_addr + "uploadFile",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: ({ total, loaded }) => {
          let percentage = (loaded * 100) / total;
          setProgressed(percentage.toFixed(1))
        }
      });
      updateFiles();
      formRef.current?.reset();
      setProgressed('0')
    }
    else {
      console.log(file)
    }
  }
  return (
    <>
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
      {progressed != '0' ?
        <div className="progressBar">
          <div className="progress mt-2 h-10">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: progressed + "%" }}></div>
          </div>
          <p style={{ textAlign: 'center', margin: 0 }}>Uploading {progressed}%</p>
        </div> : null
      }
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mt-2 mx-auto" onClick={updateFiles}>Refresh</button>
      </div>
    </>
  )
}


