import RatingStars from "../Functions/RatingStars";



export default function Rate(){
    return(
        <>
            <div className="font-Manregular flex flex-col gap-10 md:mt-24 mt-12">
              <section className="sm:flex  justify-between items-center ">
                <div className="flex flex-col text-left gap-2">
                  <h1 className="text-2xl md:text-4xl font-Manbold text-primary">Food Quality</h1>
                  <p>Rate the taste, freshness, and presentation of the dishes.</p>
                </div>
                <div className="flex gap-2 mt-2">
                 <RatingStars/>
                </div>
            
              </section>
              <section className="sm:flex  justify-between items-center ">
                <div className="flex flex-col text-left gap-2">
                  <h1 className="text-2xl md:text-4xl font-Manbold text-primary">Service</h1>
                  <p>Rate the friendliness, efficiency, and attentiveness of the staff.</p>
                </div>
                <div className="flex gap-2 mt-2">
                 <RatingStars/>
                </div>
            
              </section>
              <section className="sm:flex  justify-between items-center ">
                <div className="flex flex-col text-left gap-2">
                  <h1 className="text-2xl md:text-4xl font-Manbold text-primary">Ambiance</h1>
                  <p>Rate the atmosphere, decor, and overall vibe of the cafe or restaurant.</p>
                </div>
                <div className="flex gap-2 mt-2">
                 <RatingStars/>
                </div>
            
              </section>
              <section className="sm:flex  justify-between items-center ">
                <div className="flex flex-col text-left gap-2">
                  <h1 className="text-2xl md:text-4xl font-Manbold text-primary">Value for money</h1>
                  <p>Rate the pricing relative to the quality of food and service provided.</p>
                </div>
                <div className="flex gap-2 mt-2">
                 <RatingStars/>
                </div>
            
              </section>
            
            </div>
     

        </>
    )
}