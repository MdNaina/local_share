import axios from 'axios'
import Swal from 'sweetalert2'
import { FC, useState, useRef } from 'react'
import image from '../assets/icons/image.png'
import { DeleteBtn } from '../assets/svgs/Delete'
import { DownloadBtn } from '../assets/svgs/Download'

interface Props {
  file: IFileObject,
  setFiles: ISetFiles,
  ip: string,
}

export const File: FC<Props> = ({ file, setFiles }) => {
  const [isDeleteHover, setDeleteHover] = useState(false)
  const [isDownloadHover, setDownloadHover] = useState(false)

  const fileId = useRef<HTMLInputElement>(null)

  const updateFiles = async () => {
    const response: Object | any = await axios.get('http://localhost:4500/getfiles')
    console.log(response)
    setFiles(response?.data)
  }

  const downloadFile = async () => {
    let response: Blob | any = await axios({
      url: 'http://localhost:4500/uploads/' + file.path, //your url
      method: 'GET',
      responseType: 'blob', // important
    })
    console.log(response)
    const url = window.URL.createObjectURL(new Blob([response?.data], { type: response.headers['content-type'] }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', file.name); //or any other extension
    document.body.appendChild(link);
    link.click();
  }

  const deleteFile = async () => {
    const { value: deleleConfirm } = await Swal.fire({
      icon: 'warning',
      title: 'Delelte',
      text: 'Do you want to delete',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'No',
      confirmButtonColor: '#ef2310',
      cancelButtonColor: '#106def',
    });
    console.log(deleleConfirm)
    if (!deleleConfirm) return
    let id = fileId.current?.value;
    let response = await axios({
      method: 'delete',
      url: 'http://localhost:4500/delete/' + id,
    })
    console.log(response)
    updateFiles();

  }

  return (
    <div className="d-flex align-items-center justify-content-space-between position-relative mx-auto mb-2 px-2" style={Style.container}>
      <input type="hidden" ref={fileId} value={file.id} />
      <img src={image} alt={file.path} style={Style.png} />
      <p className="text-start" style={{ width: "80%", color: 'red', margin: "auto 10px" }}>{file.name}</p>
      <DeleteBtn
        color={isDeleteHover ? "#fff" : "#D41B1B"}
        background={isDeleteHover ? "#D41B1B" : "#fff"}
        onMouseEnter={() => setDeleteHover(true)}
        onMouseLeave={() => setDeleteHover(false)}
        onClickEvent={deleteFile}
      />
      <DownloadBtn
        color={isDownloadHover ? "#fff" : "#0572BB"}
        background={isDownloadHover ? "#0572BB" : "#fff"}
        onMouseEnter={() => setDownloadHover(true)}
        onMouseLeave={() => setDownloadHover(false)}
        onClickEvent={downloadFile}
      />
    </div>
  )
}

const Style: any = {
  container: {
    backgroundColor: "#fff",
    height: '50px',
    borderRadius: '7px',
  },
  png: {
    width: 48
  }

}
