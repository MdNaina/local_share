import { FC, useState } from 'react'
import { File } from './File'


export const FileList: FC<{}> = () => {
  const datas: Array<FileObject> = [
    { id: "24241", name: "image1", path: "public/upload/", type: "image/png" }
  ]

  const [files, setFiles] = useState<Array<FileObject>>(datas)

  console.log(datas)

  return (
    <div className="mt-5">
      {datas.map(data => {
        return (
          <File file={data} fileList={files} setFileList={setFiles} />
        )
      })}
    </div>
  )
}
