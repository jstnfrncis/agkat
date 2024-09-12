



export default function MeshBackground() {
    return (
     
      <>
      
       <div className='fixed top-0 left-0 w-full h-full -z-10'>
    <div className='h-full w-full bg-white relative flex items-center justify-center'>
      <div
        className="absolute inset-0">
        <img className="w-full h-full object-cover" src="./public/mesh-background.png" alt="Background gradient" />
      </div>
    </div>
  </div>
      </>
    )
  }


  