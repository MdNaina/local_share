import { FC, useState } from 'react'
import { File } from './File'

interface Props {
  files: IFileObject[],
  setFiles: ISetFiles,
}

export const FileList: FC<Props> = ({ files, setFiles }) => {

  return (
    <div className="mt-5">
      {files.map(data => {
        return (
          <File file={data} key={data.id} />
        )
      })}
    </div>
  )
}
