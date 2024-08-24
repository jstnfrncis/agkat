
import Close from '../UI/Close';
import Logo from '../UI/Logo';
// import { Link } from 'react-router-dom';

export default function Navigation() {

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
                    <li><a href="#event" className='hover:text-accent transition'>News & Events</a></li>
                    <li><a href="#discover" className='hover:text-accent transition'>Discover</a></li>
                    <li ><a href="#about" className='hover:text-accent transition'>About</a></li>
                    <button className="bg-accent hover:bg-blue-900 transition text-white px-6 py-2 rounded-lg">Sign in</button>
                </ul>
            </div>
            
       



             {/* Hamburger Mobile Side Navigation */}
             <button className='md:hidden relative peer hover:text-accent transition cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
             </button>

                  {/* Background Blur Filter */}
             <div className="fixed inset-0 bg-white/50 backdrop-blur-md transition-opacity duration-300 ease-out peer-focus:opacity-100 peer-focus:pointer-events-auto opacity-0 pointer-events-none"></div>

               {/* Contents Mobile Side Navigation */}
            <div className="md:hidden z-20 fixed top-0 -right-[600px] lg:right-0 h-screen w-4/5 lg:w-4/5 bg-white shadow-2xl peer-focus:right-0 peer:transition ease-out delay-100 duration-200  flex-col text-left gap-6 font-epilogue px-10 py-4">
                <div className='flex justify-between items-center py-4'>
                  <Logo/>
                  <button className="hover:text-accent transition"><Close/></button>                 
                </div>

              <div className='flex flex-col text-left py-6 border-t border-b border-slate-900/10 '>
                  <a href="#" className="py-3 px-2 rounded-xl text-primary hover:text-accent transition hover:bg-highlight">Top-rated</a>
                  <a href="#event" className="py-3 px-2 rounded-xl text-primary hover:text-accent transition hover:bg-highlight">News & Events</a>
                  <a href="#discover" className="py-3 px-2 rounded-xl text-primary hover:text-accent transition hover:bg-highlight">Discover</a>
                  <a href="#about" className="py-3 px-2 rounded-xl text-primary hover:text-accent transition hover:bg-highlight">About</a>
              </div>
                <a href="#" className="text-base my-4 bg-accent text-white  hover:bg-blue-900 transition inline-flex justify-center rounded-lg text-sm  py-3 px-4 w-full">Sign in</a>
                
               
            </div>

          </nav>

    </header>
    
    
</>
  );
}

