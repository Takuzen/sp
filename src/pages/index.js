import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-h-max flex flex-col">

      <div className='max-w-[50vw] mx-7 my-5 flex justify-start gap-5'>
        <div className="">
          <Image
            src="/cube-brown-logo.png"
            alt="Cube Inc. Logo"
            width={50}
            height={50}
            priority></Image>
        </div>
        <div className="self-center">
          <p className="font-black text-3xl font-serif">
            Cube Inc.
          </p>
        </div>
      </div>

      <div className="flex justify-center bg-black">
        <div className="flex flex-col justify-center mt-10">
          <p className="font-black text-4xl font-serif self-center mb-5 text-white">
            Book Cube
          </p>
          <p className="font-black text-lg font-serif self-center mb-8 text-white">
            Sharing books in a cubic way.
          </p>
          <div className='self-center mb-8 bg-white rounded-full px-5 py-2 hover:opacity-80 hover:cursor-pointer'> 
            <Link href="https://bookcube.vercel.app/">
              <p className="font-black text-lg font-serif text-blue-400">
                See service
              </p>
            </Link>
          </div>
          <div className='z-10' style={{ width: '500px', height: '500px' }}>
              <model-viewer
                style={{ width: '500px', height: '500px' }}
                src="/scene.glb"
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

      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-center mt-20">
          <p className="font-black text-4xl font-serif self-center mb-5 text-black">
              BookSP
          </p>
          <p className="font-black text-lg font-serif self-center mb-10 text-black">
              Your Spatial Book Shelf
          </p>
        </div>
        <div className='flex justify-around'>
          <Image
            src="/booksp-preview-0.png"
            alt="Cube Inc. Logo"
            width={500}
            height={500}
            priority></Image>
          <Image
            src="/booksp-preview-1.png"
            alt="Cube Inc. Logo"
            width={500}
            height={500}
            priority></Image>
        </div>
        <div className="flex flex-col mt-12">
          <p className="font-black text-2xl font-serif self-center mb-10 text-yellow-400">
              Coming with Vision Pro
          </p>
        </div>
      </div>
      <footer className="flex flex-col justify-center mt-20 bg-gray-200">
        <div className='mt-10 z-10 self-center mb-10 hover:underline hover:underline-offset-4'>
          <Link href="/about">
            <p className="text-xl font-serif text-black">
                About us
            </p>
          </Link>
        </div>
        <p className="text-lg font-serif self-center mb-10 text-black">
            © 2023 Cube Inc.
        </p>
      </footer>
    </main>
  )
}
