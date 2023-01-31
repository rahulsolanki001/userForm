import './App.css';
import Form from './Components/Form';
import ImageContainer from './Components/ImageContainer';
import AllForms from './Components/AllForms';
import {
  HashRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <div className='container'>
            <ImageContainer/>
            <Form/>
          </div>
        }></Route>
        <Route exact path="/all" element={<AllForms/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
