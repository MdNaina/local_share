import { useState, useEffect } from 'react';
import { Form } from './components/Form'
import { FileList } from './components/FileList'
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
  }, [])

  const onload = async () => {
    const response = await axios.get('http://localhost:4500/getfiles')
    setFiles(response.data)
    const res: any = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data?.['IPv4'])
  }

  const [files, setFiles] = useState<IFileObject[] | any>([])
  const [myIP, setIP] = useState('');

  return (
    <div className="container">
      <header>
        <h1 className="text-center">Hello World</h1>
      </header>
      <div className="row">
        <div className="col-lg-5 col-md-10 m-auto">
          <Form setFiles={setFiles} ip={myIP} />
          <FileList files={files} setFiles={setFiles} ip={myIP} />
        </div>
      </div>
    </div>
  );
}

export default App;
