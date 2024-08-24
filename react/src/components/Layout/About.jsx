// To remove the classnName is missing a prop validation. Not required.
import PropTypes from 'prop-types';



const  About = ( {className}) => {
    return (
      <div className={`flex flex-col text-primary mx-auto gap-12  max-w-5xl overflow-hidden  ${className}`}>
          <div className="flex flex-col gap-2 max-w-[600px] text-left">
              <h1 className="font-clash text-4xl md:text-5xl lg:text-6xl">About us</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2">
          <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3"
          title="Top-rated establishments"
          description="Our website offers quick ways for you and your family to discover top-rated establishments."
          graphic={<div className='aspect-[2/1] sm:aspect-[4/3] md:aspect-[16/9] bg-[url(/top-rated-est.png)] bg-cover bg-no-repeat w-full sm:bg-center md:bg-top lg:bg-center'/>}/>

          <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3 overflow-hidden" 
          title="Crowdsourced review"
          description="Users can submit reviews and evaluations of products, restaurants, cafés, and more, all based on personal experiences."
          graphic={<div className='aspect-[2/1]  bg-[url(/crowdsourced-review.png)] bg-cover bg-no-repeat w-full -translate-x-16 translate-y-4 md:-translate-x-24 md:translate-y- md:bg-center lg:bg-cover'/>}/>

          <BentoCard className="col-span-1/2 md:col-span-2 lg:col-span-1/2 xl:col-span-1/2 overflow-hidden" 
           title="Agkat"
          description="Originating from the Kapampangan language of Pampanga, which means let's go."
          graphic={<div className='aspect-[2/1] bg-[url(/agkat-logo-icon.png)] bg-[size:350px_350px] w-full  bg-no-repeat translate-x-16  '/>}/>
          
          <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3/5" 
           title="A snapshot of 5 star reviews"
          description="A glimpse into San Fernando’s 5-star favorites, handpicked for your enjoyment."
          graphic={<div className='aspect-[2/1] bg-[url(/snapshot-reviews.png)] bg-[size:516px_183px] w-full bg-center  bg-no-repeat md:bg-center'/>}/>

          <BentoCard className="col-span-1/2 md:col-span-2 lg:col-span-1/2 xl:col-span-1/2" 
           title="Local spots"
          description="We’ve gathered the top-rated spots in San Fernando, just for you to explore! md:bg-center"
          graphic={<div className='aspect-[2/1] bg-[url(/ph-map.png)] bg-[size:247px_183px] w-full bg-center  bg-no-repeat'/>}/>
        </div>

      </div>
    )
  }


// To remove the classnName is missing a prop validation. Not required.
About.propTypes = {
  className: PropTypes.string,
};

  export default About


  function BentoCard({className ='', title, description, graphic}){

    BentoCard.propTypes = {
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      graphic: PropTypes.string.isRequired,


  };
      return (
      <div className={`ring-1 ring-stroke shadow-sm overflow-hidden bg-white rounded-3xl ${className}`}>
        <div className='p-10'>
          <h1 className='text-primary text-3xl font-Manbold text-left'>{title}</h1>
          <p className='text-icons font-Manregular text-left'>{description}</p> 
        </div>
        {graphic}
        
        </div>

      )
  }

  BentoCard.propTypes = {
    className: PropTypes.string,
  };

  // [mask-image:linear-gradient(to_bottom,black_75%,transparent)]