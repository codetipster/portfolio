import './index.css';
import { useState } from 'react';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import personal from './assets/personal.jpg'

const App = () => {
  const [open, setOpen] = useState(true)

  return (
    <div className='flex'>
      <div className={`${open ? 'w-72' : 'w-20'} duration-200 h-screen bg-dark-purple relative`}>
        <BsArrowLeftCircleFill alt='close and open icon' className={`absolute cursor-pointer rounded-full -right-3 top-9 w-10 h-10 bg-slate-500 border-2 border-dark-purple ${!open && 'rotate-180'}`} onClick={()=>setOpen(!open)}/>
        <div className='flex gap-3 items-center'>
          <img src={personal} alt='personal' className='cursor-pointer duration-500 rounded-full h-20' />
          <h2 className={`text-white origin-left font-medium text-x1 duration-300`}>Samuel Nzekwe</h2>
        </div>
      </div>
      <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
        <h1>Home page</h1>
      </div>
    </div>
  )
}

export default App;

