// To remove the classnName is missing a prop validation. Not required.
import HeaderLogo from '../UI/HeaderLogo';
import Button from '../UI/Button';
import Footer from '../Layout/Footer';
import ReviewPagination from '../Functions/ReviewPagination';
import Nearby from './Nearby';
import ReviewCard from '../Functions/ReviewCard';



export default function  OverviewReview () {
    const review = {
        profileImage: "/demo-profile.png",
        userName: "User Name",
        ratingImage: "5Stars.svg",
        reviewTitle: "Review for At the blanc",
        reviewText: "Loved the cozy atmosphere and friendly staff! The latte was perfect, and the pastries were fresh and delicious. The outdoor seating area is a great place to relax and enjoy a sunny afternoon. Definitely my new go-to spot!",
        reviewPhotos: ["/demo-photo.png", "/demo-photo.png", "/demo-photo.png"]
    };
    return (
      <>
      <HeaderLogo/>
      <div className='relative flex flex-col gap-6 font-Manregular text-left px-12 py-24 bg-white rounded-xl ring-1 ring-gray-100 shadow-sm my-24 w-full h-90 overflow-hidden'>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black to-transparent opacity-50 "/>
      <div className='absolute inset-0 bg-[url("/public/at-the-blanc-banner.png")] bg-cover bg-center rounded-xl'/>
         <div className='relative z-10 text-white '>
           <h1 className='font-clash text-4xl md:text-5xl lg:text-6xl '>At the blanc</h1>
           <span className='opacity-50'>Coffee shop · Cafe</span>
           <p className='max-w-[430px] mt-2'>Location: MacArthur Highway, San Agustin, San Fernando, Philippines</p>
         </div>
        </div>

        <div className='mx-auto my-28'>
  <div className='flex flex-col lg:flex-row justify-between gap-8 px-6'>

    <div className='flex flex-col gap-8'>
      <div className='flex flex-col md:flex-row md:justify-between  gap-16'>
        <div className='font-Manregular flex flex-col text-left gap-2'>
          <h6 className=''>25+ Reviews</h6>
          <h2 className='text-3xl font-Manbold'>At the Blanc</h2>
          <div className='flex items-center gap-2'>
            <b>4.9 </b> Rating
            <img src="/4.9-Rate-star.svg" alt="average-stars" />
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <Button variant='primary'><a href="/write-review">Write a review</a></Button>
          <div className='grid place-items-center'>
            <img src="/atb-qr.png" alt="QR Code" className='w-[150px]' />
          </div>
        </div>
      </div>

      <ul className='font-Manbold flex flex-col gap-4 mt-10'>
        <li className='flex justify-between text-xl'>
          Food <img src="/4.9-Rate-star.svg" className='w-[130px]' alt="" />
        </li>
        <li className='flex justify-between text-xl'>
          Place <img src="/4.9-Rate-star.svg" className='w-[130px]' alt="" />
        </li>
        <li className='flex justify-between text-xl'>
          Service <img src="/4.9-Rate-star.svg" className='w-[130px]' alt="" />
        </li>
        <li className='flex justify-between text-xl'>
          Location <img src="/4.9-Rate-star.svg" className='w-[130px]' alt="" />
        </li>
      </ul>
    </div>


    <div className='relative h-[400px] md:w-full lg:w-[600px] bg-primary rounded-2xl overflow-hidden'>
        <div className='absolute inset-0 bg-[url("/public/demo-news-event-banner.png")] bg-cover bg-center rounded-xl'/>
    </div>
  </div>

    {/* Container of Overview Review and Nearby  */}
  <div className='font-Manregular flex flex-col md:flex-col lg:flex-row justify-between gap-8 text-left my-20 '>
  
    {/* Container of Overview Review */}
    
    <div className=' my-14 w-full ring-1 ring-icons rounded-2xl  p-6'>
    <h1 className='text-3xl mb-20'>Read overviews</h1>
       <ReviewCard
        profileImage={review.profileImage}
        userName={review.userName}
        ratingImage={review.ratingImage}
        reviewTitle={review.reviewTitle}
        reviewText={review.reviewText}
        reviewPhotos={review.reviewPhotos}/>
        
        <ReviewCard
        profileImage={review.profileImage}
        userName={review.userName}
        ratingImage={review.ratingImage}
        reviewTitle={review.reviewTitle}
        reviewText={review.reviewText}
        reviewPhotos={review.reviewPhotos}/>

        <ReviewCard
        profileImage={review.profileImage}
        userName={review.userName}
        ratingImage={review.ratingImage}
        reviewTitle={review.reviewTitle}
        reviewText={review.reviewText}
        reviewPhotos={review.reviewPhotos}/>


        <ReviewPagination/>

    </div>

    {/* Container Nearby  */}
    <div className=''>
        <Nearby/>
    </div>
  </div>
</div>

      <Footer/>
      </>
    )
  }

