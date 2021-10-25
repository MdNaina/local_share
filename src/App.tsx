import { useState, useEffect } from 'react';
import { Form } from './components/Form'
import { FileList } from './components/FileList'
import './App.css';
import axios from 'axios';
import { backend_addr } from './config';

function App() {
  useEffect(() => {
    onload();
  }, [])

  const onload = async () => {
    const response = await axios.get(backend_addr + 'getfiles')
    setFiles(response.data)
    const res: any = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data?.['IPv4'])
  }

  console.log(window.location.hostname)

  const [files, setFiles] = useState<IFileObject[] | any>([])
  const [myIP, setIP] = useState('');

  return (
    <>
      <div className="container position relative">
        <header>
          <h1 className="text-center">Local Share</h1>
        </header>
        <div className="row">
          <div className="col-lg-5 col-md-10 m-auto">
            <Form setFiles={setFiles} ip={myIP} />
            <FileList files={files} setFiles={setFiles} ip={myIP} />
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
