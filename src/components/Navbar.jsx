import {useEffect, useState } from 'react'
// Component
import { Switch } from '@headlessui/react'
const Navbar = () => {
    const [enabled, setEnabled] = useState(localStorage.getItem("theme") === "dark" ? true : false)
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
        <div className="py-16">
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-slate-400' : 'bg-slate-900'}
              relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
            />
          </Switch>
        </div>
    )
}
export default Navbar