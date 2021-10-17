
export interface FileObject {
  id: string;
  name: string;
  type: string;
  path: string;
}

export interface FileProp {
  name: string;
  type: string;
  path: string;
}

export interface FileProps {
  file: FileProp,
  fileList: Array<FileObject>
  setFileList: Object
}
