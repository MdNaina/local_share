import { FC, useState } from 'react'
import { File } from './File'

interface Props {
  files: IFileObject[],
  setFiles: ISetFiles,
  ip: string
}

export const FileList: FC<Props> = ({ files, setFiles, ip }) => {

  return (
    <div className="mt-3 " style={{ width: '100%', height: '70vh', overflow: 'auto', scrollbarColor: 'transparent' }}>
      {files.map(data => {
        return (
          <File file={data} key={data.id} setFiles={setFiles} ip={ip} />
        )
      })}
    </div>
  )
}
