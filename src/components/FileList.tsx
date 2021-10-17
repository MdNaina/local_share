import { FC, useState } from 'react'
import { File } from './File'
import { FileObject } from './fileInterface'


export const FileList: FC<{}> = () => {
  const datas: Array<FileObject> = [
    { id: "24241", name: "image1", path: "public/upload/", type: "image/png" }
  ]

  const [files, setFiles] = useState(datas)

  console.log(datas)

  return (
    <div className="mt-5">
      {datas.map(data => {
        return (
          <File name={data.name} path={data.path} type={data.type} />
        )
      })}
    </div>
  )
}
