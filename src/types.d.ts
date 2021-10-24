
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
  user_ip: string;
  name: string;
  mimetype: string;
  path: string;
}

type ISetFiles = (fileObject: IFileObject[]) => void

