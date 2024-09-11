import NearbyCard from "../Functions/NearbyCard";

export default function Nearby (){


    return (
        
        

        <div className='sm:w-full md:w-full  lg:w-[380px] my-14 ring-1 ring-icons rounded-2xl  p-6'>
        <h1 className='text-3xl mb-20'>Nearby</h1>
        <div className='review-container my-16'>
            <a href="#"  >
                    <div className='flex flex-col  gap-4 '>
                        <NearbyCard
                        name="Coffee Delight"
                        image="/demo-photo.png"
                        ratingImage="4.9-Rate-star.svg"
                        reviews="20+"
                        description="Coffee Shop | Cafe"
                    />
                    <NearbyCard
                        name="Coffee Delight"
                        image="/demo-photo.png"
                        ratingImage="4.9-Rate-star.svg"
                        reviews="20+"
                        description="Coffee Shop | Cafe"
                    />
                     <NearbyCard
                        name="Coffee Delight"
                        image="/demo-photo.png"
                        ratingImage="4.9-Rate-star.svg"
                        reviews="20+"
                        description="Coffee Shop | Cafe"
                    />
                     <NearbyCard
                        name="Coffee Delight"
                        image="/demo-photo.png"
                        ratingImage="4.9-Rate-star.svg"
                        reviews="20+"
                        description="Coffee Shop | Cafe"
                    />
                     <NearbyCard
                        name="Coffee Delight"
                        image="/demo-photo.png"
                        ratingImage="4.9-Rate-star.svg"
                        reviews="20+"
                        description="Coffee Shop | Cafe"
                    />
                    </div>
                    </a>
        </div>

    </div>

    )
    
  
    
    
}