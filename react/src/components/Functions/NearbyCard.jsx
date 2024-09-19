import PropTypes from 'prop-types';


export default function NearbyCard({ name, image, ratingImage, reviews, description }) {
    return (
        <div className="flex items-center gap-4 my-4">
            <img src={image} alt="profile" />
            <div className="flex flex-col gap-2">
                <h2 className="text-lg">{name}</h2>
                <div className="flex gap-4">
                    <img src={ratingImage} alt="rating" />
                    <span className="text-sm">{reviews} Reviews</span>
                </div>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );

    
}
// PropTypes validation
NearbyCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ratingImage: PropTypes.string.isRequired,
    reviews: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

