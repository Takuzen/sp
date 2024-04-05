import { useEffect, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import NewsletterSubscription from '../components/NewsletterSubscription';

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 1;
    }
  }, []);

  return (
    <main className="max-h-max flex flex-col bg-white">

      <div id="header" className='max-w-full mx-4 sm:mx-7 my-3 sm:my-3 flex justify-between'>

          <div className='flex flex-row items-center gap-2 sm:gap-3 '>
            <Image
              src="/notesp-logo.png"
              alt="notesp-logo"
              width={40}
              height={40}
              className="block md:hidden"
              priority></Image>
            <Image
              src="/notesp-logo.png"
              alt="notesp-logo"
              width={70}
              height={70}
              className="hidden md:block"
              priority></Image>
            <p className="text-2xl sm:text-4xl font-black font-serif text-black pt-2">
                NoteSP
            </p>
          </div>

          <div className='flex sm:flex-col items-center gap-1 sm:gap-2 mt-2 sm:mt-5'>
            <div>
              <Link href="https://visiondevcamp.org/">
                <Image
                  src="/vds-flame-logo.png"
                  alt="VisionDevCamp Flame Logo"
                  width={20}
                  height={20}
                  className='block sm:hidden rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
                  priority></Image>
              </Link>
            </div>
            <div>
              <Link href="https://visiondevcamp.org/">
                <Image
                  src="/vdc-final-transparent.png"
                  alt="VisionDevCamp Logo"
                  width={240}
                  height={40}
                  className='hidden sm:block rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
                  priority></Image>
              </Link>
            </div>
            <div className='self-center sm:self-end'>
              <Link href="https://visiondevcamp.org/hackathon/">
                <strong className='text-md sm:text-xl hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'>Most Useful App</strong>
              </Link>
            </div>
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

      <div className='flex justify-center'>
        <video ref={videoRef} width="800" height="360" controls autoPlay muted>
            <source src="https://storage.googleapis.com/booksp-eae3c.appspot.com/facede/video/notesp-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </div>
      
      <div>

        <div className='font-black text-2xl sm:text-5xl md:mx-5 lg:mx-0 self-center mt-10'>
          <p className='text-center'>Spatial Notes, Made Easy.</p>
        </div>

        <NewsletterSubscription />

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
      
      
      <div className="flex flex-col gap-4 sm:gap-10 pt-7">
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

  {/*
  <p className="text-sm sm:text-lg font-serif self-center text-black">
    We deliver tips and more.
  </p>
  */}

  <text className='self-center'>And</text>

  <section className='block sm:hidden'>
    <div className='flex flex-col items-center gap-10 mt-4'>
      <div>
        <Link href="https://twitter.com/notespapp">
          <Image
              src="/notesp-x-logo.png"
              alt="NoteSP X Logo"
              width={220}
              height={140}
              className='block rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
              priority
          />
        </Link>
      </div>
      <div>
        <Link href="https://join.slack.com/t/teegarden-support/shared_invite/zt-2e9huyxaq-Uq4Bkj09uiN91VJ2LNr2NQ">
          <Image
              src="/notesp-slack-logo.png"
              alt="NoteSP Slack Logo"
              width={220}
              height={140}
              className='block rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
              priority
          />
        </Link>
      </div>
      <div>
        <Link href="https://github.com/Takuzen/teegarden">
          <Image
              src="/notesp-github-logo.png"
              alt="NoteSP GitHub Logo"
              width={220}
              height={140}
              className='block rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
              priority
          />
        </Link>
      </div>
    </div>
  </section>

  <section className='hidden sm:block'>
    <div className='flex justify-center gap-10'>
      <div>
        <Link href="https://twitter.com/notespapp">
          <Image
              src="/notesp-x-logo.png"
              alt="NoteSP X Logo"
              width={209}
              height={140}
              className='block rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
              priority
          />
        </Link>
      </div>
      <div>
        <Link href="https://join.slack.com/t/teegarden-support/shared_invite/zt-2e9huyxaq-Uq4Bkj09uiN91VJ2LNr2NQ">
          <Image
              src="/notesp-slack-logo.png"
              alt="NoteSP Slack Logo"
              width={209}
              height={140}
              className='block rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
              priority
          />
        </Link>
      </div>
      <div>
        <Link href="https://github.com/Takuzen/teegarden">
          <Image
              src="/notesp-github-logo.png"
              alt="NoteSP GitHub Logo"
              width={209}
              height={140}
              className='block rounded-md hover:shadow-md hover:opacity-70 transition duration-150 ease-in-out cursor-pointer'
              priority
          />
        </Link>
      </div>
    </div>
  </section>

  <text className='self-center'>See you soon.</text>

</div>

  <footer className="flex flex-col justify-center my-10">
    <div className='self-center mt-4 sm:mt-10 z-10 mb-4 sm:mb-10'>
      <p className="text-sm sm:text-lg font-serif self-center text-black">
        Copyright © 2024 Teegarden, All rights reserved.
      </p>
    </div>
  </footer>
</main>
)
}