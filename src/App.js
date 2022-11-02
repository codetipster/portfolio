import './index.css';
import Header from './components/Header';
import Login from '../src/pages/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Header>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Header>
    </BrowserRouter>
  )
}
  
export default App;

