// To remove the classnName is missing a prop validation. Not required.
import PropTypes from 'prop-types';



const  FeaturedSpots = ( {className}) => {
    return (
        
      <div className='flex flex-col gap-12'>
        <h1 className="font-clash text-4xl md:text-5xl lg:text-6xl text-left">Sample Dashboard</h1>
        
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
            <button className='font-Manbold rounded-3xl bg-accent text-white  hover:bg-blue-900 transition-all inline-flex justify-center  text-sm  py-3 px-6 active:scale-[0.98] active-duration-75 ' >{button}</button>
            
          </div>
          
        </div>
     
        
        </div>

      )
  }

  FeaturedCard.propTypes = {
    className: PropTypes.string,
  };

//   <div className="bg-gradient-to-t from-black/100 to-black/0"/>
