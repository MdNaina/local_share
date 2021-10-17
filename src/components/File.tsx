import { FC, useState } from 'react'
import image from '../assets/icons/image.png'
import { DeleteBtn } from '../assets/svgs/Delete'
import { DownloadBtn } from '../assets/svgs/Download'

interface FileProps {
  name: string;
  type: string;
  path: string;
}

export const File: FC<FileProps> = ({ name, type, path }) => {
  const [isDeleteHover, setDeleteHover] = useState(false)
  const [isDownloadHover, setDownloadHover] = useState(false)
  return (
    <div className="d-flex align-items-center  justify-content-space-between position-relative mx-auto" style={Style.container}>
      <img src={image} alt={path} style={Style.png} />
      <p className="text-start" style={{ width: "80%", color: 'red', margin: "auto 10px" }}>{name}</p>
      <DeleteBtn
        color={isDeleteHover ? "#fff" : "#D41B1B"}
        background={isDeleteHover ? "#D41B1B" : "#fff"}
        onMouseEnter={() => setDeleteHover(true)}
        onMouseLeave={() => setDeleteHover(false)}
        onClickEvent={() => console.log('trash')}
      />
      <DownloadBtn
        color={isDownloadHover ? "#fff" : "#0572BB"}
        background={isDownloadHover ? "#0572BB" : "#fff"}
        onMouseEnter={() => setDownloadHover(true)}
        onMouseLeave={() => setDownloadHover(false)}
        onClickEvent={() => console.log('download')}
      />
    </div>
  )
}

const Style: any = {
  container: {
    backgroundColor: "#fff",
    height: '50px'
  },
  png: {
    width: 48
  }

}
