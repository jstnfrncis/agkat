// To remove the classnName is missing a prop validation. Not required.
import PropTypes from 'prop-types';
import HeaderLogo from '../UI/HeaderLogo';
import Button from '../UI/Button';
import Dropdown from '../UI/Dropdown';
import Footer from '../Layout/Footer';




const  FeaturedSpots = ( {className}) => {
    return (
      <>
      <HeaderLogo/>
      <div className='relative flex flex-col gap-6 font-Manregular text-left px-12 py-24 bg-white rounded-xl ring-1 ring-gray-100 shadow-sm md:my-24 my-12 w-full h-90'>
      <div className='absolute inset-0 bg-none md:bg-[url("/public/explore-banner.png")] bg-cover bg-center rounded-xl'/>
         <div className='relative z-10 '>
           <h1 className='font-clash text-4xl md:text-5xl lg:text-6xl'>Start exploring!</h1>
           <p className='max-w-[430px] mt-2'>Below are the top cafes and restaurants in San Fernando! Use the search and filter options, or the nearby feature, to find your perfect spot. Happy exploring!</p>
         </div>
      
        </div>

    <div className='max-w-custom mx-auto md:my-28'>
          <div className='flex flex-col gap-4 justify-between lg:flex-row lg:gap-4 mb-16'>
            <div className='relative font-Manregular w-full md:w-full'>
          
            <input className="bg-white relative font-Manbold block rounded-md appearance-none bg-transparent pl-12 py-4 pr-12 placeholder:text-primary focus:outline-accent sm:text-sm sm:leading-6 ring-1 ring-stroke shadow-sm w-full" placeholder="Enter a keyword" type="text"/>
            <img src="/search-icon.svg" alt="" className='text-primary absolute left-5 top-1/2 transform -translate-y-1/2' />
            </div>
            <div className='flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-2 lg:flex lg:flex-row lg:gap-4 lg:justify-between '>
              <Button variant="neutral" className="bg-white flex justify-center items-center gap-2">
                <img src="/Nearby.svg" className='hover:text-white' alt="" />
                Nearby
              </Button>
             <Button variant="neutral" className="bg-white flex justify-center items-center gap-2">
                <img src="/cafe-icon.svg" alt="" />
                Cafe
              </Button>
              <Button variant="neutral" className="bg-white flex justify-center items-center gap-2">
                <img src="/resto-icon.svg" alt="" />
                Resto
              </Button>
              <Dropdown className="bg-white"/>
            </div>
          </div>
          
        <div className='flex flex-col gap-12 mb-12'>
      
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
           <FeaturedCard className='bg-[url(/est1.png)] bg-no-repeat bg-cover'
           shop='Title header'
           category='Coffee Shop | Cafe'
           stars={<div className=''><img src="/public/5Stars.svg" alt="" /></div>}
           button='Explore'
           />
            <FeaturedCard className='bg-[url(/est2.png)] bg-no-repeat bg-cover'
           shop='Title header'
           category='Coffee Shop | Cafe'
           stars={<div className=''><img src="/public/5Stars.svg" alt="" /></div>}
           button='Explore'
           />
            <FeaturedCard className='bg-[url(/est3.png)] bg-no-repeat bg-cover'
           shop='Title header'
           category='Coffee Shop | Cafe'
           stars={<div className=''><img src="/public/5Stars.svg" alt="" /></div>}
           button='Explore'
           />
            <FeaturedCard className='bg-[url(/est4.png)] bg-no-repeat bg-cover'
           shop='Title header'
           category='Coffee Shop | Cafe'
           stars={<div className=''><img src="/public/5Stars.svg" alt="" /></div>}
           button='Explore'
           />
            <FeaturedCard className='bg-[url(/est5.png)] bg-no-repeat bg-cover'
           shop='Title header'
           category='Coffee Shop | Cafe'
           stars={<div className=''><img src="/public/5Stars.svg" alt="" /></div>}
           button='Explore'
           />
            <FeaturedCard className='bg-[url(/est6.png)] bg-no-repeat bg-cover'
           shop='Title header'
           category='Coffee Shop | Cafe'
           stars={<img src="/public/5Stars.svg" alt="" />}
           button='Explore'
           />
        </div>
         
          
        </div>
    </div>
      
      <Footer/>
      </>
    )
  }

// To remove the classnName is missing a prop validation. Not required.
FeaturedSpots.propTypes = {
  className: PropTypes.string,
};

  export default FeaturedSpots


  function FeaturedCard({className ='', shop, category, stars,button}){

    FeaturedCard.propTypes = {
      shop: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      stars: PropTypes.string.isRequired,
      button: PropTypes.string.isRequired,



  };
      return (
      <div className={`relative  shadow-sm  bg-white overflow-hidden rounded-3xl ${className}`}>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black to-transparent opacity-50"/>

        <div className='relative z-20 p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-md md:max-w-lg lg:max-w-xl h-auto min-h-[400px]  flex flex-col gap-2 justify-end'>
          <h1 className='text-white text-3xl font-Manbold text-left'>{shop}</h1>
          <p className='text-white font-Manregular text-left'>{category}</p>
          <div className='flex justify-between items-center'>
            {stars}
            <a href="/establishment-overview">
            <button className='font-Manbold rounded-3xl bg-accent text-white  hover:bg-blue-900 transition-all inline-flex justify-center  text-sm  py-3 px-6 active:scale-[0.98] active-duration-75 ' >{button}</button> </a>
            
          </div>
          
        </div>
     
        
        </div>

      )
  }

  FeaturedCard.propTypes = {
    className: PropTypes.string,
  };

//   <div className="bg-gradient-to-t from-black/100 to-black/0"/>
