import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import en from '../../public/locales/en-US.json';
import ja from '../../public/locales/ja-JP.json';
import zh from '../../public/locales/zh-CN.json';

export default function Home() {
  const videoRef = useRef(null);
  const { locale, locales, asPath } = useRouter();
  const localeDisplayNames = {
    "en-US": 'EN',
    "ja-JP": '日本語',
    "zh-CN": '中文'
  };
  const getTranslation = (locale, key) => {
    switch (locale) {
      case 'en-US':
        return en[key];
      case 'ja-JP':
        return ja[key];
      case 'zh-CN':
        return zh[key];
      default:
        return en[key];
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 1;
    }
  }, []);

  return (
    <main className="max-h-max flex flex-col bg-white">
      <div id="header" className='max-w-full mx-4 sm:mx-7 my-3 sm:my-3 flex justify-between'>
        <div className='flex flex-row items-center gap-2 sm:gap-3 '>
          <p className="text-2xl sm:text-4xl font-black font-serif text-black pt-2">
            SP Software
          </p>
          <p className="text-2xl sm:text-4xl font-black font-serif text-gray-300 pt-2"> Inc.</p>
        </div>
        <div className='flex flex-row items-center gap-4'>
          {locales.map((loc) => (
            <Link key={loc} href={asPath} locale={loc} legacyBehavior>
              <a className={`text-sm sm:text-md font-semibold ${locale === loc ? 'underline' : ''}`}>
                {localeDisplayNames[loc]}
              </a>
            </Link>
          ))}
        </div>
      </div>
      
      <div className='font-black text-2xl sm:text-5xl md:mx-5 lg:mx-0 self-center mt-10'>
        <p className='text-center'>{getTranslation(locale, "headline")}</p>
      </div>
      
      <div className='flex flex-col items-center gap-20 mt-10 mb-4'>
        <p className='text-xl font-semibold'>Apps</p>
      </div>

      <div className='flex justify-center gap-[200px] mt-10'>
        <div className='flex items-center justify-center text-gray-300 font-black'>
          <p className='text-4xl'>Caspy</p>
        </div>
        
        <Link href="https://www.notesp.app/" target="_blank">
          <div className='flex flex-col items-center justify-center gap-5 cursor-pointer hover:opacity-70'>
            <Image
              src="/notesp-logo.png"
              width={200}
              height={200}
              alt="Notesp Logo"
              priority
            ></Image>
            <p className='font-bold text-3xl'>NoteSP</p>
          </div>
        </Link>
      </div>

      {/* Other content */}

      <footer className="flex flex-col justify-center my-10">
        <div className='self-center mt-4 sm:mt-10 z-10 mb-4 sm:mb-10'>
          <p className="text-sm sm:text-lg font-serif self-center text-black">
            Copyright © 2024 SP Software <span className='text-gray-300'>Inc.</span>, All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}