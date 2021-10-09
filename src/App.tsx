import { Form } from './components/Form'
import { FileList } from './components/FileList'

import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="text-center">Hello World</h1>
      </header>
      <div className="row">
        <div className="col-lg-5 col-md-10 m-auto">
          <Form />
          <FileList />
        </div>
      </div>
    </div>
  );
}

export default App;
