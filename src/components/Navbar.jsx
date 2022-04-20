import {useEffect, useState } from 'react'
// Component
import { Switch } from '@headlessui/react'
const Navbar = () => {
    const [enabled, setEnabled] = useState(localStorage.getItem("theme") === "dark" ? true : false)
    const [sidebar, setSidebar] = useState(false) 
    useEffect(() => {
      document.getElementsByTagName("HTML")[0].setAttribute('class', localStorage.getItem('theme'));
      document.getElementsByTagName("body")[0].setAttribute('class', 'bg-white dark:bg-black');
    },[])
    if(enabled === true){
      localStorage.setItem("theme", "dark")
      document.getElementsByTagName("HTML")[0].setAttribute('class', localStorage.getItem('theme'))
    }else{
      localStorage.setItem("theme", "light")
      document.getElementsByTagName("HTML")[0].setAttribute('class', localStorage.getItem('theme'))
    }
    return(
      <nav className='relative transition duration-150'>
        <div className='pt-10 px-4 flex justify-between'>
            <div className='dark:text-white flex flex-row'>
              <div className='xs:hidden lg:block'>Menu</div>
              <div className='px-4 xs:hidden lg:block'>Menu</div>
              <div className='xs:hidden lg:block'>Menu</div>
              <div className='md:block lg:hidden ease-in-out duration-300' onClick={() => setSidebar(!sidebar)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
            </div>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? 'bg-slate-400' : 'bg-slate-900'}
                relative inline-flex flex-shrink-0 h-[32px] w-[68px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                  pointer-events-none inline-block h-[28px] w-[28px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
              />
            </Switch>
        </div>
        <div className={`fixed top-0 bottom-0 overflow-hidden h-screen bg-white dark:bg-black flex flex-col ease-in-out duration-300 ${sidebar ? 'w-full':'w-0'}`}>
          <div className='dark:text-white w-full text-center px-4 pt-4 mt-6' onClick={() => setSidebar(!sidebar)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className='dark:text-white w-full text-center p-7 translate-x-0'>Menu</div>
          <div className='dark:text-white w-full text-center p-7 translate-x-0'>Menu</div>
          <div className='dark:text-white w-full text-center p-7 translate-x-0'>Menu</div>
        </div>
      </nav>
    )
}
export default Navbar