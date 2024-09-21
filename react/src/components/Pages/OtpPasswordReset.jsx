
import HeaderLogo from '../UI/HeaderLogo';
import Button from '../UI/Button';
import MeshBackground from '../UI/MeshBackground';

export default function Otpverification() {

    return (
      <>

            <HeaderLogo/>
            <div className="flex min-h-[70vh] items-center justify-center px-2 py-12 bg-white-100 max-w-[450px] mx-auto">
  <div className="flex flex-col items-center w-full max-w-md bg-white rounded-xl ring-1 ring-gray-100 shadow-sm">
    <div className="flex flex-col w-full px-6 py-8 ga">
      <h2 className="text-left text-xl leading-9 tracking-tight text-gray-900 font-Manbold max-w-s">
      Please enter the 6-digit code sent to your email.
      </h2>
        <div className=''>
          <div className='font-Manregular text-sm flex gap-2 py-4'>
        <input type="number" className='px-3 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset  ring-gray-300 placeholder:text-icons focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 font-Manregular' />

          </div>
          <Button variant="primary"><a href="/explore-page">Confirm</a></Button>
        </div>
   
    </div>
  </div>
</div>


        
        <MeshBackground />

      </>
    )
  }
