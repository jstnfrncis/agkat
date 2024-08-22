
import Close from './Close';
import Logo from './Logo';
import Hamburger from './Hamburger'
import  {useState} from 'react'

export default function TestNav() {
    const [nav, setNav] = useState(false)
    const handleNav =()=>{
        setNav(!nav)
    }

  return (
   <>
      <header>
   
        <nav className="flex justify-between items-center max-w-5xl  mx-auto z-10">

           {/* Navigation Desktop */}
            <div>
              <Logo/>
            </div>
              {/* Contents Navigation Desktop */}
            <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">

                <ul className="flex md:flex-row flex-col md:items-center ] gap-11 font-epilogue bold">
                    <li><a href="#home" className='hover:text-accent transition'>Top-rated</a></li>
                    <li><a href="#home" className='hover:text-accent transition'>Discover</a></li>
                    <li ><a href="#home" className='hover:text-accent transition'>About</a></li>
                    <button className="bg-accent hover:bg-blue-900 transition text-white px-6 py-2 rounded-lg">Sign in</button>
                </ul>
            </div>
            
       
            <div>
          
            </div>




                  {/* Background Blur Filter */}
             <div className="fixed inset-0 bg-white/50 backdrop-blur-md transition-opacity duration-300 ease-out peer-focus:opacity-100 peer-focus:pointer-events-auto opacity-0 pointer-events-none"></div>


               {/* Contents Mobile Side Navigation */}
            <div className={!nav ? 'fixed right-0 top-0 w-[85%] h-full bg-white shadow-2xl  ease-out delay-100 duration-200  flex-col text-left gap-6 font-epilogue px-10 py-4' : 'fixed right-[100%]  ease-out delay-100 duration-200'}>
                <div className='flex justify-between items-center py-4' onClick={handleNav}>
                  <Logo/>      
                  <Hamburger />
                     {!nav ? <Close /> : false} 
                </div>

              <div className=' flex flex-col text-left py-6 border-t border-b border-slate-900/10 '>
                  <a href="#" className="py-3 px-2 rounded-xl text-primary hover:text-accent transition hover:bg-highlight">Top-rated</a>
                  <a href="#" className="py-3 px-2 rounded-xl text-primary hover:text-accent transition hover:bg-highlight">Discover</a>
                  <a href="#" className="py-3 px-2 rounded-xl text-primary hover:text-accent transition hover:bg-highlight">About</a>
              </div>

                <a href="#" className="text-base my-4 bg-accent text-white  hover:bg-blue-900 transition inline-flex justify-center rounded-lg text-sm  py-3 px-4 w-full">Sign in</a>
                
            </div>

          </nav>

    </header>
    
    
</>
  );
}

