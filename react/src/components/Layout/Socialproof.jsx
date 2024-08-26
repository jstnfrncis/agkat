/// To remove the classnName is missing a prop validation. Not required.
import PropTypes from 'prop-types';


const  Socialproof = ({ className }) => {
  return (
    <div className={`flex flex-col text-primary  gap-2  overflow-hidden ${className}`}>
        <div className="flex flex-col gap-2 max-w-[600px] text-left">
            <h1 className="font-clash text-4xl md:text-5xl lg:text-6xl">Social Proof</h1>
            <p className="font-epilogue max-w-[450px]">Logotype of Cafes and Restos</p>
        </div>
       <div className='flex overflow-hidden gap-12 group'>
         <div className="container-icons flex  space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
            <img className="w-30 h-auto" src="./public/mailchimp.svg" alt="" loading='lazy' />
            <img className="w-30 h-auto" src="./public/adobe.svg" alt="" loading='lazy' />
            <img className="w-30 h-auto" src="./public/coinbase.svg" alt=""  loading='lazy'/>
            <img className="w-30 h-auto" src="./public/asana.svg" alt=""  loading='lazy'/>
            <img className="w-30 h-auto" src="./public/gumroad.svg" alt="" loading='lazy' />
            <img className="w-30 h-auto" src="./public/mailchimp.svg" alt="" loading='lazy' />
            <img className="w-30 h-auto" src="./public/adobe.svg" alt="" loading='lazy' />
            <img className="w-30 h-auto" src="./public/coinbase.svg" alt=""  loading='lazy'/>
            <img className="w-30 h-auto" src="./public/asana.svg" alt=""  loading='lazy'/>
            <img className="w-30 h-auto" src="./public/gumroad.svg" alt="" loading='lazy' />
         </div>
  
       </div>
    </div>
  )
}

export default Socialproof


// To remove the classnName is missing a prop validation. Not required.
Socialproof.propTypes = {
  className: PropTypes.string,
};