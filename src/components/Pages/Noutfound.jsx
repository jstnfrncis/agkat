import HeaderLogo from '../UI/HeaderLogo';
import MeshBackground from "../UI/MeshBackground";

export default function Notfound() {
    return (
      <>
  
            <HeaderLogo/>
        <main className="grid min-h-[70vh] place-items-center px-6 py-24 sm:py-32 lg:px-8 ">
         
          <div className="text-center">
            <p className="text-base font-semibold textaccent">404</p>
            <h1 className="mt-4 text-6xl font-clash tracking-tight text-accent sm:text-6xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-primary font-epilogue">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bgaccent px-3.5 py-2.5 text-sm font-Manbold bg-accent text-white  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outlineaccent active:scale-[0.98] active-duration-75 transition-all"
              >
                Go back home
              </a>
            </div>
          </div>
          <MeshBackground/>
        </main>
      </>
    )
  }