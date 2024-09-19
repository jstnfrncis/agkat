import { QRCodeSVG } from 'qrcode.react';


export default function QrCode() {
  return (
    <> 
          <div className='bg-white md:p-8 p-4 rounded-xl grid place-items-center'>
            <QRCodeSVG 
            value='fb.com'
            bgColor='white'
            fgColor='black'
            size={200}/>
          </div>

          
    </>
  );
}
