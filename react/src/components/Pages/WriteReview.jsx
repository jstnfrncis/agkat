import HeaderLogo from '../UI/HeaderLogo';
import StepperFunction from '../Functions/Stepper';
import Footer from '../Layout/Footer';



export default function WriteReview(){
      return(
        <>
      <HeaderLogo/>
      
      <div className='relative flex flex-col gap-6 font-Manregular text-left md:px-12 md:py-12 p-6 bg-white rounded-xl ring-1 ring-gray-100 shadow-sm my-12 w-full h-90 overflow-hidden'>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black to-transparent opacity-50 "/>
      <div className='absolute inset-0 bg-[url("/public/at-the-blanc-banner.png")] bg-cover bg-center rounded-xl'/>
        
         <div className='relative z-10 text-white '>
          <h2 className='text-2xl'>Rate </h2>
           <h1 className='font-clash text-4xl md:text-6xl '>At the blanc</h1>
           <span className='opacity-50'>Coffee shop · Cafe</span>
           <p className='max-w-[430px] mt-2'>Location: MacArthur Highway, San Agustin, San Fernando, Philippines</p>
         </div>
        </div>
     <div className='max-w-custom mx-auto font-Manregular'>
      <StepperFunction />
     </div>
        <Footer/>

  </>
      )
}

