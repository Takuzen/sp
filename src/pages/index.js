import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-h-max flex flex-col">

      <div className='max-w-screen-md mx-4 sm:mx-7 my-2 sm:my-5 flex justify-start gap-2'>
        <div className="self-center flex gap-2">
          <p className="text-xl sm:text-3xl font-black font-serif">
            Cube
          </p>
          <p className='self-end text-lg sm:text-2xl font-black font-serif'>
            Business
          </p>
        </div>
      </div>

      <div className="flex justify-center bg-black">
        <div className="flex flex-col justify-center mt-5 sm:mt-10">
          <div className='flex justify-center gap-2 mb-3 sm:mb-5'>
            <p className="text-2xl sm:text-4xl font-black font-serif text-white">
              Cube
            </p>
          </div>
          <p className="text-sm sm:text-lg font-black font-serif self-center mb-4 sm:mb-8 text-white">
            A social media ready for 3D.
          </p>
          <div className='self-center mb-4 sm:mb-8 bg-white rounded-full px-3 sm:px-5 py-1 sm:py-2 hover:opacity-80 hover:cursor-pointer'> 
            <Link href="https://cube-tau.vercel.app/">
              <p className="text-sm sm:text-lg font-black font-serif text-blue-400">
                See service
              </p>
            </Link>
          </div>
          <div className='z-10 w-64 sm:w-[500px] h-64 sm:h-[500px] md:hidden'>
              <model-viewer
                style={{ width: '250px', height: '250px' }}
                src="/sample.glb"
                width="500px"
                height="500px"
                alt="A 3D model of a table with food on it"
                ar
                auto-rotate
                auto-rotate-delay="1000"
                rotation-per-second="400%"
                shadow-intensity="1"
                touch-action="pan-y"
                camera-orbit="0 130deg 40deg"> 
              </model-viewer>
          </div>
          <div className='hidden md:flex z-10 w-[100%]'>
              <model-viewer
                style={{ width: '500px', height: '500px', margin: 'auto' }}
                src="/sample.glb"
                width="500px"
                height="500px"
                alt="A 3D model of a table with food on it"
                ar
                auto-rotate
                auto-rotate-delay="1000"
                rotation-per-second="400%"
                shadow-intensity="1"
                touch-action="pan-y"
                camera-orbit="0 130deg 40deg"> 
              </model-viewer>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-10">
        <div className="flex flex-col justify-center mt-10 sm:mt-20">
          <p className="text-2xl sm:text-4xl font-black font-serif self-center mb-2 sm:mb-5 text-black">
              BookSP
          </p>
          <p className="text-sm sm:text-lg font-black font-serif self-center mb-4 sm:mb-10 text-black">
              Your Spatial Book Shop
          </p>
        </div>
        <div className='flex flex-col gap-7 sm:flex-row justify-center sm:justify-around items-center'>
          <Image
            src="/booksp-preview-0.png"
            alt="Cube Inc. Logo"
            width={200}
            height={200}
            priority></Image>
          <Image
            src="/booksp-preview-1.png"
            alt="Cube Inc. Logo"
            width={200}
            height={200}
            priority></Image>
        </div>
        <div className="flex flex-col mt-10 sm:mt-20">
          <p className="text-lg sm:text-2xl font-black font-serif self-center mb-4 sm:mb-10 text-yellow-400">
              Coming with Vision Pro
          </p>
        </div>
      </div>

      <footer className="flex flex-col justify-center mt-10 sm:mt-20 bg-gray-200">
        <div className='mt-4 sm:mt-10 z-10 self-center mb-4 sm:mb-10 hover:underline hover:underline-offset-8'>
          <Link href="/about">
            <p className="text-lg sm:text-xl font-serif text-black">
                About Us
            </p>
          </Link>
        </div>
        <p className="text-sm sm:text-lg font-serif self-center mb-4 sm:mb-10 text-black">
            © 2023 Cube
        </p>
      </footer>
    </main>
  )
}