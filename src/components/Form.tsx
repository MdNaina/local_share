import axios from 'axios'
import { FC, useRef } from 'react'
import uploadImg from '../assets/icons/upload.png'

interface Props {
  setFiles: ISetFiles
}

export const Form: FC<Props> = ({ setFiles }) => {

  const uploadfile = useRef<HTMLInputElement>(null)

  const upload = async () => {
    const formData = new FormData();
    let file = uploadfile.current?.files?.[0]
    if (file != undefined) {
      formData.append('file', file)
      let response = await axios({
        method: "post",
        url: "http://localhost:4500/uploadFile",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response)
    }
    else {
      console.log(file)
    }
  }

  return (
    <form className="input-group">
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
        type="button"
        id="inputGroupFileAddon04"
        onClick={() => upload()}
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


