import './index.css';
import Header from './components/Header';
import Login from '../src/pages/Login'
import Signup from './pages/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Header>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Header>
    </BrowserRouter>
  )
}
  
export default App;

