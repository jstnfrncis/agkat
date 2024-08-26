



const  Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row text-primary justify-center items-center pt-[120px] mx-auto gap-2 sm:gap-6 md:gap-6  lg:gap-2 max-w-5xl">
        <div className="flex flex-col gap-7 max-w-[600px] text-left">
            <h1 className="font-clash text-4xl md:text-5xl lg:text-6xl">Leisure Experiences <span className="text-accent">Made Simple</span> for <br />San Fernando</h1>
            <p className="font-epilogue max-w-[450px]">Discover the best cafés and restaurants through reviews covering their overall performance.</p>

            <div>
                <button className="font-epilogue inline-flex flex-none bg-accent hover:bg-blue-900 transition-all active:scale-[0.98] active-duration-75 transition-all text-white px-6 py-2 rounded-lg">Featured Spots</button>
            </div>
        </div>
        <div className="w-full max-w-[600px]">
            <img className="w-full h-auto mt-10   " src="/public/rating-production.png" alt="rating-image" />
        </div>
    </div>
  )
}

export default Hero