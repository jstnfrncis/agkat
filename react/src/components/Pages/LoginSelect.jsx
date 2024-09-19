import HeaderLogo from '../UI/HeaderLogo';
import Button from '../UI/Button';
import MeshBackground from '../UI/MeshBackground';




export default function LoginSelect() {

    return (
      <>
            <HeaderLogo/>

         <div className='flex flex-col justify-center lg:max-w-custom mx-auto gap-12 min-h-[70vh] mt-14 lg:mt-0'>
         <div className='flex font-Manbold'>
           <a href="/" className='flex gap-2'><img src="/back-icon.svg" alt="back-icon" />Back</a>
         </div>
             <div className="flex flex-col lg:flex-row gap-12 items-center">
               <div className="flex flex-col w-full justify-center items-center gap-6 bg-white rounded-xl ring-1 ring-gray-100 shadow-sm px-4 py-12 lg:px-10 lg:py-24">
               <a href="/login"className='w-full' ><Button variant="primary" className="!p-4 text-lg"> Log in to Review</Button> </a>
                      <p className='text-primary font-Manregular text-center text-sm'>Log in to <span className='font-Manbold'>leave reviews</span> for your favorite cafes and restaurants. Share your experiences and help others discover the best spots in San Fernando.</p>
               </div>

               <div className="flex flex-col w-full justify-center items-center gap-6 bg-white rounded-xl ring-1 ring-gray-100 shadow-sm px-4 py-12 lg:px-10 lg:py-24">
                 <a href="/explore-page" className='w-full'>   <Button variant="secondary" className="!p-4 text-lg">Sign in as guest</Button></a> 
                      <p className='text-primary font-Manregular text-center text-sm'>For <span className='font-Manbold'>immediate access</span> to the top-rated cafes and restaurants in San Fernando. No account needed—just one step to start exploring!</p>
               </div>
             </div>
          </div>
        


        
        <MeshBackground />

      </>
    )
  }