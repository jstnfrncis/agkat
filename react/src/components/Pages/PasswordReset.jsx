
import Input from '../UI/Input';
import HeaderLogo from '../UI/HeaderLogo';
import MeshBackground from '../UI/MeshBackground';
import Button from '../UI/Button';






export default function PasswordReset() {

    return (
      <>
            <HeaderLogo/>
            <div className="flex min-h-[70vh] items-center justify-center px-2 py-12 bg-white-100 max-w-[450px] mx-auto">
  <div className="flex flex-col items-center w-full max-w-md bg-white rounded-xl ring-1 ring-gray-100 shadow-sm">
    <div className="flex flex-col w-full px-6 py-8">
      <h2 className="text-left text-xl leading-9 tracking-tight text-gray-900 font-Manbold">
      Forgot Password?
      </h2>
      <div className='text-left'>
          <p className='font-Manregular mt-4 text-sm'>Enter the email address you used when you joined and we’ll send you a <span className='font-Manbold'>OTP-code</span> to reset your password.</p>
      </div>
      <form action="#" method="POST" className="w-full flex flex-col gap-4 mt-8">
        <div>
          <Input
           label="Email"
           id="name"
           name="name"
           type="text"
           placeholder="Enter your email"
           />
        </div>


     
          <Button type="submit" variant="primary"><a href="/otp-reset-code">Send a OTP code</a>
          </Button>

      </form>

    </div>
  </div>
</div>


        
        <MeshBackground />

      </>
    )
  }