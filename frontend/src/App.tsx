
import { Fragment } from 'react';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import "./index.css"
function App() {

  return (
    <Fragment>
      <Routes/>
      <ToastContainer/>
    </Fragment>
    
  )
}

export default App
