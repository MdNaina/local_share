import { FC } from 'react'
import uploadImg from '../assets/icons/upload.png'


export const Form: FC<{}> = () => {
  return (
    <form className="input-group">
      <input
        type="file"
        className="form-control round"
        id="inputGroupFile04"
        aria-describedby="inputGroupFileAddon04"
        aria-label="Browser"
      />
      <button
        className="btn btn-outline-secondary bg-secondary"
        type="button"
        id="inputGroupFileAddon04"
      >
        <img
          src={uploadImg}
          alt=""
          className="img-fluid w-50px"
        />
      </button>
    </form>
  )
}


