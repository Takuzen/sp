import Image from 'next/image'
import Link from 'next/link'
import NewsletterSubscription from '../components/NewsletterSubscription';

export default function Home() {

  return (
    <main className="max-h-max flex flex-col bg-[#ffc500]">
      <div id="header" className='max-w-full mx-4 sm:mx-7 my-5 sm:my-10 flex justify-between'>
          <div className='self-center'>
            <p className="text-2xl sm:text-4xl font-black font-serif text-black">
                Teegarden
            </p>
          </div>
          <div className='self-center'>
            <Link href="/about-us">
              <p className='text-lg underline underline-offset-4 hover:underline-offset-8 hover: cursor-pointer'>
                About Us
              </p>
            </Link>
          </div>
      </div>

      <div className='font-black text-4xl sm:text-6xl md:mx-5 lg:mx-0 self-center mt-10'>
        <p className='text-center'>View and Share Spatial Contents, Easily</p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-10 pt-10">
        <div className="flex flex-col justify-center">
          <Link href="/whitepaper" className='self-center'>
            <p className="text-lg font-black font-serif mb-4 sm:mb-10 text-white underline underline-offset-4 hover:underline-offset-8 hover: cursor-pointer">
                Whitepaper
            </p>
          </Link>
        </div>
        <div className='flex justify-center gap-5'>
          <p className="text-lg sm:text-2xl font-black font-serif self-center text-black">
              Coming with
          </p>
          <Link href="https://www.apple.com/apple-vision-pro/">
            <Image
              src="/vision-pro-icon.png"
              alt="Vision Pro Icon Mobile"
              width={70}
              height={70}
              className='block sm:hidden'
              priority></Image>
          </Link>
          <Link href="https://www.apple.com/apple-vision-pro/">
            <Image
              src="/vision-pro-icon.png"
              alt="Vision Pro Icon"
              width={100}
              height={100}
              className='hidden sm:block'
              priority></Image>
          </Link>
        </div>
        
        <NewsletterSubscription />

        <div className='mx-20 flex flex-col justify-center'>
          <Image
            src="/triple-down-arrow.png"
            alt="Preview Image 1 Mobile"
            width={100}
            height={100}
            priority
            className='self-center block sm:hidden'></Image>
          <Image
            src="/triple-down-arrow.png"
            alt="Preview Image 1"
            width={150}
            height={150}
            priority
            className='hidden sm:block self-center'></Image>
          <p className='self-center text-2xl sm:text-4xl font-serif italic font-bold'>A Sneak Peak</p>
        </div>
        
        <div className='mb-10 flex flex-col gap-10 justify-center sm:justify-around items-center'>
          <Image
            src="/booksp-preview-0.png"
            alt="Preview Image 1"
            width={700}
            height={700}
            priority></Image>
          <Image
            src="/booksp-preview-2.png"
            alt="Preview Image 3"
            width={700}
            height={700}
            priority></Image>
          <Image
            src="/booksp-preview-1.png"
            alt="Preview Image 2"
            width={700}
            height={700}
            priority></Image>
        </div>
      
    {/* Cube Part
      <div className="flex justify-center">
        <div className="flex flex-col justify-center mt-5 sm:mt-10">
          <div className='flex justify-center gap-2 mb-3 sm:mb-5'>
            <p className="text-2xl sm:text-4xl font-black font-serif text-black">
              Facade
            </p>
          </div>
          <p className="text-sm sm:text-lg font-black font-serif self-center mb-4 sm:mb-8 text-black">
            Read/Write 3D things from 2D.
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
    */}
  </div>

  <NewsletterSubscription />

  <footer className="flex flex-col justify-center my-10">
    <div className='self-center mt-4 sm:mt-10 z-10 mb-4 sm:mb-10'>
      <p className="text-sm sm:text-lg font-serif self-center text-black">
          © 2024 Teegarden
      </p>
    </div>
  </footer>
</main>
)
}