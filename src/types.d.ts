
interface IBtnProps {
  color: string;
  background: string;
  onMouseEnter: IVoid;
  onMouseLeave: IVoid;
  onClickEvent?: IVoid;
  link?: string;
}

type IVoid = () => void;

interface IFileObject {
  id: string;
  name: string;
  type: string;
  path: string;
}

type ISetFiles = (fileObject: IFileObject[]) => void

