import PropTypes from 'prop-types';

export default function ReviewCard({ profileImage, userName, ratingImage, reviewTitle, reviewText, reviewPhotos }) {
    return (
        <div className='review-container md:my-16 my-8'>
            <div className='flex items-center gap-4'>
                <img src={profileImage} alt="profile" />
                <h2 className='text-2xl'>{userName}</h2>
            </div>
            <div>
                <img src={ratingImage} alt="rating" />
            </div>
            <div>
                <h1 className='font-Manbold'>{reviewTitle}</h1> {/* Use reviewTitle here */}
                <p className='max-w-[455px]'>{reviewText}</p>
            </div>
            <div className='grid grid-cols-4 sm:grid-cols-9 gap-2 mt-4'>
                {reviewPhotos.map((photo, index) => (
                    <img key={index} src={photo} alt={`review-photo-${index}`} />
                ))}
            </div>   
        </div>
   
    );
}

// PropTypes validation
ReviewCard.propTypes = {
    profileImage: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    ratingImage: PropTypes.string.isRequired,
    reviewTitle: PropTypes.string.isRequired, // Updated to isRequired if you are using it
    reviewText: PropTypes.string.isRequired,
    reviewPhotos: PropTypes.arrayOf(PropTypes.string).isRequired,
};
