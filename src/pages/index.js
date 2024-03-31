import Image from 'next/image'
import Link from 'next/link'
import NewsletterSubscription from '../components/NewsletterSubscription';

export default function Home() {

  return (
    <main className="max-h-max flex flex-col bg-white">
      <div id="header" className='max-w-full mx-4 sm:mx-7 my-5 sm:my-10 flex justify-between'>
          <div className='flex flex-row items-center gap-3'>
          <Image
              src="/notesp-logo.png"
              alt="notesp-logo"
              width={50}
              height={50}
              className="block md:hidden"
              priority></Image>
            <Image
              src="/notesp-logo.png"
              alt="notesp-logo"
              width={70}
              height={70}
              className="hidden md:block"
              priority></Image>
            <p className="text-2xl sm:text-4xl font-black font-serif text-black">
                NoteSP
            </p>
          </div>
          
        {/*
          <div className='self-center'>
            <Link href="/about-us">
              <p className='text-lg underline underline-offset-4 hover:underline-offset-8 hover: cursor-pointer'>
                About Us
              </p>
            </Link>
          </div>
        */}

      </div>

      <div className='font-black text-3xl sm:text-6xl md:mx-5 lg:mx-0 self-center mt-10'>
        <p className='text-center'>Create & Share Your World, Easily.</p>
      </div>
      
      {/*
      
        <div className="flex flex-col items-center mt-10">
          <Link href="/whitepaper">

            <div className="sm:block md:hidden w-full max-w-md bg-black rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out" style={{width: '200px', height: '300px'}}>
              <div className="flex flex-col justify-top h-full mt-10">
                <div>
                  <h2 className="text-md font-bold text-white text-center">New Space Handbook</h2>
                  <p className="text-sm text-white mt-2 text-center italic">express beyond screen</p>
                </div>
                <div className="w-full mt-10">
                  <model-viewer src="earth.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="commerce" poster="poster.webp" shadow-intensity="1" exposure="1.17" camera-orbit="90deg 0deg" style={{width: '100%', height: '100px'}}>
                    <div className="progress-bar hide" slot="progress-bar">
                      <div className="update-bar"></div>
                    </div>
                  </model-viewer>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-full max-w-md mt-5 bg-black rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out" style={{width: '500px', height: '600px'}}>
              <div className="flex flex-col justify-top h-full p-4 mt-20">
                <div>
                  <h2 className="text-2xl font-bold text-white text-center">New Space Handbook</h2>
                  <p className="text-md text-white mt-2 text-center italic">express beyond screen</p>
                </div>
                <div className="w-full mt-20">
                  <model-viewer src="earth.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="commerce" poster="poster.webp" shadow-intensity="1" exposure="1.17" camera-orbit="90deg 0deg" style={{width: '100%', height: '200px'}}>
                    <div className="progress-bar hide" slot="progress-bar">
                      <div className="update-bar"></div>
                    </div>
                  </model-viewer>
                </div>
              </div>
            </div>
          </Link>
        </div>
      
      */}
      
      
      <div className="flex flex-col gap-4 sm:gap-10 pt-10">
        {/*
        <div className='flex justify-center gap-5'>
          <Link href="https://apps.apple.com/us/app/teegarden/id6478132550">
            <Image
            src="/app-store-badge.svg"
            alt="App Store Badge"
            width={150}
            height={150}
            className='block'
            priority></Image>
          </Link>

        </div>
        */}

        <NewsletterSubscription />
        <p className="text-sm sm:text-lg font-serif self-center text-black">
          We deliver tips to help your spatial creations.
        </p>

  </div>

  <footer className="flex flex-col justify-center my-10">
    <div className='self-center mt-4 sm:mt-10 z-10 mb-4 sm:mb-10'>
      <p className="text-sm sm:text-lg font-serif self-center text-black">
          © 2024 NoteSP
      </p>
    </div>
  </footer>
</main>
)
}