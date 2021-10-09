import { FC } from 'react'
import { File } from './File'


export const FileList: FC<{}> = () => {

  interface FileObject {
    id: string;
    name: string;
    type: string;
    path: string;
  }


  const datas: Array<FileObject> = [
    { id: "24241", name: "image1", path: "public/upload/", type: "image/png" }
  ]

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
