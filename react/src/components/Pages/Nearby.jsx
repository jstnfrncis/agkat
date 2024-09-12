import NearbyCard from "../Functions/NearbyCard";

export default function Nearby() {
  return (
    <div className='sm:w-full md:w-full lg:w-[380px] my-14 ring-1 ring-icons rounded-2xl p-6 bg-white'>
      <h1 className='text-3xl '>Nearby</h1>
      <div className='review-container md:my-8'>
        <div className='flex flex-col gap-4'>
          {Array.from({ length: 8 }).map((_, index) => (
            <a href="#" className="hover:bg-highlight rounded-xl" key={index}>
              <NearbyCard
                className="!bg-accent"
                name="Coffee Delight"
                image="/demo-photo.png"
                ratingImage="4.9-Rate-star.svg"
                reviews="20+"
                description="Coffee Shop | Cafe"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
