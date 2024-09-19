import RatingStars from "../Functions/RatingStars";




export default function Summary(){
    return(
        <>
        
         <div className="md:mt-12 mt-12" >
         <h1 className="text-left block font-Manbold font-medium text-primary md:text-2xl">
           Summary
          </h1>
       <div className="font-Manregular flex flex-col gap-4 mt-12 bg-white rounded-xl p-6">
              <section className="sm:flex  justify-between items-center ">
                     <div className="flex flex-col text-left gap-2">
                       <h1 className="text-2xl md:text-xl font-Manbold text-primary">Food Quality</h1>
                       <p>Rate the taste, freshness, and presentation of the dishes.</p>
                     </div>
                     <div className="flex gap-2 mt-2">
                      <RatingStars/>
                     </div>
                 
                   </section>
                   <section className="sm:flex  justify-between items-center ">
                     <div className="flex flex-col text-left gap-2">
                       <h1 className="text-2xl md:text-xl font-Manbold text-primary">Service</h1>
                       <p>Rate the friendliness, efficiency, and attentiveness of the staff.</p>
                     </div>
                     <div className="flex gap-2 mt-2">
                      <RatingStars/>
                     </div>
                 
                   </section>
                   <section className="sm:flex  justify-between items-center ">
                     <div className="flex flex-col text-left gap-2">
                       <h1 className="text-2xl md:text-xl font-Manbold text-primary">Ambiance</h1>
                       <p>Rate the atmosphere, decor, and overall vibe of the cafe or restaurant.</p>
                     </div>
                     <div className="flex gap-2 mt-2">
                      <RatingStars/>
                     </div>
                 
                   </section>
                   <section className="sm:flex  justify-between items-center ">
                     <div className="flex flex-col text-left gap-2">
                       <h1 className="text-2xl md:text-xl font-Manbold text-primary">Value for money</h1>
                       <p>Rate the pricing relative to the quality of food and service provided.</p>
                     </div>
                     <div className="flex gap-2 mt-2">
                      <RatingStars/>
                     </div>
                 
                   </section>
             
                   <section className="grid grid-cols-2 sm:grid-cols-9 gap-2">
                     <img src="/demo-photo.png" alt="" />
                     <img src="/demo-photo.png" alt="" />
                     <img src="/demo-photo.png" alt="" />
                     <img src="/demo-photo.png" alt="" />
             
                   </section>

                   <section>
                    <p className="text-left">Great vibes and fantastic coffee! The baristas really know their stuff, and the cold brew is a must-try. Also, the avocado toast is amazing. Perfect place to hang out and get some work done.
A hidden gem in San Fernando! The espresso is strong and smooth, and the breakfast sandwiches are to die for. The staff is super friendly, and the decor is charming. I’ll be back for sure.
Such a cute little place with excellent coffee! The mocha was rich and flavorful, and the bagels were fresh and tasty. Love the community board with local events. A great place to start your day.
Review for Morning Brew</p>
                   </section>
       </div>
        </div>
            
    
     

        </>
    )
}