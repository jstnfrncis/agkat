import Footer from '../Layout/Footer';
import QrCode from '../Functions/QrCode';

export default function EstablishmentQrCode() {
  return (
    <>
      <section className='relative flex flex-col gap-6 font-Manregular text-left md:px-12 py-24 px-8 bg-white rounded-xl ring-1 ring-gray-100 shadow-sm md:my-24 my-12 w-full h-90 overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0 z-10 bg-black opacity-70' />
        <div className='absolute inset-0 bg-[url("/public/at-the-blanc-banner.png")] bg-cover bg-center rounded-xl' />

        {/* Content */}
        <div className='relative z-10 text-white  flex flex-col lg:flex-row sm:justify-center items-center gap-12 lg:gap-12'>
            <QrCode/>
          <div className='flex flex-col  gap-10  md:mt-4 lg:mt-0'>
            <div>
              <h1 className='font-clash md:text-4xl text-2xl'>We value your opinion!</h1>
              <p className='max-w-[400px] mt-2'>Use the QR code to share your thoughts and feedback with us.</p>
            </div>

            <div className='flex flex-col gap-2  '>
              <h1 className='font-Manregular md:text-2xl'>At the Blanc | Coffee Shop | Cafe</h1>

              <div className='flex justify-between '>
                <h5>Total reviews</h5>
                <span>46+</span>
              </div>

              <div className='flex justify-between'>
                <h5>Average rate</h5>
                <span><img src="/4.9-Rate-star.svg" alt="Rating Star" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
