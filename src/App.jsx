import { useState } from 'react';
import Para from './components/Para';


function App() {


  return (
    <div  className='w-[100%] '>
      <div className='flex  justify-between'>
        <div className='flex  gap-[10px]  py-[10px] md:flex  md:justify-betwwn'>
          <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:hidden   w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </div>
          <div className='rounded bg-[#4375FB] h-[35px] text-white text-center px-[28px] py-[5px] '>Complete Profile</div>
        </div>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10  pt-[13px] h-10  ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
        </div>
      </div>
      

    </div>
  )
}

export default App
