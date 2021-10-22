import { useState, useEffect } from 'react';
import { Form } from './components/Form'
import { FileList } from './components/FileList'
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://localhost:4500/getfiles').then(response => {
      console.log(response)
      setFiles(response.data)
    })
  }, [])

  const [files, setFiles] = useState<IFileObject[] | any>([])

  return (
    <div className="container">
      <header>
        <h1 className="text-center">Hello World</h1>
      </header>
      <div className="row">
        <div className="col-lg-5 col-md-10 m-auto">
          <Form setFiles={setFiles} />
          <FileList files={files} setFiles={setFiles} />
        </div>
      </div>
    </div>
  );
}

export default App;
