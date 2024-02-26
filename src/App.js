import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Addblog from './components/Addblog';
import Home from './components/Home';
import { Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/add' element={<Addblog></Addblog>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;