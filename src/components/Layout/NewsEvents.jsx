
import PropTypes from 'prop-types';
import Slider from '../UI/EventSlider';


const  NewsEvents = ({className}) => {
  return (
  <div className= {`flex flex-col rounded-lg  gap-12 text-left  ${className}`}>

        <div>
          <h1 className="font-clash text-4xl md:text-5xl lg:text-6xl">News & Events</h1>
          <p className="font-Manregular">Stay updated with the latest news, sales, and events from your favorite 
          cafes and restaurants. </p>
        </div>
      <div className="overflow-hidden rounded-3xl">
      <Slider/>
    </div>

    </div>
  )
}

export default NewsEvents




// To remove the classnName is missing a prop validation. Not required.
NewsEvents.propTypes = {
  className: PropTypes.string,
};